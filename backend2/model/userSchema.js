const mongoose=require('mongoose')

const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        contactPerson_name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        mobile:{
            type:String,
            required:true
        },
        property_address:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
        
    }
)
const User =mongoose.model('USER',userSchema);
module.exports=User;