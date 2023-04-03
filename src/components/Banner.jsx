import React, { useState, useEffect } from 'react';
import { useFetchNetflixOriginalsQuery } from '../redux/services/tmdb';

const Banner = () => {
  const { data, isFetching, error } = useFetchNetflixOriginalsQuery();
  const [randomBanner, setRandomBanner] = useState(null);
  const colors = ['#c337639d', '#714f1d9a', '#37ce29a7', '#22c5c2a4','#224bc5a4','#7922c594','#c5222294'];
  const [randomColor, setRandomColor] = useState(null);

  useEffect(() => {
    if (data && data.results) {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setRandomBanner(data.results[randomIndex]);
      const randomColorIndex = Math.floor(Math.random() * colors.length);
      setRandomColor(colors[randomColorIndex]);
    }
  }, [data, colors]);

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
          <div className="absolute inset-0 opacity-25 bg-black"></div>
          <div className="text-white z-10">
            Hello - {randomBanner?.title}
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
