import React, { useState } from  'react'
import './components1.css' ;
import Navbar from './navbar' ;
import Footer from './footer'

function Partner(){

    const [image, setimage]=React.useState("");
    const [name, setname]=useState("");
    const [gender, setgender]=useState("");
    const [password, setpassword]=useState("");
    const [contactPerson_name, setcontactPerson_name]=useState("");
    const [email, setemail]=useState("");
    const [property_address, setproperty_address]=useState("");
    const [mobile, setmobile]=useState("");

    console.log(name,password,gender,contactPerson_name,email,property_address,image,mobile);
  // method to handle image file uploaded .....................
  const handlefileupload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertbase64(file);
    console.log(base64);
    setimage(base64);
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

const PostData=async()=>{
    let result = await fetch("http://localhost:1000/pgs",{
        method:"post",
        mode:'cors',
           headers:{
            "Content-Type":"application/json"
           },
           body:JSON.stringify({
            name,gender,contactPerson_name,email,mobile,property_address,image,password
           }) 
    });
    result=await result.json();
console.warn(result);
};
   
return(
    <>
      <Navbar/>
      <div className='Contact'>
            <div className='Contact-1'>
                <h2>Join Our Platform</h2><hr />
                <p>List Your Property Here To find Reliable Customers</p>
            </div>
            <div className='Contact-2'>
            <form>
            <label>Property Name<span style={{color:'red'}}>*</span></label>
            <br/>
            <input type='text' name="name" title="Please enter property name" required  value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <br/>
            <br/>
            <label>Gender<span style={{color:'red'}}>*</span></label>
            <br/>
            <select required className="" name="gender" title="Please select property gender"  value={gender} onChange={(e)=>{setgender(e.target.value)}}>
            <option value="">---Select---</option>
            <option value="Gents">Male</option>
            <option value="Ladies">Female</option>
            <option value="Unisex">Unisex</option>
            </select>
            <br/>
            <br/>
    {/* contact person name */}
            <label>Contact Person Name<span style={{color:'red'}}>*</span></label>
            <br/>
            <input required type='text' name="contactPerson_name" title="Please enter contact person name"   value={contactPerson_name} onChange={(e)=>{setcontactPerson_name(e.target.value)}}/>
            <br/>
            <br/>            
    {/* contact person email */}
            <label>Email<span style={{color:'red'}}>*</span></label>
            <br/>
            <input type="email" name="email"  title="Please enter email" required  value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            <br/>
            <br/>              
        {/* address */}
        <label>Mobile<span style={{color:'red'}}>*</span></label>
        <br/>
        <input type="text"  name="mobile" title="Please enter mobile" required  value={mobile} onChange={(e)=>{setmobile(e.target.value)}}/>
        <br/>
        <br/>

        <label>Property Address<span style={{color:'red'}}>*</span></label>
        <br/>
        <textarea type="text" name="property_address"  title="Please enter property address" required  value={property_address} onChange={(e)=>{setproperty_address(e.target.value)}} rows={8} cols={40}></textarea>
        <br/>
        <br/>

        <label>Upload Image<span style={{color:'red'}}>*</span></label>
        <br/>
        <input style={{border : 'none'}}type="file"   accept="image/*" name="filename" onChange={(e)=>{handlefileupload(e)}}/>
        <br/>
        <br/>
        {image==""||image==null?"":        <img src={image} width={100} height={100}></img>}

        <label>password<span style={{color:'red'}}>*</span></label>
        <br/>
        <input type='password' name='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
        <br/>
        <br/>
        <button className='Button-2' onClick={PostData}>submit</button> 
      </form>
    </div>
  </div>
  <Footer/>
  </>   
    );
 }

export default Partner;