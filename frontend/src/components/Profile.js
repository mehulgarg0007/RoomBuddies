import React, { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";


function Profile(){

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
        <h1>{userData.name}</h1>
        <h2>{userData.city}</h2>
        <h3>{userData.phone}</h3>
        </>
    )
}

export default Profile ;