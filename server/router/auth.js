const express=require("express");
const mongoose=require("mongoose");
const router=express.Router();
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

require("../db/conn");

const User=require("../module/userSchema");

router.get("/",(req,res)=>{
   res.send("hi from backend");
})

router.post("/register",async (req,res)=>{
   const {name,email,phone,work,password,cpassword}=req.body;

     if(!name,!email,!phone,!work,!password,!cpassword){
      res.status(422).json({error:"filled form completely"});
     }
 
     try{
          const userExit=await User.findOne({email:email});

         if(userExit){
            res.status(422).json({error:"Email already register"});
         }
         else if(password != cpassword){
            res.status(422).json({error:"Email already register"});
         }

         else{

         const user=new User({name,email,phone,work,password,cpassword});
//pre bcrypt
        await user.save();

         res.status(201).json({message:"user successfully register"});
         }
       
     }
     catch(err){
           console.log(err);
     }


})

router.post("/singin",async (req,res)=>{
   try{
       let token;
      const {email,password}=req.body;

      if(!email, !password){
         return res.status(400).json({error:"invalid email and password"});
      }
       const userlogin=await User.findOne({email:email});
       
       console.log(userlogin);

       if(userlogin){

         const isMatch=await bcrypt.compare(password,userlogin.password);

         token=await userlogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken",token,{
         expires:new Date(Date.now() + 25892000000),
         httpOnly:true

        })

               
         if(!isMatch){
            
            res.status(400).json({error:"invalid credential"});
         }
         else{
            
              res.json({message:"user singin successfully"})
             }
       }
       else{
         
         res.status(400).json({error:"invalid credential"});
       }

   }
   catch(err){
      console.log(err);
   }
})

module.exports= router;