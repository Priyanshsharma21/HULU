import React from 'react'
import { Link } from 'react-router-dom'
import { demo } from '../assets/index.js'

const RecoCard = ({movie}) => {
  return (
    <Link to={`/${movie?.media_type ? movie?.media_type : 'movie'}/${movie?.id}`} className="cast_card">
        <img className="actor_img" src={movie.backdrop_path!==null  ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}` :  demo} alt="actor image" />
        <div className="act_name ot_title text-white mt-2">{movie?.original_title || movie?.name}</div>
         {/* <div className="char_name text-slate-300 ">{movie?.character}</div> */}
 </Link>
  )
}

export default RecoCard

