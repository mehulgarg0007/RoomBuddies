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

//require('./db/conn')



const DB = process.env.DATABASE ; 

const User = require('./model/userSchema')

mongoose.connect(DB,{
    useNewUrlParser : true ,
    //useCreateIndex : true ,
    useUnifiedTopology : true ,
    //useFindAndModify : false
}).then(()=>{
    console.log("Poonam");
}).catch((err) => {console.log(err)}) ;

app.use(express.json()) ;

//app.use(require('./router/auth'))

const PORT = process.env.PORT ;


app.get('/',(req,res)=>{
    res.send("I love Poonam") ;
});

app.post('/register', async (req,res) =>{
    const {name , city , email , phone  , password , cpassword} = req.body ;

    if(!name || !email || !phone || !city || !password || !cpassword){
        return res.status(422).json({error : "plz fill all fields"}) ;
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
            const user = new User({name , email , phone , city , password , cpassword}) ;

            await user.save() ;
        
            res.status(201).json({message : "Poonam"}) ;
        }

        const user = new User({name , email , phone , city , password , cpassword}) ;

        await user.save() ;
        
        res.status(201).json({message : "Poonam"}) ;
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
        //const {email , password} = req.body ; 
        //console.log(email) ;
        /*if(!email || !password){
            return res.status(400).json({error : "complete the form"}) ;
        }*/

        const userLogin = await User.findOne({email : email}) ;
        //console.log(userLogin) ;

        if(userLogin){
            const isMatch = await bcrypt.compare(password , userLogin.password) ;

            token = await userLogin.generateAuthToken() ;
            //console.log(token) ;

            res.cookie("jwttoken",token,{
                expires : new Date(Date.now() + 25892000000) ,
                httpOnly : true
            })
            //console.log(isMatch) ;
            if(!isMatch){
                res.status(400).json({message : "Invalid Credentials"}) ;
            }
            
                res.json({message : "User Signed In Successfully"}) ;
                console.log("Uio") ;
                // res.redirect('/') ;
            
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

app.listen(PORT,()=>{
    console.log('poonam')
})