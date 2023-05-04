const express=require('express');
const router= express.Router();
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());


require('../db/conn');
const User= require("../model/userSchema")
const aut=require("../middleware/authenticate");
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
  catch(err) {
    res.status(500).json({error: "internal server error"});
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
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = user.generateAuthToken();
    res.cookie('token', token, { httpOnly: true });
    res.json({ message: 'Logged in successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
router.get('/profile2', aut,(req, res) => {
  res.json({ user: req.user });
});


  module.exports=router;