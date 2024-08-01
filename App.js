import express, { response } from 'express';
import mongoose from 'mongoose';
// import nodemailer from 'nodemailer' 
import bodyParser from 'body-parser';//npm i body parser
import cors from"cors";//npm i cors
import product from './Models/product';
// import product from './Models/product';

//const express = require('express')
const app = express()
// var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
    mongoose.connect('mongodb+srv://settiveera9652:H5bypsDMVWzzOkaW@cluster0.qvbwjlp.mongodb.net/Table?retryWrites=true&w=majority')
    .then(()=>app.listen(4000))
    .then(()=>
    console.log("connected to database & listening to localhost 4000")  //H5bypsDMVWzzOkaW
)
.catch((err)=>console.log(err));
app.post    ('/adddata', async (req,res,next)=>{          
    console.log(req.body)
    const{sno,customer_name,age,phone,location,data,time}=req.body
    const student =new product({
      sno,
      customer_name,
      age,
      phone,
      location,
      data,
      time
        
    })
    try{
  student.save();
    }
  catch(err){
    console.log(err)
}
// await student.save().then(response=>{console.log(response)}).catch(err=>{console.log(err)})
return res.send("OK")

})
app.get('/getallproduts',(req,res)=>{
 product.find().then(product => res.json(product))
 .catch (err => res.json(err))
})