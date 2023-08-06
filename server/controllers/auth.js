import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { createError } from "../error.js";
import jwt from "jsonwebtoken"
export const signup= async (req,res,next)=>{  //function is async because operations with mongodb will take some time
     try{ 
        const salt = bcrypt.genSaltSync(10);  //10 is the number of salt rounds
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser=new User({...req.body,password:hash}); //spreading whatever we've sent through body via postman as json and changing the password to hashed password 
        const user=await newUser.save();
        res.status(200).json(user)
     }catch(err){
         next(err)
     }
}
export const signin= async (req,res,next)=>{
    try{ 
        const user=await User.findOne({name:req.body.name});
        if(!user){
            return next(createError(404,"User not found!"))
        }
        const isCorrect=await bcrypt.compare(req.body.password,user.password)
        if(!isCorrect){
            return next(createError(400,"Wrong credentials!"))
        }

       const token=jwt.sign({id:user._id},process.env.JWT) //creating an access token through jwt with key being the user id and the second parameter being the secret
       //this access token will use the user id to authorize  the user
       const {password, ...others}=user._doc; //separating password from other details. 
       //This way we can send others instead of the whole user object which contains the hashed password 
       //as well. Apart from the user data, the user object contains a lot of other things. 
       //The user data is stored in the "_doc" key and thus we access that using dot notation.
       res
       .cookie("access_token",token,{ //to send the access token to the client
        //to use cookies, we import the cookie-parser
        // httpOnly:true //this will make our application more secure such that third party scripts will not be able to use our cookie 
       })
       .status(200)
       .json(others);

    }catch(err){
        next(err)
    }
} 

export const googleAuth=async(req,res,next)=>{
    try{
        const user=await User.findOne({email:req.body.email})
        if(user){ //user already exists in DB
            const token=jwt.sign({id:user._id},process.env.JWT)
            res
            .cookie("access_token",token,{ //to send the access token to the client
            //to use cookies, we import the cookie-parser
            //httpOnly:true //this will make our application more secure such that third party scripts will not be able to use our cookie 
            })
            .status(200)
            .json(user._doc);
        }
        else{ //user is being registered for the first time
            const newUser=new User({
                ...req.body,
                fromGoogle:true
            })
            const savedUser=await newUser.save();
            const token=jwt.sign({id:savedUser._id},process.env.JWT)
            res
            .cookie("access_token",token,{ 
            //httpOnly:true 
            })
            .status(200)
            .json(savedUser._doc);
        }
    }catch(err){
        next(err)
    }
}