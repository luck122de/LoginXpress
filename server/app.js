const express=require("express");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const app=express();

dotenv.config({path: './config.env' });

const DB=process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log(`not connected ${e}`);
})

app.get("/",(req,res)=>{
    res.send("u r on home page");
})



app.listen(3000,()=>{
    console.log("server get connected");
})