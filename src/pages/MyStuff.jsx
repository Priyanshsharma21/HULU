import React, { useEffect, useState } from 'react'
import { MyStuffCard } from '../components';
import { Col, Row } from 'antd';
import { Button, message, Space } from 'antd';
import { Link } from 'react-router-dom';


const MyStuff = () => {
  const [myMovies, setMyMovies] = useState([]);
  const [messageApi, contextHolder] = message.useMessage()

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies'));
    if (storedMovies) {
      setMyMovies(storedMovies);
    }

    
  }, []);

  console.log(myMovies)

  return (
    <>
     {contextHolder}

     <div className="title text-white ml-5 text-[1.5rem] font-medium mt-20">
          Movies You Liked
    </div>
       {myMovies.length>0 ? (
        <Row className="w-full flex justify-center items-center">
            {myMovies?.map((movie)=>(
              <Col xl={12} md={12} sm={12} xs={24} className="ml-10">
                <MyStuffCard movie={movie}/>
              </Col>
              ))}
      </Row>
       ):(
        <div className="ml-10 mt-20 text-white font-semibold">
           <Link to={'/'}>
            Add Movies
           </Link>
        </div>
       )}
    </>
  )
}

export default MyStuff