import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const moviesList = useSelector((store)=>store.movies);
  if(!moviesList.popularMovies || !moviesList.nowPlayingMovies || !moviesList.topRatedMovies || !moviesList.upcomingMovies) return;
  return (
    <div className='px-[30px] bg-black'>
      <div className='relative z-[1] -mt-[150px]'>
        <MoviesList title='Now playing' moviesList={moviesList.nowPlayingMovies}/>
        <MoviesList title='Popular' moviesList={moviesList.popularMovies}/>
        <MoviesList title='Top Rated' moviesList={moviesList.topRatedMovies}/>
        <MoviesList title='Upcoming Movies' moviesList={moviesList.upcomingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer