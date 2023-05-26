import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetActorQuery, useGetMoviesByActorIdQuery } from '../redux/services/tmdb';
import moment from 'moment'
import { RecoCard } from '../components';
import { Col, Row } from 'antd';


const ArtistDetails = () => {
    const {id} = useParams()


    const { data: artistDetail, isFetching: isArtist, error: artistError } = useGetActorQuery({id : id});
    const { data: artistMviDetail, isFetching: isArtistMvi, error: artistMviError } = useGetMoviesByActorIdQuery({id : id});
    
    
    // console.log(artistMviDetail)



    if (isArtist && isArtistMvi) {
        return <div>Loading....</div>;
      }
    
      if (artistError && artistMviError) {
        return <div>Something went wrong</div>;
      }
    

  return (
    <div clasName="mui_details">
    <div className="detail_banner scroll_area w-full min-h-[100vh] flex flex-col relative"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundImage: `linear-gradient(to right, #00000054 0%, #00000054 10%, rgba(0, 0, 0, 0.5) 100%), url("https://image.tmdb.org/t/p/original/${artistDetail?.profile_path}")`,
        }}
    >

        <div className="mui_details_box">
          <div className="title_of_movie">
            {artistDetail?.name }
          </div>

          <div className="dob">
            {moment(artistDetail?.birthday).format('D MMM YYYY')}
          </div>

          <div className="banner_description artist_banner_desc text-[0.8rem]">
            {artistDetail?.biography.slice(0,900)}
          </div>
          <a target="_blank" rel="noopener noreferrer" href={`https://imdb.com/name/${artistDetail?.imdb_id}`} className="imdb">
              IMDB
          </a>
          
        </div>
       
    </div>
    



    <div className="movie_videos w-full min-h-[100vh] scroll_area mt-20">
        <div className="cast_title">You might also like</div>

        <Row className="w-full flex justify-center items-center">
          {artistMviDetail?.results?.map((movie)=>(
            <Col xl={4} md={6} sm={12} xs={24} className="ml-10">
              <RecoCard movie={movie}/>
            </Col>
            ))}
        </Row>
        

    </div>
  </div>
  )
}

export default ArtistDetails