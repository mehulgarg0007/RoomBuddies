import {React , useEffect}from 'react'
import './components2.css'

import Navbar from './navbar'
import Search from './search'
import Main from './Main'
import Footer from './footer'
const Home = () => {

  return (
    <div>
      <Navbar />
      <Search />
      <Main />
      <Footer />
    </div>
  );
};
  
export default Home;