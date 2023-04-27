import React from 'react'
import './components1.css'
import {BiLogIn} from 'react-icons/bi'

function Navbar(){
    return(
        <>
        <header className='header'>
            <BiLogIn size={30}/>
            <a href='./signup' style={{color:'white',textDecoration:'none'}}>Login - SignUp</a>
        </header>
        <nav className = "Navbar">
            <div className='Main'>
                <h2><span>R</span>OOM <span>B</span>UDDIES</h2>
            </div>
            <div className='ListDiv'>
                <ul className='Navbar-List'>
                    <li className='list'><a href="/">Home</a></li>
                    <li className='list'><a href="./cities">Cities</a></li>
                    <li className='list'><a href="./">About Us</a></li>
                    <li className='list'><a href="./partner">For PG Owners</a></li>
                    <li className='list'><a href="./ContactUs">Contact Us</a></li>
                </ul>
            </div>
        </nav>
        </>

    );
}

export default Navbar ;