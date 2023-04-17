import React, { useState, useEffect } from 'react';
import { useFetchNetflixOriginalsQuery } from '../redux/services/tmdb';
import { BsFillPlayFill,BsArrowRight } from 'react-icons/bs'


const Banner = () => {
  const { data, isFetching, error } = useFetchNetflixOriginalsQuery();
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


  return (
    <>
      {randomBanner && (
        <div
          className="w-full h-screen flex flex-col relative"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `linear-gradient(to right, ${randomColor} 0%, ${randomColor} 60%, rgba(0, 0, 0, 0.5) 100%), url("https://image.tmdb.org/t/p/original/${randomBanner?.backdrop_path}")`,
          }}
        >

            <div className="banner_data">
                <div className="start_watching text-white text-[1rem] ">START WATCHING</div>

                <div className="banner_title"
                  style={{ 
                    fontFamily : randomFont
                  }}
                >
                  {randomBanner?.title}
                </div>

                <div className="banner_description line-clamp-3 banner_description max-h-[9rem] md:h-40 lg:h-48 overflow-hidden">
                  {randomBanner?.overview}...
                </div>

                <div className="meta mt-4 max-w-[200px] flex justify-between text-white">
                  <div className="rating text-[1rem]">⭐{randomBanner?.vote_average}</div>
                  <div className="dot">•</div>
                  <div className="rating text-[1rem]">{randomBanner?.release_date.slice(0,4)}</div>
                  <div className="dot">•</div>

                  <div className="rating text-[1rem]">{randomBanner?.original_language.toUpperCase()}</div>
                </div>

                <div className="btns_banner flex justify-between">
                    <div className="data flex">
                    <div className="play bg-[#ffffff] cursor-pointer flex justify-between">
                          <BsFillPlayFill />
                          <div className="play_title">PLAY</div>
                      </div>
                      <div className="details ml-5 bg-[#ffffff42] cursor-pointer flex justify-between">
                        <BsArrowRight className='text-white'/>
                        <div className="details_title ml-2 text-white">DETAILS</div>
                      </div>
                    </div>

                    <div className="hulu_logo mr-16 flex flex-col items-center justify-center">
                      <svg viewBox="0 -2 61 24" height="24" width="61" role="img" aria-labelledby="logoTitle" fill="#ffffff"><title id="logoTitle">hulu</title><path d="M9.57046613 6.24096927h-3.1015504c-1.0875017 0-1.63435327.29263768-1.63435327.29263768V0H0v20h4.83456246v-8.0704467c0-.7137436.58067743-1.29171 1.2958127-1.29171h2.81374862c.7162628 0 1.29524892.5779664 1.29524892 1.29171V20h4.8359719v-8.6950777c0-3.65670596-2.4444829-5.06395303-5.50487847-5.06395303zm46.48012787 0v8.06932223c0 .714868-.579268 1.2931156-1.294967 1.2931156h-2.8134668c-.7162628 0-1.2952489-.5782476-1.2952489-1.2931156V6.24096927h-4.8368175V14.712844c0 3.4627386 2.2220777 5.287156 5.5062878 5.287156h4.7347762v-.0247379c3.0245965 0 4.8354081-2.1465718 4.8354081-5.2624181V6.24096927H56.050594zM28.7728487 14.3102915c0 .714868-.5798318 1.2931156-1.2955308 1.2931156h-2.8137486c-.7162628 0-1.2955308-.5782476-1.2955308-1.2931156V6.24096927h-4.8359719V14.712844c0 3.4627386 2.2220778 5.287156 5.506006 5.287156h4.7347761v-.0247379c3.0248785 0 4.8359719-2.1465718 4.8359719-5.2624181V6.24096927h-4.8359719v8.06932223zM37.294431 20h4.8365357V0H37.294431v20z" fillRule="evenodd"></path></svg>

                      <div className="orignals_banner_logo mt-3">
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

