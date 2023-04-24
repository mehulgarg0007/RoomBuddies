const express=require('express');
const router= express.Router();


require('../db/conn');
const User= require("../model/userSchema")
router.get("/",(req,res)=>{
    res.send('hello world from server from router');
  })
  
router.post("/pgs",async (req,res)=>{
  const{name,gender,contactPerson_name,email,mobile,property_address,image,password}=req.body;
  if(!name || !gender || !contactPerson_name || !email || !property_address|| !mobile || !image||!password)
  {
    
    return res.status(422).json({error:"please enter properly"})
    
  }
  
  try{
    const userExist=await User.findOne({name:name})

  if(userExist)
  {
    return res.status(422).json({error:"name already exist"})
  }
  const user=new User({name,gender,contactPerson_name,email,mobile,property_address,image,password})
  await user.save();
  res.status(201).json({message:"registered"})
    
  }
  catch(err)
  {res.status(201).json({message:"registered"})
  console.log(err);
  }
  
})
router.get("/priyanshu",async(req,res)=>{
  let result=await User.find({});
  if(result)
  {
    res.send(result);
  }
  else
  res.send("no result found");

})
  module.exports=router;