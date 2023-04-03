/* eslint-disable */
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://api.themoviedb.org/3'
const API_KEY = '726f92e1f400054de4c2b4b7a406470a'

export const tmdbApi = createApi({
    reducerPath : 'tmdbApi',
    baseQuery : fetchBaseQuery({
        baseUrl : baseUrl,
    }),
    
    endpoints : (builder)=>({
        fetchTrending : builder.query({query : ()=>`/trending/all/week?api_key=${API_KEY}&language=en-US`}),
        fetchNetflixOriginals : builder.query({query : ()=>`/movie/top_rated?api_key=${API_KEY}&language=en-US`}),
        fetchTopRated : builder.query({query : ()=>`/movie/top_rated?api_key=${API_KEY}&language=en-US`}),
        fetchActionMovies : builder.query({query : ()=>`/discover/movie?api_key=${API_KEY}&with_genres=28`}),
        fetchComedyMovies : builder.query({query : ()=>`/discover/movie?api_key=${API_KEY}&with_genres=35`}),
        fetchRomanceMovies : builder.query({query : ()=>`/discover/movie?api_key=${API_KEY}&with_genres=27`}),
        fetchDocumantaries : builder.query({query : ()=>`/discover/movie?api_key=${API_KEY}&with_genres=99`}),
        // getSongDetails : builder.query({query : ({songid})=>`/tracks/details?track_id=${songid}`}),
    })
})

export const {
    useFetchTrendingQuery,
    useFetchNetflixOriginalsQuery,
    useFetchTopRatedQuery,
    useFetchActionMoviesQuery,
    useFetchComedyMoviesQuery,
    useFetchRomanceMoviesQuery,
    useFetchDocumantariesQuery,
  } = tmdbApi;
