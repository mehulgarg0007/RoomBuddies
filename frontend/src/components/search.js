import React from 'react';
import './components1.css'
import bg from '../components/assets/images/bg.png'
import prayagraj from '../components/assets/images/prayagraj.jpg'
import lucknow from '../components/assets/images/lucknow.jpeg'
import ayodhaya from '../components/assets/images/ayodhaya.jpg'
import kanpur from '../components/assets/images/kanpur.jpg'
import kashi from '../components/assets/images/kashi.jpg'


function Search(){
    return(
    <>
    <div className='Search-header'>
            <h1>Book MY PG</h1><br/>
            <p>India's Largest PG Network to Book your PG Online</p>    
    </div>
    <div className="search-local">
        <div className='center-card'>
            <div>
            <form className='form'>
                <input type={Text} placeholder="Enter City name , area etc...." />
                <button type='Submit'>Search</button>
            </form>
            </div>
            <div>
            <div className='center-card-1'>
                <div className='center-card-images1'>
                <a href='#'>
                <img src={prayagraj} alt='prayagraj' className='center-card-1-images1'/>
                <p>PRAYAGRAJ</p>
                </a>
                </div>
                <div className='center-card-images2'>
                    <a href='#'>
                    <img src={kashi} alt='Varanasi' className='center-card-1-images2'/>
                    <p>VARANASI</p>
                    </a>
                </div>
                <div className='center-card-images3'>
                <a href='#'>
                <img src={ayodhaya} alt='ayodhaya' className='center-card-1-images3'/>
                <p>AYODHAYA</p>
                </a>
                </div>
                
            </div>
            <div className='center-card-2'>
                <div className='center-card-images4'>
                <a href='#'><img src={lucknow} alt='lucknow' className='center-card-2-images1'/>
                <p>LUCKNOW</p></a>
                </div>
                <div className='center-card-images5'>
                <a href='#'>
                <img src={kanpur} alt='kanpur' className='center-card-2-images2'/>
                <p>KANPUR</p>
                </a>
                </div>
                
            </div>
            </div>
       </div>
    </div>
    <img src={bg} alt="bg" className='Search-image'/>
    </>
    );
}

export default Search ;
