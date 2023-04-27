import react , {useState} from 'react'
import { NavLink , useNavigate} from 'react-router-dom';
import './components1.css'
import './components2.css'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import Navbar from './navbar'
import Footer from './footer'

function Login(){

    const navigate = useNavigate() ;

    const [user,setUser] = useState({
        email:"",
        password:"",
    });

let name , value ;

    const handleInputs = (e) => {
        console.log(e) ;

        name = e.target.name ;
        value = e.target.value ;

        setUser({...user , [name]:value});
    };
    const LoginUser = async (e) =>{
        e.preventDefault() ;

        const {email, password} = user ;

        console.log("Yes") ;

        const res = await fetch('/login',{
            method : "POST" ,
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                email ,  password
            })
        });

        const data = await res.json() ;

        if(res.status === 400 || !data){
            window.alert('Invalid Credentials') ;
        }
        else{
            window.alert('Login Successful') ;
            console.log('Production') ;
            navigate('/') ;
        }
    }

    return (
        <>
        <Navbar/>
        {/*<div className='search-local' style={{backgroundColor:'rgb(135, 206, 235)', height:'100vh'}}>*/}
            <div className='center-card' style={{margin:'10%',width:'60%',margin:'auto',marginTop:'10%',marginBottom:'10%'}}>
                <div className='Contact-2'>
                <h2 style={{color : 'rgba(31,72,125,1)'}}>
                    Login If Already Registered
                </h2>
                <form method='POST' id='login-form'>
                <label>Email<span style={{color:'red'}}>*</span></label>
                <br/>
                <MdEmail/>
                <input type='email'  name='email' id='email' autoComplete='off' value={user.email} onChange={handleInputs}></input>
                <br/>
                <label>Password<span style={{color:'red'}}>*</span></label>
                <br/>
                <RiLockPasswordFill/>
                <input type='password'  name='password' id='password' autoComplete='off' value={user.password} onChange={handleInputs}></input>
                <br/>
                <br/>
                <button type='Submit' name='login' id='login' value='login' className='Button-2' onClick={LoginUser}>Login</button>
                </form>
                <a href='./Signup' style={{textDecoration:'none',color:'rgba(31,72,125,1)'}}>Not Registered ?</a>
                </div>
            {/*</div>*/}
        </div>
        <Footer/>
        </>
    );
}

export default Login ;