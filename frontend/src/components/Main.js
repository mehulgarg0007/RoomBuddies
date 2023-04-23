import {React , useEffect}from 'react'
import './components2.css'
import  payment from './assets/images/payment.png'
import  search from './assets/images/search.png'
import  confirm from './assets/images/confirm.jpg'
import {FaSearchLocation} from 'react-icons/fa'
import {GoChecklist} from 'react-icons/go'
import {MdMarkEmailRead} from 'react-icons/md'
import {AiFillPushpin} from 'react-icons/ai'
import {FaCalendarCheck} from 'react-icons/fa'
import {GiPriceTag} from 'react-icons/gi'
/*Main body of Home*/
function Main(){
    useEffect(() => {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                document.querySelector('Main-2').classList.add('visible');
            }
        });
        return () => {
          window.removeEventListener('scroll', function() {
          
          });
        };
      }, []);
    return(
       <>
       <div>
        <br/>
        <br/>



        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

       </div>
        <div className='Main-1'>
            <h2>How It's Work</h2>
            <p>Our process is simple and very different from those of others in this industry. The search process is streamlined by<br/>
            the locality or landmark of your choice. This allows you to find the right hostel or room. You can choose the<br/> 
            subscription plan that best suits your needs.</p>
            <div className='steps'>
                <div className='step-1'>
                    <div className='Main-1-image'>
                        <FaSearchLocation size={100} color='skyblue'/>
                    </div>
                    <div className='Main-1-head'>
                        <h3>Search</h3>
                        <p>Fill the search fields like your locality,or<br/>
                        city,boys pg or girls pg</p>
                    </div>
                </div>

                <div className='step-2'>
                    <div className='Main-1-image'>
                        <GoChecklist size={100} color='skyblue'/>
                    </div>
                    <div className='Main-1-head'>
                    <h3>Make Payment</h3>
                    <p>Select your PG Rental Home,Sharing Type <br/>
                     and make payment Online.</p>
                    </div>
                </div>

                <div className='step-3'>
                    <div className='Main-1-image'>
                        <MdMarkEmailRead size={100} color='skyblue'/>
                    </div>
                    <div className='Main-1-head'>
                    <h3>Booking Confirmation</h3>
                    <p>Your subscription and booking date<br/>
                    confirmed.</p>
                    </div>
                </div>
            </div>
       </div>


       <div className='Main-2'>
       <h2>What We Offer</h2>
       <hr/>
            <p>The listed services are offered to all our customers. We assure you the best deals in all our properties and the<br/>
             chance to live a more luxurious life with lesser cost.</p>
            <div className='steps'>
                <div className='step-1'>
                    <div className='Main-2-image'>
                        <AiFillPushpin size={100} color='skyblue'/>
                    </div>
                    <div className='Main-2-head'>
                    <h3>Find PG'S Near You</h3>
                    <p>Find Paying guests near you by selecting<br/>
                      your location. We cover more than 50+<br/>
                      localities in every city.</p>
                    </div>
                </div>

                <div className='step-2'>
                    <div className='Main-2-image'>
                        <FaCalendarCheck size={100} color='skyblue'/>
                    </div>
                    <div className='Main-2-head'>
                    <h3>Book Online</h3>
                    <p>Book your PG online through our web portal<br/>
                     or mobile application. Avail discounts that<br/>
                     are available for booking online.</p>
                    </div>
                </div>

                <div className='step-3'>
                    <div className='Main-2-image'> 
                        <GiPriceTag size={100} color='skyblue'/>
                    </div>
                    <div className='Main-2-head'>
                    <h3>Best Deals On PG</h3>
                   <p>We have tie ups with PGs in every city. We<br/>
                    make sure that our customers get the best<br/>
                     deals for PGs.</p>
                    </div>
                </div>
            </div>
       </div>


       <div className='Main-3'>
            <h2>Amenities List</h2>
            <p>We provide all the amenities, some amenities are surely available for all our service places. Some of the items only<br/>
             you may get by request, Because that type of amenities are not mandatory.</p>
             <div className='grid-container'>
             <div className='grid-item'>
                  <h5>Air Conditioner</h5>
                  <p>Surely Available</p>
             </div>
             <div className='grid-item'>
                  <h5>Balcony</h5>
                  <p>Surely Available</p>
             </div>
             <div className='grid-item'>
                 <h5>Extra Bed</h5>
                 <p>Surely Available</p>
             </div>
             <div className='grid-item'>
                 <h5>Flat TV</h5>
                 <p>Surely Available</p>
             </div>
             <div className='grid-item'>
                 <h5>Hot & Cold Water</h5>
                 <p>Surely Available</p>
             </div>
             <div className='grid-item'>
                 <h5>InterCom</h5>
                 <p>Surely Available</p>
             </div>
             <div className='grid-item'>
                 <h5>Locker</h5>
                 <p>Surely Available</p>
             </div>
             <div className='grid-item'>
                 <h5>Read Table</h5>
                 <p>Surely Available</p>
             </div>
             <div className='grid-item'>
                <h5>Wifi</h5>
                <p>Surely Available</p>
             </div>
             </div>
             
       </div>
       </>
    );
}

export default Main ;