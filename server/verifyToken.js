import jwt from "jsonwebtoken";
import { createError } from "./error.js";
export const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token;
    if(!token){
        return next(createError(401,"You are not authorised"));
    }
    jwt.verify(token,process.env.JWT,(err,decodedData)=>{
        if(err){
            return next(createError(403,"Token invalid")); //an error object passed to the next function will mean that
            //an error occurred while entertaining the request and we should now stop further execution of the middleware and 
            //controller functions
        }
        req.data=decodedData; //user is verified, thus saving the data inside the token which contains the user's id
        next(); //to continue where we left off after verification
    });
}