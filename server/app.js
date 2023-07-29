const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("u r on home page");
})



app.listen(3000,()=>{
    console.log("server get connected");
})