const express = require('express') 
const mongoose =require('mongoose')

const app = express() ;
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '50mb' })); 
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
const  DB='mongodb+srv://priyanshukumar906:priyanshu@cluster0.yaerupf.mongodb.net/priyanshu?retryWrites=true&w=majority';
app.use(require('./router/auth'));

 const User=require('./model/userSchema')
const middleware =(req,res,next)=>{
  console.log('hello world');
  next();
}
app.get("/",(req,res)=>{
  res.send('hello world from server');
})
app.get("/about",middleware, (req,res)=>{
  res.send('hello world from server');
})
app.listen(5000,()=>{
  console.log('server is running')
}
)