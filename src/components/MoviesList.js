import React from 'react'
import MovieCard from './MovieCard';

const MoviesList = ({title,moviesList}) => {
 
  return (
    <div>
      <h1 className='font-bold text-xl py-[15px] text-white'>{title}</h1>
      <div className='flex overflow-x-auto overflow-y-hidden no-scrollbar'>
        <div className='flex'>
          {moviesList.map(movie=>(<MovieCard key={movie.id} posterPath={movie.poster_path}/>))}
          
        </div>
      </div>
    </div>
  )
}

export default MoviesList