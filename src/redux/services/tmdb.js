/* eslint-disable */
import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://api.themoviedb.org/3'
const API_KEY =
  import.meta.env.VITE_TMDB_API_KEY


const genres = [{
    id: 28,
    name: 'Action'
  },
  {
    id: 12,
    name: 'Adventure'
  },
  {
    id: 16,
    name: 'Animation'
  },
  {
    id: 35,
    name: 'Comedy'
  },
  {
    id: 80,
    name: 'Crime'
  },
  {
    id: 99,
    name: 'Documentary'
  },
  {
    id: 18,
    name: 'Drama'
  },
  {
    id: 10751,
    name: 'Family'
  },
  {
    id: 14,
    name: 'Fantasy'
  },
  {
    id: 36,
    name: 'History'
  },
  {
    id: 27,
    name: 'Horror'
  },
  {
    id: 10402,
    name: 'Music'
  },
  {
    id: 9648,
    name: 'Mystery'
  },
  {
    id: 10749,
    name: 'Romance'
  },
  {
    id: 878,
    name: 'Science Fiction'
  },
  {
    id: 10770,
    name: 'TV Movie'
  },
  {
    id: 53,
    name: 'Thriller'
  },
  {
    id: 10752,
    name: 'War'
  },
  {
    id: 37,
    name: 'Western'
  }
];


export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  endpoints: (builder) => ({


    // Discover Movies from different Genre
    fetchTrending: builder.query({
      query: () => `/trending/all/week?api_key=${API_KEY}&language=en-US`
    }),

    fetchNetflixOriginals: builder.query({
      query: () => `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    }),

    fetchTopRated: builder.query({
      query: () => `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    }),

    fetchActionMovies: builder.query({
      query: () => `/discover/movie?with_genres=28&page=1&api_key=${API_KEY}`
    }),

    fetchDocumantaries: builder.query({
      query: () => `/discover/movie?api_key=${API_KEY}&with_genres=99`
    }),
    // getSongDetails : builder.query({query : ({songid})=>`/tracks/details?track_id=${songid}`}),

    fetchAdventureMovies: builder.query({
      query: () => `/discover/movie?with_genres=12&page=1&api_key=${API_KEY}`
    }),

    fetchAnimationMovies: builder.query({
      query: () => `/discover/movie?with_genres=16&page=1&api_key=${API_KEY}`
    }),

    fetchComedyMovies: builder.query({
      query: () => `/discover/movie?with_genres=35&page=1&api_key=${API_KEY}`
    }),

    fetchCrimeMovies: builder.query({
      query: () => `/discover/movie?with_genres=80&page=1&api_key=${API_KEY}`
    }),

    fetchDocumentaryMovies: builder.query({
      query: () => `/discover/movie?with_genres=99&page=1&api_key=${API_KEY}`
    }),

    fetchDramaMovies: builder.query({
      query: () => `/discover/movie?with_genres=18&page=1&api_key=${API_KEY}`
    }),

    fetchFamilyMovies: builder.query({
      query: () => `/discover/movie?with_genres=10751&page=1&api_key=${API_KEY}`
    }),

    fetchFantasyMovies: builder.query({
      query: () => `/discover/movie?with_genres=14&page=1&api_key=${API_KEY}`
    }),

    fetchHistoryMovies: builder.query({
      query: () => `/discover/movie?with_genres=36&page=1&api_key=${API_KEY}`
    }),

    fetchHorrorMovies: builder.query({
      query: () => `/discover/movie?with_genres=27&page=1&api_key=${API_KEY}`
    }),

    fetchMusicMovies: builder.query({
      query: () => `/discover/movie?with_genres=10402&page=1&api_key=${API_KEY}`
    }),

    fetchMysteryMovies: builder.query({
      query: () => `/discover/movie?with_genres=9648&page=1&api_key=${API_KEY}`
    }),

    fetchRomanceMovies: builder.query({
      query: () => `/discover/movie?with_genres=10749&page=1&api_key=${API_KEY}`
    }),

    fetchScienceFictionMovies: builder.query({
      query: () => `/discover/movie?with_genres=878&page=1&api_key=${API_KEY}`
    }),

    fetchTVMovies: builder.query({
      query: () => `/discover/movie?with_genres=10770&page=1&api_key=${API_KEY}`
    }),

    fetchThrillerMovies: builder.query({
      query: () => `/discover/movie?with_genres=53&page=1&api_key=${API_KEY}`
    }),

    fetchWarMovies: builder.query({
      query: () => `/discover/movie?with_genres=10752&page=1&api_key=${API_KEY}`
    }),

    fetchWesternMovies: builder.query({
      query: () => `/discover/movie?with_genres=37&page=1&api_key=${API_KEY}`
    }),





    // Discover shows from different Genre
    fetchAdventureShows: builder.query({
      query: () => `/discover/tv?with_genres=16&page=1&api_key=${API_KEY}`
    }),

    fetchActionShows: builder.query({
      query: () => `/discover/tv?with_genres=80&page=1&api_key=${API_KEY}`
    }),

    fetchWarShows: builder.query({
      query: () => `/discover/tv?with_genres=10402&page=1&api_key=${API_KEY}`
    }),

    fetchSciFiShows: builder.query({
      query: () => `/discover/tv?with_genres=37&page=1&api_key=${API_KEY}`
    }),

    fetchFantasyShows: builder.query({
      query: () => `/discover/tv?with_genres=14&page=1&api_key=${API_KEY}`
    }),

    fetchFamilyShows: builder.query({
      query: () => `/discover/tv?with_genres=10751&page=1&api_key=${API_KEY}`
    }),

    fetchDocumentaryShows: builder.query({
      query: () => `/discover/tv?with_genres=99&page=1&api_key=${API_KEY}`
    }),

    fetchHorrorShows: builder.query({
      query: () => `/discover/tv?with_genres=27&page=1&api_key=${API_KEY}`
    }),





    // Get a movie or show
    fetchMovieDetails: builder.query({
      query: ({
        id,
        type
      }) => `/${type}/${id}?append_to_response=videos,credits&api_key=${API_KEY}`
    }),

    fetchDetails: builder.query({
      query: ({
        media_type,
        movie_id
      }) => `${media_type}/${movie_id}?api_key=${API_KEY}&language=en-US`
    }),




    // Get Actor
    getActor: builder.query({
      query: ({
        id
      }) => `person/${id}?api_key=${API_KEY}`,
    }),


    getMovieVideo: builder.query({
      query: ({
        id
      }) => `/movie/${id}/videos?api_key=${API_KEY}`,
    }),


    // Get Recommendations
    getRecommendations: builder.query({
      query: ({
        movie_id,
        list,
        type
      }) => `/${type}/${movie_id}/${list}?api_key=${API_KEY}`,
    }),



    search: builder.query({
      query: ({
        searchQuery
      }) => `/search/movie?query=${searchQuery}&page=1&api_key=${API_KEY}`,
    }),

    //    // Get Movies by [Type]
    // searchMovie: builder.query({
    //   query: ({ genreIdOrCategoryName, page, searchQuery }) => {
    //     // Get Movies by Search
    //     if (searchQuery) {
    //       return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
    //     }

    //     // Get Movies by Category
    //     if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
    //       return `/movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
    //     }

    //     // Get Movies by Genre
    //     if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
    //       return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
    //     }

    //     // Get popular movies by default
    //     return `/movie/popular?page=${page}&api_key=${tmdbApiKey}`;
    //   },
    // }),


    getPopularMovies: builder.query({
      query: () => ` /movie/popular?page=1&api_key=${API_KEY}`,
    }),




    getPopularShows: builder.query({
      query: () => ` /tv/popular?page=1&api_key=${API_KEY}`,
    }),


    // Get Movies by Actor
    getMoviesByActorId: builder.query({
      query: ({ id }) => `/discover/movie?with_cast=${id}&page=1&api_key=${API_KEY}`,
    }),

  })
})

