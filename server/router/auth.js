const express=require("express");
const mongoose=require("mongoose");
const router=express.Router();

require("../db/conn");

const User=require("../module/userSchema");

router.get("/",(req,res)=>{
   res.send("hi from backend");
})

router.post("/register",(req,res)=>{
    //  res.json({message:req.body});
    const {name,email,phone,work,password,cpassword}=req.body;

    if(!name||!email|| !phone|| !work|| !password|| !cpassword)
     return res.status(422).json({error:"Plz filled the field properly"});

     User.findOne({email:email}).
     then((userExist)=>{
        if(userExist){
        res.status(422).json({error:"email already exit"});
        }
     
     
     const user=new User({name,email,phone,work,password,cpassword});

     user.save().then(()=>{
        res.status(201).json({message:"user register succesfully"});
     }).catch((e)=>{
        res.status(500).json({error:"failed to register"});
     })
    }).catch(err=>{
        console.log(err); 
     })
})

module.exports= router;