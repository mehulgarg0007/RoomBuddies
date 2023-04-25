import React, { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './navbar'
import Footer from './footer'
import './components2.css'

function Profile(){

    const [image, setimage]=React.useState("");

    const handlefileupload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertbase64(file);
        console.log(base64);
        setimage(base64);  
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

    const Navigate = useNavigate() ;

    const [userData , setUserData] = useState(0) ;

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

            console.log(data) ;

            setUserData(data) ;

            if(!res.status === 200){
                const error = new Error(res.error) ;
                throw error ;
            }

        } catch(err) {
          console.log('error') ;
          Navigate('/login')
        }
    } ;

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
                <input style={{border : 'none'}}type="file"   accept="image/*" name="filename" onChange={(e)=>{handlefileupload(e)}}/>
                {image == "" || image == null ? "" :<img src={image} width={400} height={400}></img>}
                </div>
                <div className="User-Information">
                    <h2>User Information</h2>
                    <div className="Profile-Info"><h4>Name :</h4><p>{userData.name}</p></div>
                    <div className="Profile-Info"><h4>Email :</h4><p>{userData.email}</p></div>
                    <div className="Profile-Info"><h4>Contact No. :</h4><p>{userData.phone}</p></div>
                    <div className="Profile-Info"><h4>City :</h4><p>{userData.city}</p></div>
                </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Profile ;