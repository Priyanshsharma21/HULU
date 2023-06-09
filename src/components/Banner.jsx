import React, { useState, useEffect } from 'react';
import { useFetchNetflixOriginalsQuery,useGetPopularMoviesQuery, useGetPopularShowsQuery } from '../redux/services/tmdb';
import { BsFillPlayFill,BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Banner = () => {
  const { data, isFetching, error } = useFetchNetflixOriginalsQuery();

  // const { data, isFetching, error } = useGetPopularShowsQuery();
  const [randomBanner, setRandomBanner] = useState(null);
  const colors = ['#c337639d', '#714f1d9a', '#37ce29a7', '#22c5c2a4','#224bc5a4','#7922c594','#c5222294'];
  const fontFamilies = [
    "Lobster",
    "Bangers",
    "Montserrat",
    "Oswald",
    "Roboto",
    "Raleway",
    "Open Sans",
    "Poppins",
  ];

  const [randomColor, setRandomColor] = useState(null);
  const [randomFont, setRandomFont] = useState(null);

  
  useEffect(() => {
    if (data && data.results && !randomBanner) {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setRandomBanner(data.results[randomIndex]);
      const randomColorIndex = Math.floor(Math.random() * colors.length);
      setRandomColor(colors[randomColorIndex]);

      const randomFontIndex = Math.floor(Math.random() * colors.length);
      setRandomFont(fontFamilies[randomFontIndex]);
    }
  }, [data, colors, randomBanner]);

  if (isFetching) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }


  // console.log(data)

  return (
    <>
      {randomBanner && (
        <div
          className="w-full h-screen flex flex-col relative"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `linear-gradient(to right, ${randomColor} 0%, ${randomColor} 10%, rgba(0, 0, 0, 0.5) 100%), url("https://image.tmdb.org/t/p/original/${randomBanner?.backdrop_path}")`,
          }}
        >

            <div className="banner_data">
                <div className="start_watching text-slate-100 text-[1rem] ">START WATCHING</div>

                <div className="banner_title"
                  style={{ 
                    fontFamily : randomFont
                  }}
                >
                  {randomBanner?.title}
                </div>

                <div className="banner_description line-clamp-3 banner_description max-h-[9rem] md:h-40 lg:h-48 overflow-hidden">
                  {randomBanner?.overview.slice(0,200)}...
                </div>

                <div className="meta mt-2 max-w-[200px] flex justify-between text-white">
                  <div className="rating text-[1rem]">⭐{randomBanner?.vote_average}</div>
                  <div className="dot">•</div>
                  <div className="rating text-[1rem]">{randomBanner?.release_date.slice(0,4)}</div>
                  <div className="dot">•</div>

                  <div className="rating text-[1rem]">{randomBanner?.original_language.toUpperCase()}</div>
                </div>

                <div className="btns_banner flex justify-between">
                    <div className="data flex">
                    <Link to={`/movie/${randomBanner?.id}`}  className="play bg-[#ffffff] cursor-pointer flex justify-between">
                          <BsFillPlayFill />
                          <div className="play_title">PLAY</div>
                      </Link>
                      <div className="details ml-5 bg-[#ffffff42] cursor-pointer flex justify-between">
                        <BsArrowRight className='text-white'/>
                        <div className="details_title ml-2 text-white">DETAILS</div>
                      </div>
                    </div>

                    <div className="hulu_logo mr-16 flex flex-col items-center justify-center">
                      <div className="logo2">revu</div>

                      <div className="orignals_banner_logo ">
                        ORIGNALS
                      </div>
                    </div>
                </div>
            </div>


          <div className="distortion"
          
          ></div>
        </div>
      )}
    </>
  );
};

export default Banner;

