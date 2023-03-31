import mongoose from "mongoose";

const CommentSchema =new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    videoId:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
},{timestamps:true}); //through timestamps, mongoose will add to properties of type Date to our schema: createdAt and updatedAt 

export default mongoose.model("Comment",CommentSchema); 