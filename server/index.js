import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app=express();
dotenv.config();

const connect=()=>{
    mongoose.connect("mongodb+srv://mihir224:mugsKhain224@cluster0.ly91ewg.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        console.log("DB connected.") 
    }).catch(err=>{ //throw err, if any
        throw err;
    });
}

//middleware
app.use(cookieParser());
app.use(express.json()); //to allow express to use external json files
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes);
app.use("/api/videos",videoRoutes);
app.use("/api/comments",commentRoutes);

app.use((err,req,res,next)=>{
    const status=err.status||500;
    const message=err.message||"Something went wrong!";
    return res.status(status).json({
        success:false,
        status,
        message
    })
})

app.listen(8500,()=>{ 
    connect();
    console.log("server started on port 8500");
})