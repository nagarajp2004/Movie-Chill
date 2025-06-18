import React from 'react'

const Search = ({searchTerm,setsearch}) => {
  return (
    <div className='search'>
       <div>
        <img src='./Vector.svg'/>
        <input 
        type='text'
        placeholder='search through movie'
        value={searchTerm}
        onChange={(event)=> setsearch(event.target.value)}  
        />
       </div>
    </div>
  )
}

export default Search;  
