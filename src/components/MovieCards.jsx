import React, { useRef } from 'react';

const MovieCards = ({ movies, title }) => {
  const containerRef = useRef(null);


  //   {
//     "adult": false,
//     "backdrop_path": "/ovM06PdF3M8wvKb06i4sjW3xoww.jpg",
//     "id": 76600,
//     "title": "Avatar: The Way of Water",
//     "original_language": "en",
//     "original_title": "Avatar: The Way of Water",
//     "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
//     "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
//     "media_type": "movie",
//     "genre_ids": [
//         878,
//         12,
//         28
//     ],
//     "popularity": 8097.311,
//     "release_date": "2022-12-14",
//     "video": false,
//     "vote_average": 7.751,
//     "vote_count": 6570
// }


  return (
    <>
      {movies ? (
        <div className="flex flex-col card_main">
          <div className="title text-white ml-5 text-[1.5rem] font-medium">
            {title}
          </div>
          <div className="overflow-x-auto flex mt-5" ref={containerRef}>
            {movies.map((movie) => (
              <div className="flex ml-5" key={movie.id}>
                <div
                  className="movie_card_main w-[550px] h-[400px]"
                  style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundImage: `linear-gradient(558deg, rgb(0 0 0 / 0%) 5%, rgb(0 0 0 / 51%) 62%, rgb(0 0 0 / 59%) 102%), url("https://image.tmdb.org/t/p/original/${movie.poster_path ? movie.poster_path : movie.backdrop_path}")`,
                  }}
                >


                  <div className="card_data w-full h-full justify-end flex flex-col">
                    <div className="flex_items ml-4 mb-5">
                      <div className="start_watching start_watching_card text-white text-[1rem] ">START WATCHING</div>
                        <div className="banner_title card_title">
                          {movie?.title}
                        </div>

                        <div className="meta mt-4 max-w-[200px] flex justify-between text-white">
                          <div className="rating text-[1rem]">⭐{movie?.vote_average}</div>
                          <div className="dot">•</div>
                          <div className="rating text-[1rem]">{movie?.release_date}</div>
                          <div className="dot">•</div>

                          <div className="rating text-[1rem]">{movie?.original_language.toUpperCase()}</div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div
            className="scroll-button text-white"
            onClick={handleScrollRight}
            aria-label="Scroll right"
          >
            Scroll
          </div> */}
        </div>
      ) : (
        <>Loading Movies...</>
      )}
    </>
  );
};

export default MovieCards;
