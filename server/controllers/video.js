import Video from "../models/Video.js";
import User from "../models/User.js";
import { createError } from "../error.js";


export const addVideo=async(req,res,next)=>{
    const newVideo=new Video({userId:req.data.id,...req.body});
    try{
        const video=await newVideo.save();
        res.status(200).json(video);
    }catch(err){
        next(err)
    }
}

export const updateVideo=async(req,res,next)=>{
    try{
        const video=await Video.findById(req.params.id)
        if(!video){
            return next(createError(404,"Not Found!"))
        }
        if(req.data.id===video.userId){ //verifying that the video that is to be updated belongs to the logged in user  
            const updatedVideo=await Video.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});
            res
            .status(200)
            .json(updatedVideo)
        }
        else{
            return next(createError(403,"You are not the owner of this video"))
        }
    }catch(err){
        next(err);
    }
}

export const deleteVideo=async(req,res,next)=>{
    try{
        const video=await Video.findById(req.params.id)
        if(!video){
            return next(createError(404,"Not Found!"))
        }
        if(req.data.id===video.userId){ //verifying that the video that is to be updated belongs to the logged in user  
            await Video.findByIdAndDelete(req.params.id)
            res
            .status(200)
            .json("Video has been deleted")
        }
        else{
            return next(createError(403,"You are not the owner of this video"))
        }
    }catch(err){
        next(err)
    }
}

export const findVideo=async(req,res,next)=>{
    try{
        const video=await Video.findById(req.params.id);
        if(!video){
            return next(createError(404,"Not Found!"))
        }
        res.status(200).json(video)
    }catch(err){
        next(err)
    }
}

export const updateView=async(req,res,next)=>{
    try{
        await Video.findByIdAndUpdate(req.params.id,{
            $inc:{views:1}
        })
        res.status(200).json("Views updated.")
    }catch(err){
        next(err)
    }
}

export const showRandom=async(req,res,next)=>{
    try{
        const videos=await Video.aggregate([{$sample:{size:10}}]); //returns 10 random videos from Video collection in the form of an array of objects
        res.status(200).json(videos)
    }catch(err){
        next(err)
    }
}

export const showTrending=async(req,res,next)=>{
    try{
        const videos=await Video.find().sort({views:-1}); //here the sort() method will return the videos with 
        //respect to the number of views. If in the sort() method we give a value of -1 to the views key, 
        //it will return data in descending order of views and if 1 is passed as a value, 
        //it will return data in ascending order
        res.status(200).json(videos)
    }catch(err){
        next(err)
    }
}

export const showSubscribed=async(req,res,next)=>{
    try{
        const user=await User.findById(req.data.id);
        const subscribedChannels=user.subscribedUsers;
        const list=await Promise.all(  //we use promise.all() because we need to find all the videos of all subscribed channels
            subscribedChannels.map((channelId)=>{
                return Video.find({userId:channelId}) 
            })
        ); 
        res.status(200).json(list.flat().sort((a,b)=>b.createdAt-a.createdAt)); //using only list will return a nested array (as we're fetching videos belonging to different users) and we are pushing a list into a json body thus we use the flat method to flatten the list and the sort method sorts the list in accordance with the data of creation in order to get the latest video
    }catch(err){
        next(err)
    }
}

export const getByTag=async(req,res,next)=>{
    const tags=req.query.tags.split(","); //to retrieve whatever has been fed into the query of tags 
    // in the url and then split that query which is in the form of a string from wherever there are 
    // commas into an array. for eg the string "mihir,ms" will be splitted into ans array of two items: [mihir,ms]. 
    // If we passed 'i' as a separator in the split function instead of a comma, it would've spitted the string 
    // from wherever 'i' occurs in the string
    try{
        const videos=await Video.find({tags:{$in:tags}}).limit(20);//The $in operator returns all those documents from
        // the video collection where the field tags has atleast one element from the specified array of
        // elements
        res.status(200).json(videos);
    }catch(err){
        next(err)
    }
}

export const search=async(req,res,next)=>{
    const query=req.query.q;
    try{
        const videos=await Video.find({title:{$regex:query,$options:"i"}}); //here regex is used for pattern 
        // matching such that it will return all those documents where the title contains the pattern that is 
        // passed as a value to the $regex operator. The "i" value is passed to the $options operator so that 
        // the pattern matching is case insensitive
        res.status(200).json(videos);
    }catch(err){
        next(err)
    }
}