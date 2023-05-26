
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import {ArtistDetails, Auth, Creator, Home,MovieDetails,Movies,MyStuff,SearchResults, Shows} from './pages'
import { GoogleOAuthProvider } from '@react-oauth/google';
import {MainNavbar, Navbar} from './components/index';
import { useLocation,useNavigate } from 'react-router-dom';


const App = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const routeName = location.pathname; 

  useEffect(()=>{
    if(routeName==='/'){
      const token = localStorage.getItem('token'); // get token from local storage
      const user = JSON.parse(localStorage.getItem('user')); // get user data from local storage

      if(token && user){
        // getEvents()
      }
      else{
        navigate('/auth');
      }
    }
  },[])


  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <h1 className="text-3xl font-bold underline">
    {routeName==='/auth' ? (
      <></>
    ):(
      <MainNavbar />
    )}
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/shows" element={<Shows />} />
            <Route exact path="/mystuff" element={<MyStuff />} />
            <Route exact path="/movies" element={<Movies />} />
            <Route exact path="/creator" element={<Creator />} />
            <Route exact path="/auth" element={<Auth />} />
            <Route exact path="/search/:sqry" element={<SearchResults />} />
            <Route exact path="/:type/:id" element={<MovieDetails />} />
            <Route exact path="/artist/:id" element={<ArtistDetails />} />
        </Routes>
    </h1>
    </GoogleOAuthProvider>
  )
}

export default App

