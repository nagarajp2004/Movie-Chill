import React from "react";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner"
import Moviecard from "./components/Moviecard";
import { useDebounce } from "react-use";
import { updateSearchCount } from "./appwrite";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API;


const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }

}


function App() {

  const [searchTerm, setsearch] = useState('');
  const [errorTerm, setErrorTerm] = useState('');
  const [movielist, setmovielist] = useState('');
  const [isloading, setisloading] = useState(false);
  const [debounceterm,setdebounceterm]=useState('');


  useDebounce ( ()=>{
    setdebounceterm(searchTerm)},500,[searchTerm]
  );


  const fetchMovies = async (query=' ') => {
    setisloading(true);
    setErrorTerm('');

    try {
      const endpoint = query?
      `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      :`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("failed to fetch a movie");
      }
      const data = await response.json();
      if (data.response == 'false') {
        setErrorTerm(data.Error || 'failed to fetch movie');
        setmovielist([]);
        return;
      }
      setmovielist(data.results || []);

      if(query && data.results.length>0){
        await updateSearchCount(query,data.results[0]);
      }

      console.log(data);
    }
    catch (error) {
      console.error("error in fetch the movie");
      setErrorTerm("error has occured ");
    }
    finally {
      setisloading(false);
    }

  }



  useEffect(() => {
    fetchMovies(debounceterm);
  }, [debounceterm])

  return (
    <main>
      <div className="absolute inset-0 h-screen w-full bg-cover bg-center bg-[url('./BG.png')]" />

      <div className="wrapper">

        <header>
          <img src="./hero-img.png" alt="heros photo" />
          <h1>find the <span className="text-gradient">movie </span>u want see</h1>

          <Search searchTerm={searchTerm} setsearch={setsearch} />
        </header>


        <section className="all-movies">
          <h2 className="mt-[100px] text-2xl text-white">All Movies</h2>
          {isloading ? <Spinner/>: errorTerm ? (<p className="text-red-500">{errorTerm}</p>) :
            (
              <ul>
                {movielist && movielist.map((movie) => (
                  <Moviecard key={movie.id} movie={movie} />
                ))}
              </ul>
            )
          }
        </section>
      </div>

    </main>
  );
}

export default App;
