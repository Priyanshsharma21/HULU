import React from 'react'
import { Link } from 'react-router-dom'

const CastCard = ({cast}) => {

  return (
    <Link to={`/artist/${cast?.id}`} className="">
    <div className="cast_card">
        <img className="actor_img" src={`https://image.tmdb.org/t/p/original/${cast.profile_path ? cast.profile_path : cast.profile_path}`} alt="actor image" />
          <div className="act_name text-white mt-2">{cast?.original_name}</div>
          <div className="char_name text-slate-300 ">{cast?.character}</div>
    </div>
    </Link>
  )
}

export default CastCard