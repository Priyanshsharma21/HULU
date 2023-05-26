import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd';
import { BsArrowRight } from 'react-icons/bs';
import moment from 'moment';
import { Link } from 'react-router-dom';

const GridCard = ({movies, title, type}) => {

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

    const gridMovie1 = movies[0]
    const gridMovie2 = movies[1]
    const gridMovie3 = movies[2]
    const gridMovie4 = movies[3]
    const gridMovie5 = movies[4]

    // {
    //     "adult": false,
    //     "backdrop_path": "/nDxJJyA5giRhXx96q1sWbOUjMBI.jpg",
    //     "genre_ids": [
    //         28,
    //         35,
    //         14,
    //         12
    //     ],
    //     "id": 594767,
    //     "original_language": "en",
    //     "original_title": "Shazam! Fury of the Gods",
    //     "overview": "Billy Batson and his foster siblings, who transform into superheroes by saying \"Shazam!\", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.",
    //     "popularity": 3887.11,
    //     "poster_path": "/2VK4d3mqqTc7LVZLnLPeRiPaJ71.jpg",
    //     "release_date": "2023-03-15",
    //     "title": "Shazam! Fury of the Gods",
    //     "video": false,
    //     "vote_average": 6.8,
    //     "vote_count": 1395
    // }

    useEffect(() => {
        if (gridMovie1) {
          const randomColorIndex = Math.floor(Math.random() * colors.length);
          setRandomColor(colors[randomColorIndex]);
    
          const randomFontIndex = Math.floor(Math.random() * colors.length);
          setRandomFont(fontFamilies[randomFontIndex]);
        }
      }, [movies, colors]);



  return (
    <div className='gridMovie flex flex-col w-full'>
        <Row>
            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                <div
                  className="gridCardImg1"
                  style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundImage: `linear-gradient(to right, ${randomColor} 0%, ${randomColor} 10%, rgba(0, 0, 0, 0.5) 100%), url("https://image.tmdb.org/t/p/original/${gridMovie1.poster_path ? gridMovie1.poster_path : gridMovie1.backdrop_path}")`,
                  }}
                >
                    <div className="img_detail ml-5 w-full h-full flex justify-end items-start flex-col">
                        <div className="start_watching start_watching_card text-white text-[1rem] flex justify-center items-center">
                        <Link to={`/${type}/${gridMovie1?.id}`} className="StartWatching mr-3">START WATCHING </Link>
                        <BsArrowRight className='text-white text-[1.5rem]'/>
                        </div>
                        <div className="title_of_grid_img text-white font-semibold">{gridMovie1?.title || gridMovie1?.name}</div>

                        <div className="rating text-[1rem]">{moment(gridMovie1?.release_date || gridMovie1?.first_air_date).format('YYYY')} • {title}</div>
                    </div>
                </div>
            </Col>
            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                <Row>
                    <div
                    className="gridImgCOl2Ing1"
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundImage: `linear-gradient(to right, ${randomColor} 0%, ${randomColor} 10%, rgba(0, 0, 0, 0.5) 100%), url("https://image.tmdb.org/t/p/original/${gridMovie2.poster_path ? gridMovie2.poster_path : gridMovie2.backdrop_path}")`,
                    }}
                    >
                        <div className="img_detail ml-5 w-full h-full flex justify-end items-start flex-col">
                        <div className="start_watching start_watching_card text-white text-[1rem] flex justify-center items-center">
                        <Link to={`/${type}/${gridMovie2?.id}`} className="StartWatching mr-3">START WATCHING </Link>
                        <BsArrowRight className='text-white text-[1.5rem]'/>
                        </div>
                        <div className="title_of_grid_img text-white font-semibold">{gridMovie2?.title || gridMovie2?.name}</div>

                        <div className="rating text-[1rem]">{moment(gridMovie2?.release_date || gridMovie2?.first_air_date).format('YYYY')} • COMEDY</div>
                    </div>
                    </div>
                </Row>

                <Row>
                    <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                        <div
                        className="gridImgCOl2Ing1"
                        style={{
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundImage: `linear-gradient(to right, ${randomColor} 0%, ${randomColor} 10%, rgba(0, 0, 0, 0.5) 100%), url("https://image.tmdb.org/t/p/original/${gridMovie3.poster_path ? gridMovie3.poster_path : gridMovie3.backdrop_path}")`,
                        }}
                        >
                            <div className="img_detail ml-5 w-full h-full flex justify-end items-start flex-col">
                        <div className="start_watching start_watching_card text-white text-[1rem] flex justify-center items-center">
                        <Link to={`/${type}/${gridMovie3?.id}`} className="StartWatching mr-3">START WATCHING </Link>
                        <BsArrowRight className='text-white text-[1.5rem]'/>
                        </div>
                        <div className="title_of_grid_img text-white font-semibold">{gridMovie3?.title || gridMovie3?.name}</div>

                        <div className="rating text-[1rem]">{moment(gridMovie3?.release_date || gridMovie3?.first_air_date).format('YYYY')} • COMEDY</div>
                    </div>
                        </div>
                    </Col>
                    <Col xl={12} lg={12} md={24} sm={24} xs={24} >
                        <div
                        className="gridImgCOl2Ing1"
                        style={{
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundImage: `linear-gradient(to right, ${randomColor} 0%, ${randomColor} 10%, rgba(0, 0, 0, 0.5) 100%), url("https://image.tmdb.org/t/p/original/${gridMovie4.poster_path ? gridMovie4.poster_path : gridMovie4.backdrop_path}")`,
                        }}
                        >
                            <div className="img_detail ml-5 w-full h-full flex justify-end items-start flex-col">
                        <div className="start_watching start_watching_card text-white text-[1rem] flex justify-center items-center">
                        <Link to={`/${type}/${gridMovie4?.id}`} className="StartWatching mr-3">START WATCHING </Link>
                        <BsArrowRight className='text-white text-[1.5rem]'/>
                        </div>
                        <div className="title_of_grid_img text-white font-semibold">{gridMovie4?.title || gridMovie4?.name}</div>

                        <div className="rating text-[1rem]">{moment(gridMovie4?.release_date || gridMovie4?.first_air_date).format('YYYY')} • COMEDY</div>
                    </div>
                        </div>
                    </Col>
                </Row>
                
            </Col>
        </Row>
    </div>
  )
}

export default GridCard