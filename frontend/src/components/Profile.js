import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './navbar'
import Footer from './footer'
import './components2.css'

function Profile(){

    const [image, setimage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");

    const handlefileupload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertbase64(file);
        console.log(base64);
        setimage(base64);  
    };

    // method to convert imagefile into base64 binary data
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

    const Navigate = useNavigate() ;

    const [userData , setUserData] = useState(null) ;

    const callProfilePage = async () => {
        try{
            const res = await fetch('/profile',{
                method:"GET",
                headers : {
                    Accept : "Application/json" ,
                    "Content-Type" : "Application/json"
                },
                credentials : "include"
            }) ;

            const data = await res.json() ;

            setUserData(data) ;
            setName(data.name);
            setEmail(data.email);
            setPhone(data.phone);
            setCity(data.city);

            if(!res.status === 200){
                const error = new Error(res.error) ;
                throw error ;
            }

        } catch(err) {
            console.log('error') ;
            Navigate('/login')
        }
    } ;

    const handleFormSubmit = async (e) => {
        
        e.preventDefault();
        const formData = { name, email, phone, city };
        try {
            const res = await fetch('/profile', {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            console.log(data);
            //console.log(res.text) ;
            setUserData(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callProfilePage() ;
    },[]) ;
    
    return(
        <>
            {userData ? (
                <Navbar userData={userData} />
            ) : (
                <p>Loading user data...</p>
            )}
            <section>
                <div className="Profile">
                    <div className="Profile-1">
                        <div className="User-Image">
                            <input style={{border : 'none'}} type="file" accept="image/*" name="filename" onChange={(e)=>{handlefileupload(e)}}/>
                            {image == "" || image == null ? "" :<img src={image} width={400} height={400}></img>}
                        </div>
                        <form onSubmit={handleFormSubmit}>
                            <div className="User-Information">
                                <h2>User Information</h2>
                                <div className="Profile-Info">
                                    <h4>Name :</h4>
                                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className="Profile-Info">
                                <h4>Email :</h4>
                                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="Profile-Info">
                                <h4>Phone :</h4>
                                <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                </div>
                                <div className="Profile-Info">
                                <h4>City :</h4>
                                <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} required />
                                </div>
                                <button className="Update-Button" type="submit">Update</button>
                            </div>
                        </form>
                   </div>
                </div>
            </section>
            <Footer />
            </>
        );
    }
export default Profile;
