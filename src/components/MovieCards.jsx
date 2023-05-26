import React, { useRef } from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai'
import { Button, message, Space } from 'antd';


const MovieCards = ({ movies, title,type }) => {
  const containerRef = useRef(null);
  const [messageApi, contextHolder] = message.useMessage()

  const handleAddMovie = (event,movie) => {
    event.preventDefault();
    event.stopPropagation();
    const moviesArray = JSON.parse(localStorage.getItem('movies')) || [];
    moviesArray.push(movie);
    localStorage.setItem('movies', JSON.stringify(moviesArray));

    messageApi.open({
      type: 'success',
      content: `${movie?.title || movie?.name} added to your watch list`,
    });
  }



  return (
    <>
     {contextHolder}
      {movies ? (
        <div className="flex flex-col card_main">
          <div className="title text-white ml-5 text-[1.5rem] font-medium">
            {title}
          </div>
          <div className="overflow-x-auto flex mt-5" ref={containerRef}>
            {movies.map((movie) => (
              <Link to={`/${type}/${movie.id}`} className="flex ml-5" key={movie.id}>
                <div
                  className="movie_card_main"
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
                          {movie?.title || movie?.name}
                        </div>

                        <div className="meta mt-4 w-full flex justify-between text-white">
                          <div className="card_low_wrap flex">
                            <div className="rating text-[1rem] flex items-center">⭐{movie?.vote_average}</div>
                            <div className="dot ml-3 flex items-center">• </div>
                            <div className="rating text-[1rem] ml-3 flex items-center">{moment(movie?.release_date).format('D MMM YYYY')}</div>
                            <div className="dot ml-3 flex items-center">• </div>

                            <div className="rating text-[1rem] ml-3 flex items-center">{movie?.original_language.toUpperCase()}</div>
                          </div>

                          <div className="add_it flex justify-center items-center w-[60px] h-[55px] mr-3" onClick={(e) => handleAddMovie(e, movie)}>
                            <AiOutlinePlus />
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
        </div>
      ) : (
        <>Loading Movies...</>
      )}
    </>
  );
};

export default MovieCards;
