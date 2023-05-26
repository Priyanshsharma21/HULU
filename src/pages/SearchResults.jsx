import React from 'react'
import {useParams} from 'react-router-dom'
import { useSearchQuery } from '../redux/services/tmdb'
import { Spin } from 'antd';
import {Row,Col} from 'antd'
import {RecoCard} from '../components/index.js'

const SearchResults = () => {
    const {sqry} = useParams()

    const { data: movie, isFetching: isMovie, error: movieError } = useSearchQuery({searchQuery : sqry});


    if(isMovie) return "...Loading"
    if(movieError) return "...Something Went Wrong"

    console.log(movie)

    // const filteredMovies = movie?.filter(movie=>{
    //   return movie.backdrop_path !==undefined
    // })

    // console.log(filteredMovies)

  return (
    <div className="text-white mt-20">
        <div className="title_Search ">Search Results For {sqry}</div>

        {sqry ? (
          <Row className="w-full flex justify-center items-center">
            {movie.results?.map((movie)=>(
              <Col xl={4} md={6} sm={12} xs={24} className="ml-10">
                <RecoCard movie={movie}/>
              </Col>
              ))}
            </Row>
        ):(
         <> <Spin  /></>
        )}
    </div>
  )
}

export default SearchResults