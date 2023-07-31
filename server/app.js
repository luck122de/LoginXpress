const express=require("express");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const app=express();

dotenv.config({path: './config.env' });



//require middleware for json
app.use(express.json());

//link router file for easy rout
app.use(require('./router/auth'));


const PORT=process.env.PORT;

const middleware=(req,res,next)=>{
   console.log("hello my middleware");
   next();
}


app.get("/",(req,res)=>{
    res.send("u r on home page");
})



app.listen(PORT,()=>{
    console.log(`server get connected ${PORT}`);
})