export const {
  useGetPopularMoviesQuery,
  useGetPopularShowsQuery,

  useFetchTrendingQuery,
  useFetchNetflixOriginalsQuery,
  useFetchTopRatedQuery,
  useFetchActionMoviesQuery,
  useFetchDocumantariesQuery,
  useFetchAdventureMoviesQuery,
  useFetchAnimationMoviesQuery,
  useFetchComedyMoviesQuery,
  useFetchCrimeMoviesQuery,
  useFetchDocumentaryMoviesQuery,
  useFetchDramaMoviesQuery,
  useFetchFamilyMoviesQuery,
  useFetchFantasyMoviesQuery,
  useFetchHistoryMoviesQuery,
  useFetchHorrorMoviesQuery,
  useFetchMusicMoviesQuery,
  useFetchMysteryMoviesQuery,
  useFetchRomanceMoviesQuery,
  useFetchScienceFictionMoviesQuery,
  useFetchTVMoviesQuery,
  useFetchThrillerMoviesQuery,
  useFetchWarMoviesQuery,
  useFetchWesternMoviesQuery,

  useSearchQuery,


  useGetRecommendationsQuery,

  useFetchAdventureShowsQuery,
  useFetchActionShowsQuery,
  useFetchWarShowsQuery,
  useFetchSciFiShowsQuery,
  useFetchFamilyShowsQuery,
  useFetchDocumentaryShowsQuery,
  useFetchHorrorShowsQuery,
  useFetchFantasyShowsQuery,





  useFetchMovieDetailsQuery,
  useFetchDetailsQuery,



  useGetActorQuery,
  useGetMoviesByActorIdQuery,

  useGetMovieVideoQuery

} = tmdbApi;