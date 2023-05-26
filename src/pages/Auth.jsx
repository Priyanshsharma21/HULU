import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useFetchTrendingQuery,useFetchTopRatedQuery,useFetchDocumantariesQuery } from '../redux/services/tmdb';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from '../components';
import { AiOutlineDown } from 'react-icons/ai'

const auth_img_dph = "https://cnbl-cdn.bamgrid.com/assets/f1607ad0edca860aef966f4295fcb94be1af04de5aefcf855bc080b778448bef/original"


const Auth = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [background, setBackground] = useState({
      "adult": false,
      "backdrop_path": "/ovM06PdF3M8wvKb06i4sjW3xoww.jpg",
      "id": 76600,
      "title": "Avatar: The Way of Water",
      "original_language": "en",
      "original_title": "Avatar: The Way of Water",
      "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      "media_type": "movie",
      "genre_ids": [
          878,
          12,
          28
      ],
      "popularity": 10616.567,
      "release_date": "2022-12-14",
      "video": false,
      "vote_average": 7.75,
      "vote_count": 6431
  });
    const [activeTab, setActiveTab] = useState("treanding")
    
    const { data, isFetching, error } = useFetchTrendingQuery();
  
    const routeName = location.pathname;
    
    useEffect(() => {
      if(routeName === '/auth'){
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
    
        if(token && user){
          navigate('/');
        } else {
          return;
        }
      }
    }, [navigate, routeName]);
    
    if(isFetching) {
      return <div>Loading....</div>;
    }
  
    if(error) {
      return <div>Something went wrong</div>;
    }


    const sectionTwoCards = data?.results.slice(0,4)
    const [s4c1] = data?.results.slice(0,1)
    const [s4c2] = data?.results.slice(2,3)
    const [s4c3] = data?.results.slice(10,11)

    const handleBgChange = (bgCode)=>{
      setActiveTab(bgCode)
      if(bgCode==='treanding'){
        setBackground(s4c1)
      }else if(bgCode==='topg'){
        setBackground(s4c2)
      }else{
        setBackground(s4c3)
      }
    }


  
    return (
      <div className="auth w-full">
        <Navbar />
        <div className="authbanner flex justify-center items-center w-full h-screen text-white">
          <div className="auth_banner_content flex flex-col justify-around items-center">
              <div className="auth_banner_title text-[0.9rem] text-green-400">DISNEY BUNDLE DUO BASIC</div>
              <div className="img_auth_banner mt-4">
                <img src={auth_img_dph} className='w-full h-full object-cover' alt="auth_img_plan" />
              </div>
              <div className="auth_box_text text-white mt-4">
                Get Hulu & Disney+, both with ads, for $9.99/month.
              </div>
             <button className='button_auth'>
              <span className='get_btn_auth'>GET THEM BOTH</span>
             </button>
          </div>
        </div>

        <div className="distortion"></div>

        <section className="auth_section2 truth_height mt-[10%] w-full min-h-[100vh] flex flex-col items-center">
            <div className="auth_banner_title text-[0.9rem]  text-green-400">INCLUDED IN ALL PLANS</div>
            <div className="auth_s2title mt-4 font-semibold text-white text-[2rem] ">All The TV You Love</div>
            <div className="auths2desc mt-6 text-[1rem] text-white font-semibold">Watch full seasons of exclusively streaming series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.</div>


            <div className="section2Cards flex justify-evenly">
              {sectionTwoCards?.map((movie,i)=>(
                <div key={movie.id} className="movie_st_card flex cursor-pointer flex-col justify-between" 
                 style={{
                    backgroundSize : "cover",
                    backgroundPosition:"center center",
                    backgroundImage: `url(
                        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                    )`,
                }}
                >
                  <div className="topboxs2 mt-3 ml-3">
                    <div className="as2title text-white text-[0.9rem]">
                      {movie?.original_title}
                    </div>
                    <div className="as2sub_title text-[1.2rem] text-white font-semibold">
                      {movie?.media_type}
                    </div>
                  </div>
                  <div className="btmboxs2">
                    <div className="rating text-[0.9rem] text-slate-300 mb-4 ml-3">{movie?.vote_average}</div>
                  </div>
                </div>
              ))}
            </div>
        </section>  


        <section className="sec3 truth_height w-full min-h-[100vh] flex flex-col items-center justify-center">
          <div className="auth_banner_title text-[0.9rem]  text-green-400">REVU + LIVE TV, NOW WITH DISNEY+ AND ESPN+, ALL WITH ADS</div>
          <div className="auth_s2title mt-4 font-semibold text-white text-[2rem] ">Live TV Makes It Better</div>
          <div className="auths2desc mt-6 text-[1rem] text-white font-semibold">Make the switch from cable. Get 85+ top channels on Revu (With Ads) + Live TV with your favorite live sports, news, and events - plus the entire Revu streaming library. With Unlimited DVR, store Live TV recordings for up to nine months and fast-forward through your DVR content. Access endless entertainment with Disney+ and live sports with ESPN+. </div>

          <div className="text-slate-400 text-[0.6rem] mt-6 s3conti">
          Regional restrictions, blackouts and Live TV terms apply. Access content from each service separately. Location data required to watch certain content. Unlimited DVR recording is not available for on-demand shows.
          </div>

          <div className="icon_downs3 mt-20">
            <AiOutlineDown className='text-slate-200'/>
          </div>
        </section>


        <section className="auth_showcase w-full truth_height min-h-[100vh]"
        style={{
                    backgroundSize : "cover",
                    backgroundPosition:"center center",
                    backgroundImage: `url(
                        "https://image.tmdb.org/t/p/original/${background.backdrop_path}"
                    )`,
              }}
        >
        {/* <div className="layer"></div> */}
        <div className="overlay"></div>

                <div className="titless4 flex flex-col justify-evenly">
                  <div className="choose_bg flex ml-[15%]">
                    <div onClick={()=>handleBgChange('treanding')} className={`${activeTab === "treanding" ? "trending underline cursor-pointer s4t text-white" : "trending cursor-pointer s4t text-slate-400"} `}>
                      Trending
                    </div>
                    <div onClick={()=>handleBgChange('topg')} className={`${activeTab === "topg" ? "trending cursor-pointer s4t text-white" : "trending cursor-pointer s4t text-slate-400"} `}>
                      Top Rated
                    </div>
                    <div onClick={()=>handleBgChange('docu')} className={`${activeTab === "docu" ? "trending cursor-pointer s4t text-white" : "trending cursor-pointer s4t text-slate-400"} `}>
                      Documentary
                    </div>
                  </div>


                  <div className="bannerauthdetails ml-[17%]">
                    <div className="authsectionTitle">
                      {background?.title}
                    </div>
                    <div className="authsectionDesc">
                      {background?.overview.slice(0,200)}...
                    </div>
                  </div>

                </div>
        </section> 

      </div>
    );
  };
  
  export default Auth;



  