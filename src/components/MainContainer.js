import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(movies ===  null) return;
    const randomNumber = Math.floor(Math.random() * 21);
    const mainMovie = movies[randomNumber];
    const {original_title,overview,id} = mainMovie;
    
  return (
    <div className='box-border'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer