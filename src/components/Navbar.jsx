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
        <svg viewBox="0 -2 61 24" height="24" width="61" role="img" aria-labelledby="logoTitle" fill="#3cf370"><title id="logoTitle">hulu</title><path d="M9.57046613 6.24096927h-3.1015504c-1.0875017 0-1.63435327.29263768-1.63435327.29263768V0H0v20h4.83456246v-8.0704467c0-.7137436.58067743-1.29171 1.2958127-1.29171h2.81374862c.7162628 0 1.29524892.5779664 1.29524892 1.29171V20h4.8359719v-8.6950777c0-3.65670596-2.4444829-5.06395303-5.50487847-5.06395303zm46.48012787 0v8.06932223c0 .714868-.579268 1.2931156-1.294967 1.2931156h-2.8134668c-.7162628 0-1.2952489-.5782476-1.2952489-1.2931156V6.24096927h-4.8368175V14.712844c0 3.4627386 2.2220777 5.287156 5.5062878 5.287156h4.7347762v-.0247379c3.0245965 0 4.8354081-2.1465718 4.8354081-5.2624181V6.24096927H56.050594zM28.7728487 14.3102915c0 .714868-.5798318 1.2931156-1.2955308 1.2931156h-2.8137486c-.7162628 0-1.2955308-.5782476-1.2955308-1.2931156V6.24096927h-4.8359719V14.712844c0 3.4627386 2.2220778 5.287156 5.506006 5.287156h4.7347761v-.0247379c3.0248785 0 4.8359719-2.1465718 4.8359719-5.2624181V6.24096927h-4.8359719v8.06932223zM37.294431 20h4.8365357V0H37.294431v20z" fillRule="evenodd"></path></svg>
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