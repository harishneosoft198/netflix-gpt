import React from 'react'

const VideoTitle = (props) => {
    const {title,overview} =  props;
  return (
    <div className='absolute pt-36 text-white px-12 bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='font-bold text-3xl'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-gray-400 p-[10px] rounded-lg px-10 bg-opacity-35'>Play ▶</button>
            <button className='bg-gray-400 p-[10px] rounded-lg mx-2 bg-opacity-35'>More Info ℹ</button>
        </div>
    </div>
  )
}

export default VideoTitle