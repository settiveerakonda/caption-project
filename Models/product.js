import mongoose from "mongoose";
const Schema=mongoose.Schema
const product =new Schema({
    sno:{
        type:String,
        required:true
    },    
    customer_name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
   data:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
   
})
export default  mongoose.model('products',product)