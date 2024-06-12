import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-[200px] mr-[8px]'>
      <img src={IMG_CDN + posterPath} alt="card-img"/>
    </div>
  )
}

export default MovieCard