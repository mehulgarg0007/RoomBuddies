import React from 'react'
import{
  BrowserRouter as Router , 
  Routes ,
  Route ,
} from "react-router-dom" ;
import  {useState,useEffect} from "react";
import Home from "./components/Home"
import Contact from './components/ContactUs'
import Signup from './components/signup';
import Login from './components/Login'
import Profile from './components/Profile' ;
import Partner from './components/Partner'
import Pgs from "./components/Pgs";
import AboutUs from './components/AboutUs'


function App(){


    return(
       <>
      
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/ContactUs' element={<Contact />}/>
            <Route path='/Signup' element={<Signup />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/partner' element={<Partner/>}/>
            <Route path='cities' element={<Pgs/>}/>
            <Route path='/AboutUs' element={<AboutUs/>}/>
          </Routes>
        </Router>
       </>
    );
}

export default App ;