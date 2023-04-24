const mongoose = require('mongoose') 

const DB = process.env.DATABASE ; 

mongoose.connect(DB,{
    useNewUrlParser : true ,
    //useCreateIndex : true ,
    useUnifiedTopology : true ,
    //useFindAndModify : false
}).then(()=>{
    console.log("connection1 successful");
}).catch((err) => {console.log(err)}) ;

const  DB2='mongodb+srv://priyanshukumar906:priyanshu@cluster0.yaerupf.mongodb.net/priyanshu?retryWrites=true&w=majority'
mongoose.connect(DB2,{
    useNewUrlParser: true, 
  
  useUnifiedTopology: true 
  
  }).then(()=>{
    console.log('connection2 successful')
  }).catch((err)=>console.log(err));