import React, { useState, useEffect } from 'react';
import { useFetchNetflixOriginalsQuery } from '../redux/services/tmdb';
import { BsFillPlayFill,BsArrowRight } from 'react-icons/bs'
import moment from 'moment';
import { Link } from 'react-router-dom';


const BigBanner = ({data, tags,type}) => {
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


  return (
    <>
      {randomBanner && (
        <div
          className="w-full h-screen flex flex-col relative mt-10"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `linear-gradient(to right, ${randomColor} 0%, ${randomColor} 10%, rgba(0, 0, 0, 0.5) 100%), url("https://image.tmdb.org/t/p/original/${randomBanner?.backdrop_path ? randomBanner?.backdrop_path : randomBanner?.poster_path}")`,
          }}
        >

            <div className="banner_data">
                

                <div className="tags flex">
                    <div className="tag text-[1rem] text-white">{moment(randomBanner?.release_date).format('YYYY')}</div>
                    {tags.map(tag=>(
                        <div className="tag text-[1rem] text-white">{tag}</div>
                    ))}
                </div>

                <div className="banner_title"
                  style={{ 
                    fontFamily : randomFont
                  }}
                >
                  {randomBanner?.title || randomBanner?.name}
                </div>

                <div className="banner_description desc_banner2 line-clamp-3 banner_description max-h-[9rem] md:h-40 lg:h-48 overflow-hidden">
                  {randomBanner?.overview.slice(0,200)}...
                </div>

                <div className="meta max-w-[200px] flex justify-between text-white">
                  <div className="rating text-[1rem]">⭐{randomBanner?.vote_average}</div>
                  <div className="dot">•</div>
                  <div className="rating text-[1rem]">{
                    moment(randomBanner?.release_date).format('YYYY')
                  }</div>
                  <div className="dot">•</div>

                  <div className="rating text-[1rem]">{randomBanner?.original_language.toUpperCase()}</div>
                </div>

                <div className="btns_banner flex justify-between">
                    <div className="data flex">
                    <Link to={`/${type}/${randomBanner?.id}`} className="play bigb_btn  bg-[#ffffff] cursor-pointer flex justify-between">
                          <BsFillPlayFill />
                          
                    </Link>

                    <div className="details  bigb_btn ml-5 bg-[#ffffff42] cursor-pointer flex justify-between">
                        <BsArrowRight className='text-white'/>
                    </div>
                    </div>

                    <div className="hulu_logo mr-16 flex flex-col items-center justify-center">
                     <div className="logo2">revu</div>

                      <div className="orignals_banner_logo">
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

export default BigBanner;

