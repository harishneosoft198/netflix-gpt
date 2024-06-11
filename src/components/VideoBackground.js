import React from 'react'
import { useSelector } from 'react-redux';
import useTrailerVideo from '../customHooks/useTrailerVideo';

const VideoBackground = (props) => {
  const {movieId} = props;
  const trailer = useSelector((store)=>store.movies?.movieTrailer);
  useTrailerVideo(movieId);
  return (
    <div className='w-screen box-border'>
      {trailer &&
      <iframe 
      className='w-screen aspect-video'
      src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}
      frameBorder="0" allowFullScreen></iframe>
      }
    </div>
  )
}

export default VideoBackground