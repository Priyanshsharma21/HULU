import React from 'react'
import { useFetchMovieDetailsQuery, useGetRecommendationsQuery } from '../redux/services/tmdb';
import { useParams } from 'react-router-dom';
import { Col, Rate } from 'antd';
import { BsArrowRight, BsFillPlayFill } from 'react-icons/bs';
import { CastCard, MovieCards, RecoCard } from '../components';
import { Row } from 'antd'

const MovieDetails = () => {
    const {id,type} = useParams()


    const { data: movieDetail, isFetching: isMoviDetail, error: detailError } = useFetchMovieDetailsQuery({id : id, type : type});

    const { data: recommendations } = useGetRecommendationsQuery({ list: '/recommendations', movie_id: id, type : type });


  
  if (isMoviDetail) {
    return <div>Loading....</div>;
  }

  if (detailError) {
    return <div>Something went wrong</div>;
  }

  // console.log(recommendations)

  


const filteredRecommendations = recommendations?.results?.filter(mvi=>{
  return mvi.backdrop_path !==null
})




  return (
    <div clasName="mui_details">
      <div className="detail_banner scroll_area w-full min-h-[100vh] flex flex-col relative"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `linear-gradient(to right, #00000054 0%, #00000054 10%, rgba(0, 0, 0, 0.5) 100%), url("https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path}")`,
          }}
      >

          <div className="mui_details_box">
            <div className="title_of_movie">
              {movieDetail?.title || movieDetail.name}
            </div>

            <div className="banner_description">
              {movieDetail?.overview.slice(0,300)}
            </div>
            <div className="rating mt-4">
              <Rate disabled defaultValue={movieDetail?.vote_average - 5} className='' />
            </div>

            <div className="genres flex">
              {movieDetail?.genres?.map((genre)=>(
                <div className="genre">{genre?.name}</div>
              ))}
            </div>

            <div className="data flex mt-6">
                <a className="movie_detail_btm_box" href={movieDetail?.homepage} target="_blank" rel="noopener">Website</a>
                
                <a className="movie_detail_btm_box ml-5" href={`https://www.imdb.com/title/${movieDetail?.imdb_id}`}>IMDB</a>

                <a className="movie_detail_btm_box ml-5" href={`https://www.imdb.com/title/${movieDetail?.imdb_id}`}>Trailer</a>
            </div>
          </div>

      </div>
      


      <div className="movie_casts w-full min-h-[100vh] scroll_area">
          <div className="cast_title">TOP CAST</div>
          <div className="cast_details flex">
          <Row className="w-full flex justify-center items-center">
            {movieDetail?.credits?.cast?.slice(0,10)?.map((cast)=>(
              <Col xl={4} md={6} sm={12} xs={24} className="cst_col">
                <CastCard cast={cast}/>
              </Col>
              ))}
          </Row>
          </div>
      </div>




      <div className="movie_videos w-full min-h-[100vh] scroll_area mt-20">
          <div className="cast_title">You might also like</div>

          <Row className="w-full flex justify-center items-center">
            {filteredRecommendations?.map((movie)=>(
              <Col xl={4} md={6} sm={12} xs={24} className="ml-10">
                <RecoCard movie={movie}/>
              </Col>
              ))}
          </Row>
          

      </div>
    </div>
  )
}

export default MovieDetails