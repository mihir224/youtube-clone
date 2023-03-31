import { createError } from "../error.js"
import User from "../models/User.js"
import Video from "../models/Video.js";

export const update=async(req,res,next)=>{
    if(req.params.id===req.data.id){ //the user id matches the id in the access token ie user trying to update is the same as authorised user
        try{
            const updatedUser=await User.findByIdAndUpdate(req.params.id, {
                $set:req.body //here set is used to update only specific fields that we provide and req.body 
                //returns the fields to be updated as key value pairs
            },{new:true}); //this will return us the newest version of our user
            res
            .status(200)
            .json(updatedUser);
        }catch(err){
            next(err)
        }
    }
    else {
        return next(createError(403,"You are not the owner of this account!"))
    }
}
export const deleteUser=async(req,res,next)=>{
    if(req.params.id===req.data.id){
        try{
            await User.findByIdAndDelete(req.params.id);
            res
            .status(200)
            .json("User has been deleted")
        }catch(err){
            next(err)
        }
    }
    else{
        return next(createError(403,"You are not the owner of this account"))
    }
}
export const findUser=async(req,res,next)=>{
    //here we don't have to check if the user is authorised as we can find the channel of a user without logging in
    try{
        const user=await User.findById(req.params.id);
        const{password,...others}=user._doc;
        res
        .status(200)
        .json(others)
    }catch(err){
        next(err)
    }
}
export const subscribe=async(req,res,next)=>{
    try{
        await User.findByIdAndUpdate(req.data.id,{
            $push:{subscribedUsers:req.params.id} //to add the subscribed channel to the list of subscribed channels of the user
        });
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:1} //to update the subscribers of subscribed channel by 1
        });
        res
        .status(200)
        .json("Subscribed")
    }catch(err){
        next(err)
    }
}
export const unsubscribe=async(req,res,next)=>{
    try{
        await User.findByIdAndUpdate(req.body.id,{
            $push:{subscribedUsers:req.params.id}
        });
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:-1}
        });
        res
        .status(200)
        .json("Unsubscribed")
    }catch(err){
        next(err)
    }
}
export const like=async(req,res,next)=>{
    const id=req.data.id;
    const videoId=req.params.videoId;
    try{
        await Video.findByIdAndUpdate(videoId, {
            $addToSet:{likes:id}, //adding the users who liked the video using this operator makes sure that the user is not duplicated in the likes list everytime he likes the video
            $pull:{dislikes:id} //pulling out the user from disliked users list if he previously disliked the video
        });
        res.status(200).json("You liked this video.")
    }catch(err){
        next(err);
    }
}
export const dislike=async(req,res,next)=>{
    const id=req.data.id;
    const videoId=req.params.videoId;
    try{
        await Video.findByIdAndUpdate(videoId, {
            $addToSet:{dislikes:id}, //adding the users who liked the video using this operator makes sure that the user is not duplicated in the likes list everytime he likes the video
            $pull:{likes:id} //pulling out the user from disliked users list if he previously disliked the video
        });
        res.status(200).json("You disliked this video.")
    }catch(err){
        next(err);
    }
}
