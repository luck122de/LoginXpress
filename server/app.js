const express=require("express");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const app=express();

dotenv.config({path: './config.env' });

require("./db/conn");

// const User=require("./module/userSchema");

const PORT=process.env.PORT;


app.get("/",(req,res)=>{
    res.send("u r on home page");
})



app.listen(PORT,()=>{
    console.log(`server get connected ${PORT}`);
})