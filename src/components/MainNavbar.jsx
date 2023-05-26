import React, { useEffect, useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'
import { Link, useNavigate } from 'react-router-dom'
import { navLinks} from '../const/index'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Button, Modal } from 'antd';
import { AiOutlineLogout } from 'react-icons/ai'




const MainNavbar = () => {
    const [showSearchBar, setShowSearchBar] = useState(false)
    const [ user, setUser ] = useState(null)
    const [mobile, setMobile] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('')
    const [active, setActive] = useState('home')
    const navigate = useNavigate()

    const handleScroll = () => {
        const navbar = document?.querySelector('nav');
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

      useEffect(()=>{
        window.addEventListener('resize', (e)=>{
          e.target.innerWidth < 991 ? setMobile(true) : setMobile(false);
        });
      })

      useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        setUser(user)
      },[])



      const handleSearchSubmit = async(e)=>{
        e.preventDefault()
        navigate(`/search/${search}`)
        setSearch('')
        setShowSearchBar(false) 
      }

      const handleLinkNavigation = (id,to)=>{
        setActive(id)
        navigate(to)
      }

      const handleLogout = async()=>{
        try {
          localStorage.removeItem('token'); // remove token from local storage
          localStorage.removeItem('user'); // remove user data from local storage
          navigate('/auth')
        } catch (error) {
          console.log(error)
        }
      }


  return (
    <>
      {!mobile ? (
      <nav className="main_nav w-full h-[70px] flex justify-between items-center  fixed z-40 top-0">
        <div className="main_nav_list ml-5 flex justify-center items-center">
        {showSearchBar ? (
            <form className="searchnav mmc relative mr-5" onSubmit={handleSearchSubmit}>
            <CiSearch onClick={()=>setShowSearchBar(false)} className='text-slate-300 cursor-pointer absolute top-[14.3px] left-[8.3px] text-[1rem]' />
            <input className='search_inpt mmc' placeholder='Search Movies & Shows' type="text" onChange={(e)=>setSearch(e.target.value)} />
          </form>
          ):(
            <div className="search_icon mr-10 font-bold">
            <CiSearch onClick={()=>setShowSearchBar(true)} className='text-slate-300 cursor-pointer text-[1.4rem]' />
          </div>
          )}


          <div className="home_nav_links flex">
            {navLinks?.map((link,i)=>(
              <div onClick={()=>handleLinkNavigation(link.id, link.to)} className={`${link.id===active ? 'links_of_nav bg-[#90909088] make_me_glass text-white rounded-md pt-[0.1rem] pl-[1rem] pr-[1rem] pb-[0.1rem]' : 'links_of_nav text-[#dbdbdb] '}`}>
                {link.title}
              </div>
            ))}
          </div>
        </div>



        <div className="user_info flex mr-5">
            <div className="userIcon mr-5 cursor-pointer" onClick={()=>setOpen(prev=>!prev)}>
                <AiOutlineUser />
            </div>
            <Modal
              title="Logout"
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              width={300}
              className='login_model flex justify-center items-center'
            >
            <div className="lg">
              <div className="loggedin_details flex justify-between">
                <div className="pic flex justify-center items-center">
                {user?.picture ? (<>
                  <div className="userIcon mr-5 cursor-pointer flex justify-center items-center" onClick={()=>setOpen(prev=>!prev)}>
                  <AiOutlineUser />
                  </div>
                    </>):(
                      <img src={user?.picture} alt={user?.name} />
                    )}
                </div>
                  <div className="detail_box">
                    <div className="name_of_loggedinuser text-white">{user?.name}</div>
                    <div className="email_of_loggedinuser text-slate-100">{user?.email}</div>
                  </div>
              </div>

              <div className="logout cursor-pointer mt-5" onClick={handleLogout}>
                <div className="log_out_logo mr-1">
                  <AiOutlineLogout />
                </div>
                Logout
              </div>
            </div>
              
          </Modal>
            <div className="logo flex items-center justify-center mr-5">
                <Link to="/" className='logo2'>
                   revu
                </Link>
            </div>
        </div>
    </nav>
    ):(
      <nav className=" w-full h-[70px] flex justify-between items-center  fixed z-40 top-0">

      <div className="openToggle">
        <div className="hamBurgir" onClick={()=>setToggle(prev=>!prev)}>
          <RxHamburgerMenu className="text-white ml-3"/>
        </div>
        
        <div className={`absolute top-[4.3rem] h-screen w-[100%] bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 smooth-transition ${toggle ? 'left-0' : '-left-full'}`}>
        {toggle && (
          <div className="">
          <div className="mobile_wrapper mt-7">

            {navLinks?.map((link,i)=>(
                    <div onClick={()=>handleLinkNavigation(link.id, link.to)} className={`${link.id===active ? 'links_of_nav mmtp bg-[#13638247] text-white rounded-md pt-[0.1rem] pl-[0.8rem] pr-[1rem] pb-[0.1rem]' : 'links_of_nav mmtp text-[#dbdbdb] '}`}>
                      {link.title}
                    </div>
            ))}

            <form className="searchnav mt-5 mmc w-full relative " onSubmit={handleSearchSubmit}>
                <input className='mobile_input w-full' placeholder='Search Movie' type="text" onChange={(e)=>setSearch(e.target.value)} />
            </form>
             
          </div>
          </div>
        )}
        </div>
       
      </div>

      <div className="logo flex items-center justify-center h-full">
                <Link to="/">
                    <svg viewBox="0 -2 61 24" height="24" width="61" role="img" aria-labelledby="logoTitle" fill="#ffffff"><title id="logoTitle">REVU</title><path d="M9.57046613 6.24096927h-3.1015504c-1.0875017 0-1.63435327.29263768-1.63435327.29263768V0H0v20h4.83456246v-8.0704467c0-.7137436.58067743-1.29171 1.2958127-1.29171h2.81374862c.7162628 0 1.29524892.5779664 1.29524892 1.29171V20h4.8359719v-8.6950777c0-3.65670596-2.4444829-5.06395303-5.50487847-5.06395303zm46.48012787 0v8.06932223c0 .714868-.579268 1.2931156-1.294967 1.2931156h-2.8134668c-.7162628 0-1.2952489-.5782476-1.2952489-1.2931156V6.24096927h-4.8368175V14.712844c0 3.4627386 2.2220777 5.287156 5.5062878 5.287156h4.7347762v-.0247379c3.0245965 0 4.8354081-2.1465718 4.8354081-5.2624181V6.24096927H56.050594zM28.7728487 14.3102915c0 .714868-.5798318 1.2931156-1.2955308 1.2931156h-2.8137486c-.7162628 0-1.2955308-.5782476-1.2955308-1.2931156V6.24096927h-4.8359719V14.712844c0 3.4627386 2.2220778 5.287156 5.506006 5.287156h4.7347761v-.0247379c3.0248785 0 4.8359719-2.1465718 4.8359719-5.2624181V6.24096927h-4.8359719v8.06932223zM37.294431 20h4.8365357V0H37.294431v20z" fillRule="evenodd"></path></svg>
                </Link>
        </div>

        <div className="user_info flex items-center mr-5">
            <div className="userIcon mr-5" onClick={()=>setOpen(prev=>!prev)}>
                <AiOutlineUser />
            </div>

            <Modal
              title="Logout"
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              width={300}
              className='login_model flex justify-center items-center'
            >
              <div className="logout cursor-pointer" onClick={handleLogout}>
                <div className="log_out_logo mr-1">
                  <AiOutlineLogout />
                </div>
                Logout
              </div>
          </Modal>
           
      </div>
      </nav>
    )}
    </>
  )
}

export default MainNavbar