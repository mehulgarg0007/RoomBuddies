import React , {useRef} from 'react'
import Navbar from './navbar'
import Footer from './footer'
import './components1.css'
import './components2.css'
import emailjs from '@emailjs/browser'


function thanks(){
  window.alert("Thanks for connecting")
}
function Contact(){

const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xfubu3g', 'template_4btsb2r', form.current, 'qO-TcwDTAPLl4YQVP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
        <>
        <Navbar />
        <div className='Contact'>
            <div className='Contact-1'>
                <h2>LET'S CONNECT</h2><hr />
                <p>Please Feel Free to Contact us for any PG Booking related Issues, Complaints and for any <br />
                support needed for moving to the PG you have Booked through us.</p>
            </div>
            <div className='Contact-2'>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <br/>
              <input type="text" name="user_name" autoComplete='off' autoCorrect='' required='true'/>
              <br />
              <br/>
              <label>Email</label>
              <br/>
              <input type="email" name="user_email" autoComplete='off' autoCorrect='' required='true'/>
              <br/>
              <br/>
              <label>City</label>
              <br/>
              <input type='text' name='user_city' autoComplete='off' autoCorrect='' required='true'/>
              <br/>
              <br/>
              <label>Message</label>
              <br/>
              <textarea name="message" rows={5} cols={50} required='true'/>
              <br/>
              <br/>
              <button type="submit" value="Send" className='Button-2' onClick={thanks}>Send</button>
            </form>
            </div>
        </div>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7202.773150498937!2d81.86168972451807!3d25.492150935039174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aca789e0c84a5%3A0x2c27733a7529bf08!2sMNNIT%20Allahabad%20Campus%2C%20Teliarganj%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1678961962950!5m2!1sen!2sin" 
        width="100%" 
        height="450" 
        style= {{border:0}}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <Footer />
        </>
    );
}

export default Contact