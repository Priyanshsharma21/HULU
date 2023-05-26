import React from 'react'
import { Banner, BigBanner, GridCard, MovieCards, SmallCard } from '../components'
import { useFetchActionShowsQuery, useFetchAdventureShowsQuery, useFetchDocumentaryShowsQuery, useFetchFamilyShowsQuery, useFetchFantasyShowsQuery, useFetchHorrorShowsQuery, useFetchMusicMoviesQuery, useFetchSciFiShowsQuery, useFetchWarShowsQuery } from '../redux/services/tmdb'

const Shows = () => {
  
  const { data: anime, isFetching: isAdvShow, error: advError } = useFetchAdventureShowsQuery();
  const { data: action, isFetching: isAction, error: actionError } = useFetchActionShowsQuery();
  const { data: war, isFetching: isWar, error: warError } = useFetchWarShowsQuery();
  const { data: sciFi, isFetching: isSciFi, error: sciFiError } = useFetchSciFiShowsQuery();
  const { data: fantasy, isFetching: isFantasy, error: fantasyError } = useFetchFantasyShowsQuery();
  const { data: family, isFetching: isFamily, error: familyError } = useFetchFamilyShowsQuery();
  const { data: documentary, isFetching: isDocumentary, error: documentaryError } = useFetchDocumentaryShowsQuery();
  const { data: horror, isFetching: isHorror, error: horrorError } = useFetchHorrorShowsQuery();

  
  // console.log(anime)
  
  if (
    isAdvShow ||
    isAction ||
    isWar ||
    isSciFi ||
    isFantasy ||
    isFamily ||
    isDocumentary ||
    isHorror
  ) {
    return <div>Loading....</div>;
  }

  if (
    advError ||
    actionError ||
    warError ||
    sciFiError ||
    fantasyError ||
    familyError ||
    documentaryError ||
    horrorError
  ) {
    return <div>Something went wrong</div>;
  }



  return (
    <>
      <div className="shows"
    style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `linear-gradient(275deg, rgb(34 197 194 / 61%) 0%, rgb(34 197 194 / 27%) 60%, rgba(0, 0, 0, 0.5) 100%)`,
      }}
    >
      <Banner />
      <div className="content relative mt-12 movie_content">

      {anime && (
         <div className="flex overflow-x-auto mt-8 cursor-pointer">
          <MovieCards type="tv" movies={anime.results} title="ANIMATED SHOWS"/>
         </div>
        )}

        {action && (
         <div className="flex overflow-x-auto mt-8 cursor-pointer">
          <MovieCards type="tv" movies={action.results} title="ACTION SHOWS"/>
         </div>
        )}
       

        {family && (
         <div className="flex overflow-x-auto mt-8 cursor-pointer">
          <SmallCard type="tv" movies={family.results} title="FAMILY SHOWS"/>
         </div>
        )}

        {war && (
         <div className="flex overflow-x-auto mt-8 cursor-pointer">
          <GridCard type="tv" movies={war.results} title="MUSIC SHOWS"/>
         </div>
        )}

        {documentary && (
         <div className="flex overflow-x-auto mt-8 cursor-pointer">
          <SmallCard type="tv" movies={documentary.results} title="DOCUMENTARYS"/>
         </div>
        )}
       

        {/* {family && (
         <div className="flex overflow-x-auto mt-8 cursor-pointer">
          <GridCard movies={family.results} title="FAMILY SHOWS"/>
         </div>
        )} */}

        {/* {horror && (
         <div className="flex overflow-x-auto mt-8 cursor-pointer">
          <SmallCard movies={horror.results} title="HORROR SHOWS"/>
         </div>
        )} */}
        
        <BigBanner type="tv" data={sciFi} tags={["Science", "Mindblown"]}/>

        
      </div>
    </div>
    </>
  )
}

export default Shows