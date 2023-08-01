const express=require("express");
const mongoose=require("mongoose");
const router=express.Router();

require("../db/conn");

const User=require("../module/userSchema");

router.get("/",(req,res)=>{
   res.send("hi from backend");
})

router.post("/register",async (req,res)=>{
   const {name,email,phone,work,pasword,cpassword}=req.body;

     if(!name,!email,!phone,!work,!pasword,!cpassword){
      res.status(422).json({error:"filled form completely"});
     }
 
     try{
          const userExit=await User.findOne({email:email});

         if(userExit){
            res.status(422).json({error:"Email already register"});
         }

         const user=new User({name,email,phone,work,pasword,cpassword});

        await user.save();

         res.status(201).json({message:"user successfully register"});
       
     }
     catch(err){
           console.log(err);
     }


})

router.post("/singin",async (req,res)=>{
   try{
      const {email,password}=req.body;

      if(!email, !password){
         return res.status(400).json({error:"invalid email and password"});
      }
       const userlogin=await User.findOne({email:email});
       
       console.log(userlogin);

       if(!userlogin){
         res.status(400).json({message:"user error"});
       }
       else{
       res.json({message:"user singUp successfully"})
       }
   }
   catch(err){
      console.log(err);
   }
})

module.exports= router;