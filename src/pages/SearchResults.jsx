import React from 'react'
import {useParams} from 'react-router-dom'

const SearchResults = () => {
    const {sqry} = useParams()

    console.log(sqry)
  return (
    <div className="text-white">
        
    </div>
  )
}

export default SearchResults