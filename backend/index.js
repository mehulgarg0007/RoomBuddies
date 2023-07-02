const express = require('express') 
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const authenticate = require('./middleware/authenticate')
const cookieParser = require('cookie-parser')

const app = express() ; 

app.use(bodyparser.urlencoded({extended:false}))

app.use(bodyparser.json()) ;
app.use(cookieParser()) ;
dotenv.config({path : './config.env'}) ;

const DB = process.env.DATABASE ; 

const User = require('./model/userSchema')

mongoose.connect(DB,{
    useNewUrlParser : true ,
    useUnifiedTopology : true ,
}).then(()=>{
    console.log("Database1 connected");
}).catch((err) => {console.log(err)}) ;

app.use(express.json()) ;


const PORT = process.env.PORT ;


app.get('/',(req,res)=>{
    res.send("Server Side") ;
});

app.post('/register', async (req,res) =>{
    const {name , city , email , phone , gender, image, password , cpassword} = req.body ;

    if(!name || !email || !phone || !city || !password || !cpassword || !image || !gender){
        return res.status(422).json({error : "plz fill all fields"}) ;
    }
    if(password.length() < 8)
    {
        return res.status(422).json({error : "password must be 8 characters long"})
    }

    try{
     const userExist = await User.findOne({email : email}) ;
    
        if(userExist){
        return res.status(422).json({error : "Email already exists"}) ;
        }
        else if(password != cpassword){
            return res.status(422).json({error : "Passwords Do Not Match"}) ;
        }
        else{
            const user = new User({name , email , phone , city , gender, image,  password , cpassword}) ;

            await user.save() ;
        
            res.status(201).json({message : "Success"}) ;
        }

        const user = new User({name , email , phone , city , gender, image,  password , cpassword}) ;

        await user.save() ;
        
        res.status(201).json({message : "Success"}) ;
   }
   catch(err){
        console.log(err) ;
   }
})

//login

app.post('/login', async (req,res) => {
    
    const {email , password} = req.body ; 

    if(!email || !password){
        return res.status(400).json({error : "complete the form"}) ;
    }
    try{
        let token ;

        const userLogin = await User.findOne({email : email}) ;

        if(userLogin){
            const isMatch = await bcrypt.compare(password , userLogin.password) ;

            token = await userLogin.generateAuthToken() ;

            res.cookie("jwttoken",token,{
                expires : new Date(Date.now() + 25892000000) ,
                httpOnly : true
            })
            if(!isMatch){
                res.status(400).json({message : "Invalid Credentials"}) ;
            }
                res.json({message : "User Signed In Successfully"}) ;
        }
        else{
            res.status(400).json({message : "Invalid Credentials"}) ;
        }
    }
    catch(err){
        console.log(err) ;
    }
})

//profile page

app.get('/profile', authenticate ,(req,res) => {
    console.log("Kol") ;
    res.send(req.rootUser) ;
}) ;


app.put('/profile', authenticate, async (req, res) => {
    try {
        const userId = req.rootUser._id ;
        const updatedUser = await User.findByIdAndUpdate(
            userId,
           { $set: req.body },
           { new: true }
        );
        res.status(200).json(updatedUser);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
  });
  
app.listen(PORT,()=>{
    console.log('Port Running')
})