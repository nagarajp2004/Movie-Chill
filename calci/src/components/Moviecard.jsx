import React from 'react'

const Moviecard = ({movie :{title,vote_average,poster_path,release_date,original_language}}) => {
  return (
    <div>
        <div className='movie-card'>
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`:'./No-Poster.png'} alt={title}/>

      <p  className="text-white mt-4">{title}</p>
    <div className='content'>
        <div className='rating'>
               <img src='./Rating.svg' alt='star'/>
               <p>{vote_average ? vote_average.toFixed(1):'N/A'}</p>
        </div>
      <span>•</span>
      <p className='lang'>{original_language}</p>

      <br></br>
        <span>•</span>
        <p className='year'>{release_date ? release_date.split('-')[0]:'N/A'} </p>
    </div>

      </div>
    </div>
  )
}

export default Moviecard
