import React, { useEffect, useState } from 'react'
import { GoogleLogin, googleLogout  } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Modal } from 'antd';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const location = useLocation();
  

  const routeName = location.pathname;

  const handleSuccess = async(res)=>{
    const decode = jwt_decode(res.credential);
    console.log(decode)
    const userInformation = {
      name : decode.name,
      email : decode.email,
      picture : decode.picture,
    }
    localStorage.setItem('token', decode.sub); // store token in local storage
    localStorage.setItem('user', JSON.stringify(userInformation)); // store user data in local storage

    if(res.credential){
      navigate('/');
    }
  }

  const handleScroll = () => {
    const navbar = document?.querySelector('.navbar');
    const scrolled = window.scrollY;
  
    if (scrolled > 0) {
      if(navbar!==null){
        navbar.style.background = '#000000'; // change to black background
      }
    } else {
      if(navbar!==null){
        navbar.style.background = 'transparent'; // change to transparent background
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className='navbar flex justify-between w-full h-[70px] items-center fixed top-0 z-10'>
      <div className="logo ml-5">
        revu
      </div>


      <div className="nav_info_box mr-5">
      <div className="login text-gray-400 text-[1rem] font-semibold mr-5 cursor-pointer" onClick={() => setOpen(true)}>
        LOG IN
      </div>
      <Modal
        title="Login With Google"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={300}
        className='login_model'
      >
       <GoogleLogin 
          onSuccess={(res)=>handleSuccess(res)}
          onError={()=>{console.log('error')}}
        />
      </Modal>
        
      </div>
    </div>
  )
}

export default Navbar