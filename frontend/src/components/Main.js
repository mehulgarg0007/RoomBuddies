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
import {TbAirConditioning} from 'react-icons/tb'
import {MdOutlineBalcony} from 'react-icons/md'
import {FaBed} from 'react-icons/fa'
import {SlScreenDesktop} from 'react-icons/sl'
import {GiWaterGallon} from 'react-icons/gi'
import {FaIntercom} from 'react-icons/fa'
import {GiLockers} from 'react-icons/gi'
import  {AiFillRead} from 'react-icons/ai'
import {AiOutlineWifi} from 'react-icons/ai'
/*Main body of Home*/
function Main() {
    useEffect(() => {
        const handleScroll = () => {
          const windowHeight = window.innerHeight;
          const pageHeight = document.body.scrollHeight;
          const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      
          const main1Position = 0.3 * pageHeight;
          const main2Position = 0.5 * pageHeight;
          const main3Position = 0.6 * pageHeight;
      
          if (scrollPosition > main1Position) {
            document.querySelector('.Main-1').classList.add('visible');
          } else {
            document.querySelector('.Main-1').classList.remove('visible');
          }
      
          if (scrollPosition > main2Position) {
            document.querySelector('.Main-2').classList.add('visible');
          } else {
            document.querySelector('.Main-2').classList.remove('visible');
          }
      
          if (scrollPosition > main3Position) {
            document.querySelector('.Main-3').classList.add('visible');
          } else {
            document.querySelector('.Main-3').classList.remove('visible');
          }
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
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
                  <TbAirConditioning/>
                  <h5>Air Conditioner</h5>
                  <p>Surely Available</p>
             </div>
             <div className='grid-item'>
                  <MdOutlineBalcony/>
                  <h5>Balcony</h5>
                  <p>Surely Available</p>
             </div>
             <div className='grid-item'>
                 <FaBed/>
                 <h5>Extra Bed</h5>
                 <p>Surely Available</p>
             </div>
             <div className='grid-item'>
              <SlScreenDesktop/>
                 <h5>Flat TV</h5>
                 <p>Surely Available</p>
             </div>
             <div className='grid-item'>
                 <GiWaterGallon/>
                 <h5>Hot & Cold Water</h5>
                 <p>Surely Available</p>
             </div>
             <div className='grid-item'>
                 <FaIntercom/>
                 <h5>InterCom</h5>
                 <p>Surely Available</p>
             </div>
             <div className='grid-item'>
              <GiLockers/>
                 <h5>Locker</h5>
                 <p>Surely Available</p>
             </div>
             <div className='grid-item'>
                 <AiFillRead/>
                 <h5>Read Table</h5>
                 <p>Surely Available</p>
             </div>
             <div className='grid-item'>
                <AiOutlineWifi/>
                <h5>Wifi</h5>
                <p>Surely Available</p>
             </div>
             </div>
             
       </div>
       </>
    );
}

export default Main ;