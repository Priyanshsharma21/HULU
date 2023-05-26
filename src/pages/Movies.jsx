import React from 'react'
import { Banner, BigBanner, GridCard, MovieCards, SmallCard } from '../components'
import { useFetchTrendingQuery,useFetchMysteryMoviesQuery, useFetchScienceFictionMoviesQuery, useFetchWarMoviesQuery, useFetchWesternMoviesQuery, useFetchTVMoviesQuery } from '../redux/services/tmdb';

const Movies = () => {

  const { data: trendingData, isFetching: isTrendingFetching, error: trendingError } = useFetchTrendingQuery();
  const { data: mystryMovies, isFetching: isMystryMovie, error: mystryError } = useFetchTrendingQuery();
  const { data: sifid, isFetching: issifi, error: sifierror } = useFetchScienceFictionMoviesQuery();
  const { data: war, isFetching: isWar, error: warError } = useFetchWarMoviesQuery();
  const { data: west, isFetching: isWest, error: westError } = useFetchWesternMoviesQuery();
  const { data: tv, isFetching: isTV, error: tvWest } = useFetchTVMoviesQuery();
  
  
  if (
    isTrendingFetching ||
    isMystryMovie ||
    issifi ||
    isWar ||
    isWest ||
    isTV
  ) {
    return <div>Loading....</div>;
  }

  if (
    trendingError ||
    mystryError ||
    sifierror ||
    warError ||
    westError ||
    tvWest
  ) {
    return <div>Something went wrong</div>;
  }



  return (
    <>
      <div className="movies"
    style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `linear-gradient(275deg, rgb(34 197 194 / 61%) 0%, rgb(34 197 194 / 27%) 60%, rgba(0, 0, 0, 0.5) 100%)`,
      }}
    >
      <Banner />
      <div className="content relative movie_content">
       
        


        
        {sifid && (
         <div className="flex overflow-x-auto mt-8 cursor-pointer">
          <MovieCards type="movie" movies={sifid.results} title="SiFi MOVIES"/>
         </div>
        )}


        {war && (
         <div className="flex overflow-x-auto mt-8 cursor-pointer">
          <MovieCards type="movie" movies={war.results} title="WAR MOVIES"/>
         </div>
        )}


        {west && (
         <div className="flex overflow-x-auto mt-8 cursor-pointer">
          <SmallCard type="movie" movies={west.results} title="WESTERN MOVIES"/>
         </div>
        )}

        {tv && (
         <div className="flex overflow-x-auto mt-8 cursor-pointer">
          <GridCard type="movie" movies={tv.results} title="TV MOVIES" />
         </div>
        )}

        {trendingData && (
         <div className="flex overflow-x-auto mt-8 cursor-pointer">
          <SmallCard type="movie" movies={trendingData.results} title="TRENDING MOVIES"/>
         </div>
        )}

        <BigBanner type="movie" data={mystryMovies} tags={["Mystery", "Thriller"]}/>
        
      </div>
    </div>
    </>
  )
}

export default Movies