import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'antd';
import { Banner, MovieCards } from '../components';
import {
  useFetchActionMoviesQuery,
  useFetchComedyMoviesQuery,
  useFetchNetflixOriginalsQuery,
  useFetchRomanceMoviesQuery,
  useFetchTopRatedQuery,
  useFetchTrendingQuery,
  useFetchDocumantariesQuery,
  useFetchDramaMoviesQuery,
  useFetchMusicMoviesQuery
} from '../redux/services/tmdb';

const Home = () => {
  const { data: trendingData, isFetching: isTrendingFetching, error: trendingError } = useFetchTrendingQuery();
  const { data: netflixOriginalsData, isFetching: isNetflixFetching, error: netflixError } = useFetchNetflixOriginalsQuery();
  const { data: topRatedData, isFetching: isTopRatedFetching, error: topRatedError } = useFetchMusicMoviesQuery();

  const { data: actionMoviesData, isFetching: isActionFetching, error: actionError } = useFetchDramaMoviesQuery();

  const { data: comedyMoviesData, isFetching: isComedyFetching, error: comedyError } = useFetchComedyMoviesQuery();
  const { data: romanceMoviesData, isFetching: isRomanceFetching, error: romanceError } = useFetchRomanceMoviesQuery();
  const { data: documentariesData, isFetching: isDocumentariesFetching, error: documentariesError } = useFetchDocumantariesQuery();

  const colors = ['#c337639d', '#714f1d9a', '#37ce29a7', '#22c5c2a4','#224bc5a4','#7922c594','#c5222294'];
  const [randomColor, setRandomColor] = useState(null);

  useEffect(() => {
    if (trendingData && trendingData.results) {
      const randomColorIndex = Math.floor(Math.random() * colors.length);
      setRandomColor(colors[randomColorIndex]);
    }
  }, [trendingData, colors]);


  if (
    isTrendingFetching ||
    isNetflixFetching ||
    isTopRatedFetching ||
    isActionFetching ||
    isComedyFetching ||
    isRomanceFetching ||
    isDocumentariesFetching
  ) {
    return <div>Loading....</div>;
  }

  if (
    trendingError ||
    netflixError ||
    topRatedError ||
    actionError ||
    comedyError ||
    romanceError ||
    documentariesError
  ) {
    return <div>Something went wrong</div>;
  }




  return (
    <div className="home"
    style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `linear-gradient(275deg, rgb(34 197 194 / 61%) 0%, rgb(34 197 194 / 27%) 60%, rgba(0, 0, 0, 0.5) 100%)`,
      }}
    >
      <Banner />
      <div className="content relative">
        {trendingData && (
         <div className="flex overflow-x-auto relative bottom-32 cursor-pointer">
          <MovieCards movies={trendingData.results} title="TREANDING NOW"/>
         </div>
        )}


        {netflixOriginalsData && (
         <div className="flex overflow-x-auto cursor-pointer">
          <MovieCards movies={netflixOriginalsData.results} title="HULU ORIGNALS"/>
         </div>
        )}

        
        {topRatedData && (
         <div className="flex overflow-x-auto mt-8 cursor-pointer">
          <MovieCards movies={topRatedData.results} title="MUSIC MOVIES"/>
         </div>
        )}


        {actionMoviesData && (
         <div className="flex overflow-x-auto mt-8 cursor-pointer">
          <MovieCards movies={actionMoviesData.results} title="DRAMA MOVIES"/>
         </div>
        )}



        {comedyMoviesData && (
         <div className="flex overflow-x-auto mt-8 cursor-pointer">
          <MovieCards movies={comedyMoviesData.results} title="COMADY MOVIES"/>
         </div>
        )}
      </div>
    </div>
  )
}

export default Home;
