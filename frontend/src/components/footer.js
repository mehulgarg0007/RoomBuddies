import React from 'react' 
import './components2.css'
import {IoIosPin} from 'react-icons/io'
import {BsTelephone} from 'react-icons/bs'
import {CiMail} from 'react-icons/ci'
import {AiFillFacebook} from 'react-icons/ai'
import {ImLinkedin} from 'react-icons/im'
import {FaTwitterSquare} from 'react-icons/fa'
import {GrYoutube} from 'react-icons/gr'
import {FaInstagramSquare} from 'react-icons/fa'
function Footer(){
    return(
        <>
           <div className='Foot'>
               <div className='Bottom'>
               <div className='Bottom-1'> 
                    <h2><span>R</span>OOM <span> B</span>UDDIES</h2><br/>
                    <p style={{letterSpacing:'0.05rem'}}>Book My PG is India's Largest growing "PG Rental Network" attempting to provide better 
                        Paying Guest Accommodation Via our technology platform. We help find the best PG rental across 
                        major Indian Cities.</p>
               </div>
                    
               <div className='Bottom-2'>
                    <h2>CONTACT INFO</h2>
                    <br/>
                    <IoIosPin />Tandon Hostel , Motilal Nehru National Institute Of Technology Prayagraj , Allahabad<br/><br/>
                    <BsTelephone/> +91-6283273305<br/><br/>
                    <CiMail/> guptanavam5@gmail.com<br/><br/>
               </div>

               <div className='Bottom-3'>
                    <h2>LINKS</h2>
                    <ul className='footer-list'  style={{ listStyleType: 'disc' , color:'white'}}>
                        <li><a href='/'>Home</a></li>
                        <li><a href='./signup'>Login as User</a></li>
                        <li><a href='./partner'>List Your Property</a></li>
                        <li><a href='./ContactUs'>Contact Us</a></li>
                        <li><a href='./AboutUs'>About Developers</a></li>
                        <li><a>Policy</a></li>
                    </ul>
               </div>

               <div className='Bottom-4'>
                   <h2>FOLLOW US</h2>
                   <a href="#"><AiFillFacebook size={40} color='rgba(31,190,255,0.73)'/></a>
                   <a href="#"><FaTwitterSquare size={40} color='rgba(31,190,255,0.73)'/></a>
                   <a href="#"><FaInstagramSquare size={40} color='rgba(31,190,255,0.73)'/></a>
                   <a href="#"><ImLinkedin size={40} color='rgba(31,190,255,0.73)'/></a>
                   <a href="#"><GrYoutube size={40} color='rgba(31,190,255,0.73)'/></a>
               </div>
               </div>
           </div>
       </>
    );
}

export default Footer ;