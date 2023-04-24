
const mongoose=require('mongoose'); 

const  DB='mongodb+srv://priyanshukumar906:priyanshu@cluster0.yaerupf.mongodb.net/priyanshu?retryWrites=true&w=majority'
mongoose.connect(DB,{
    useNewUrlParser: true, 
  
  useUnifiedTopology: true 
  
  }).then(()=>{
    console.log('connection successful')
  }).catch((err)=>console.log(err));