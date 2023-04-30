import React from "react";
import "../styles/SignIn.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { signInWithPopup } from "@firebase/auth";
import { auth, provider } from "../firebase";
import {Navigate} from "react-router-dom";

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
            const res=await axios.post("/auth/signin",{name,password}); //second parameter here is the request body
            dispatch(loginSuccess(res.data))
            //console.log(res.data)
        }catch(err){
            dispatch(loginFailure(err));
            //console.log(err)
        }
    }
    const handleSignin=async(event)=>{
        event.preventDefault();
        dispatch(loginStart());
        try{
            const res=await axios.post("/auth/signup",{name,email,password});
            dispatch(loginSuccess(res.data))
        }catch(err){
            dispatch(loginFailure(err))
        }
    }
    const handleClick=async()=>{
        dispatch(loginStart());
        try{
            await signInWithPopup(auth,provider).then((result)=>{ //this result consists of our user info provided by google
                axios.post("auth/google",{name:result.user.displayName,email:result.user.email,img:result.user.photoURL})
                .then((res)=>{ //after verifying the info sent by google with info in our DB, we simply return the info of the user that is saved in the DB.
                    dispatch(loginSuccess(res.data))
                })
            })
        }catch(err){
            dispatch(loginFailure(err));
        }
    }
    return currentUser?<Navigate replace={true} to="/"></Navigate>:(
        <div id="sign-in">
        <h2>Sign in</h2>
        <p>to continue to YouTube</p>
        <input type="text"  name="username" placeholder="Username" onChange={(event)=>{setName(event.target.value)}}></input>
        <input type="password"  name="password" placeholder="Enter your password" onChange={(event)=>{setPassword(event.target.value)}}></input>
        <button type="submit" onClick={handleLogin}>Sign in</button>
        <button type="submit" onClick={handleClick}>Sign in with google</button>
        <p>OR</p>
        <h2>Sign up</h2>
        <input type="text"  name="username" placeholder="Username" onChange={(event)=>{setName(event.target.value)}}></input>
        <input type="email"  name="email" placeholder="Email" onChange={(event)=>{setEmail(event.target.value)}}></input>
        <input type="password"  name="password" placeholder="Enter your password" onChange={(event)=>{setPassword(event.target.value)}}></input>
        <button type="submit" onClick={handleSignin}>Sign up</button>
        </div>
    )
}

export default SignIn;