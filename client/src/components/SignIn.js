import React from "react";
import "../styles/SignIn.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { signInWithPopup } from "@firebase/auth";
import { auth, provider } from "../firebase";
import {Navigate} from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';

function SignIn(){
    const dispatch=useDispatch();
    const [name,setName]=React.useState("");
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    const currentUser=useSelector(state=>state.user.currentUser);
    const handleLogin=async(event)=>{
        event.preventDefault();
        dispatch(loginStart())
        try{
            const url=process.env.NODE_ENV==="production"?"https://youtube-clone-api224.onrender.com/api":"";
            const res=await axios.post(`${url}/auth/signin`,{name,password},{withCredentials: true}); //second parameter here is the request body
            dispatch(loginSuccess(res.data))
        }catch(err){
            dispatch(loginFailure(err));
        }
    }
    const handleSignin=async(event)=>{
        event.preventDefault();
        dispatch(loginStart());
        try{
            const url=process.env.NODE_ENV==="production"?"https://youtube-clone-api224.onrender.com/api":"";
            const res=await axios.post(`${url}/auth/signup`,{name,email,password},{withCredentials: true});
            dispatch(loginSuccess(res.data))
        }catch(err){
            dispatch(loginFailure(err))
        }
    }
    const handleClick=async()=>{
        dispatch(loginStart());
        try{
            await signInWithPopup(auth,provider).then((result)=>{ //this result consists of our user info provided by google
                const url=process.env.NODE_ENV==="production"?"https://youtube-clone-api224.onrender.com/api":"";
                axios.post(`${url}/auth/google`,{name:result.user.displayName,email:result.user.email,img:result.user.photoURL},{withCredentials: true})
                .then((res)=>{ //after verifying the info sent by google with info in our DB, we simply return the info of the user that is saved in the DB.
                    dispatch(loginSuccess(res.data))
                })
            })
        }catch(err){
            dispatch(loginFailure(err));
        }
    }
    return currentUser?<Navigate replace={true} to="/"></Navigate>:(
        <div id="sign-in-div">
        <div id="sign-in">
        <h2>Sign in</h2>
        <p>to continue to YouTube</p>
        <input type="text"  name="username" placeholder="Username" onChange={(event)=>{setName(event.target.value)}}></input>
        <input type="password"  name="password" placeholder="Enter your password" onChange={(event)=>{setPassword(event.target.value)}}></input>
        <button type="submit" onClick={handleLogin}>Sign in</button>
        <button type="submit" id="g-signin" onClick={handleClick}>Sign in with google <GoogleIcon/></button>
        <p>OR</p>
        <h2>Sign up</h2>
        <input type="text"  name="username" placeholder="Username" onChange={(event)=>{setName(event.target.value)}}></input>
        <input type="email"  name="email" placeholder="Email" onChange={(event)=>{setEmail(event.target.value)}}></input>
        <input type="password"  name="password" placeholder="Enter your password" onChange={(event)=>{setPassword(event.target.value)}}></input>
        <button type="submit" onClick={handleSignin}>Sign up</button>
        </div>
        </div>
    )
}

export default SignIn;