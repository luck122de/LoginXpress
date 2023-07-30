const express=require("express");
const app=express();
const mongoose=require("mongoose");

const DB="mongodb+srv://raiankit390:Shreelu323@cluster0.koggrw6.mongodb.net/mernStackretryWritestrue&wmajority"

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