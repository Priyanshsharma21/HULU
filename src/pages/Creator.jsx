import React from 'react'
import { bg,
    priyansh } from '../assets/index.js'
import { AiFillLinkedin,AiFillYoutube,AiFillGithub,AiFillInstagram } from 'react-icons/ai'


const Creator = () => {
  return (
    <div 
    className="detail_banner scroll_area w-full min-h-[100vh] flex flex-col relative"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `linear-gradient(to right, #00000054 0%, #00000054 10%, rgba(0, 0, 0, 0.5) 100%), url(${bg})`,
        }}
    >

        <div className="mainCardBox w-full h-screen flex justify-center items-center">
            <div className="mainCard flex items-center flex-col">
                <div className="img_c_box w-full flex justify-center">
                    <img className="main_c_bg" src={priyansh} alt="Priyansh Sharma" />
                </div>
                <div className="name_c">
                    Priyansh Sharma
                </div>

                <div className="about_c">
                MERN Stack Web Developer & Content Creator, I Make Web More Fun Using Threejs & GSAP, React Native Developer. 
                </div>

                <div className="social_media flex justify-evenly w-full mt-10">
                    <a href="https://www.linkedin.com/in/priyansh-sharma-7b9520223/" target="_blank" className="c_social" rel="noopener noreferrer">
                        <AiFillLinkedin className="text-blue-600"/>
                    </a>
                    <a href="https://www.youtube.com/@mindbodyps" target="_blank" className="c_social" rel="noopener noreferrer">
                        <AiFillYoutube className="text-red-600"/>
                    </a>
                    <a href="https://github.com/Priyanshsharma21" target="_blank" className="c_social" rel="noopener noreferrer">
                        <AiFillGithub className="text-white"/>
                    </a>
                    <a href="https://www.instagram.com/mindbodyps/" target="_blank" className="c_social" rel="noopener noreferrer">
                        <AiFillInstagram className="text-pink-600"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Creator