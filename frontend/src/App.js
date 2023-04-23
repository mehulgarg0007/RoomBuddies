import React from 'react'
import{
  BrowserRouter as Router , 
  Routes ,
  Route ,
} from "react-router-dom" ;

import Home from "./components/Home"
import Contact from './components/ContactUs'
import Signup from './components/signup';
import Login from './components/Login'
import Profile from './components/Profile' ;



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
          </Routes>
        </Router>
       </>
    );
}

export default App ;