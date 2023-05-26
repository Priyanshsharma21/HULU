import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { Button, message, Space } from 'antd';



const SmallCard = ({ movies, title,type }) => {
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
          <div className="overflow-x-auto flex mt-5">
            {movies.map((movie) => (
              <Link to={`/${type}/${movie?.id}`} className="flex ml-5 small_card flex-col" key={movie.id}>
                <div
                  className="movie_card_main card_small flex items-end"
                  style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundImage: `linear-gradient(558deg, rgb(0 0 0 / 0%) 5%, rgb(0 0 0 / 51%) 62%, rgb(0 0 0 / 59%) 102%), url("https://image.tmdb.org/t/p/original/${movie.poster_path ? movie.poster_path : movie.backdrop_path}")`,
                  }}
                >

                      <div className="add_it ml-3 mb-3 flex justify-center items-center w-[45px] h-[45px] mr-3" onClick={(event) => handleAddMovie(event,movie)}>
                          <AiOutlinePlus />
                      </div>

                </div>

                <div className="flex_items mt-2 mb-5">
                    <div className="banner_title1 card_title">
                        {movie?.title || movie?.original_name}
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
  )
}

export default SmallCard