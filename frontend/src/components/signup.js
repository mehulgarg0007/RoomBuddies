import react , {useState} from 'react'
import './components1.css'
import './components2.css'
import { NavLink , useNavigate} from 'react-router-dom';
import Login from './Login';
import {IoIosPerson} from 'react-icons/io'
import {MdLocationCity} from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {RiLockPasswordFill} from 'react-icons/ri'
import Navbar from './navbar'
import Footer from './footer'

function Signup(){

    const navigate = useNavigate() ;
    const [image,setImage] = react.useState("") ;
    const [user,setUser] = useState({
            name:"",
            city:"",
            email:"",
            phone:"",
            gender:"",
            image:"",
            password:"",
            cpassword:"",
    });

     // method to handle image file uploaded .....................
  const handlefileupload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertbase64(file);
    console.log(base64);
    setImage(base64);
    // console.log(postImage.myfile);  
  };

  // method to convert imagefile into base64 binary data.......................
function convertbase64(file) {
    return new Promise((resolve, reject) => {
      const filereader = new FileReader();
      filereader.readAsDataURL(file);
      filereader.onload = () => {
        resolve(filereader.result);
      };
      filereader.onerror = (error) => {
        reject(error);
      }
    });
};
    let name , value ;

    const handleInputs = (e) => {
        console.log(e) ;

        name = e.target.name ;
        value = e.target.value ;

        setUser({...user , [name]:value});
    };

    const postData = async (e) => {
        e.preventDefault() ;

        const {name, city, email, phone, gender, image, password, cpassword} = user ;

        const res = await fetch("/register",{
            method : "POST" ,
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                name, city, email, phone, gender, image, password, cpassword 
            })
        }) ;

        const data = await res.json() ;

        if(data.status === 422 || !data){
            window.alert("Invalid Registration") ;
            console.log("Invalid Registration") ;
        }
        else{
            window.alert("Registration Successful") ;
            console.log("Registration Successful") ;

           navigate('/login') ;
        }
    }
    return (
        <>
        <Navbar/>
        <div className='center-card' style={{margin:'10%',width:'60%',margin:'auto',marginTop:'10%',marginBottom:'10%'}}>
                <div className='Contact-2'>
                    <h2 style={{color : 'rgba(31,72,125,1)'}}>
                       Register As New User
                    </h2>

                {/*Signup Form Start*/}

                <form method='POST' id='register-form'>
                <label>Name<span style={{color:'red'}}>*</span></label>
                <br/>
                <IoIosPerson/>
                <input type={Text}  autoComplete='off' name='name' id='name'  value={user.name} onChange={handleInputs}></input>
                <br/>
                <label>City<span style={{color:'red'}}>*</span></label>
                <br/>
                <MdLocationCity/>
                <input type={Text}  autoComplete='off' name='city' id='city' value={user.city} onChange={handleInputs}></input>
                <br/>
                <label>Email<span style={{color:'red'}}>*</span></label>
                <br/>
                <MdEmail/>
                <input type='email'  autoComplete='off' name='email' id='email' value={user.email} onChange={handleInputs}></input>
                <br/>
                <label>Phone<span style={{color:'red'}}>*</span></label>
                <br/>
                <BsFillTelephoneFill/>
                <input type='tel'  autoComplete='off' name='phone' id='phone' value={user.phone} onChange={handleInputs}></input>
                <br/>
                <label>Gender<span style={{color:'red'}}>*</span></label>
                <br/>
                <BsFillTelephoneFill/>
                <input type='tel'  autoComplete='off' name='phone' id='phone' value={user.phone} onChange={handleInputs}></input>
                <br/>
                <label>Password<span style={{color:'red'}}>*</span></label>
                <br/>
                <label>Upload Image<span style={{color:'red'}}>*</span></label>
        <br/>
        <input style={{border : 'none'}}type="file"   accept="image/*" name="filename" onChange={(e)=>{handlefileupload(e)}}/>
        <br/>
        <br/>
        {image==""||image==null?"":        <img src={image} width={100} height={100}></img>}
        <br/>
                <RiLockPasswordFill/>
                <input type='password'  autoComplete='off' name='password' id='password' value={user.password} onChange={handleInputs}></input>
                <br/>
                <label>Confirm Password<span style={{color:'red'}}>*</span></label>
                <br/>
                <RiLockPasswordFill/>
                <input type='password'  autoComplete='off' name='cpassword' id='cpassword' value={user.cpassword} onChange={handleInputs} ></input>
                <br/>
                <br/>
                <button type='Submit' name='signup' id='signup' className='Button-2' value='register' onClick={postData}>Register</button>
                </form>
                <a href='./Login' style={{textDecoration:'none',color:'rgba(31,72,125,1)'}}>Already Registered ?</a>
                </div>
            </div>
        <Footer/>
        </>
    );
}

export default Signup ;