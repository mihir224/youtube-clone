import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    img:{
        type:String
    },
    subscribers:{
        type:Number,
        default:0
    },
    subscribedUsers:{ //list of subscribed users of a user
        type:[String]
    }
},{timestamps:true}); //through timestamps, mongoose will add to properties of type Date to our schema: createdAt and updatedAt 

export default mongoose.model("User",UserSchema); 