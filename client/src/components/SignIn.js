import React from "react";
import "../styles/SignIn.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";

function SignIn(){
    const dispatch=useDispatch();
    const [name,setName]=React.useState("");
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
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
    return (
        <div id="sign-in">
        <h2>Sign in</h2>
        <p>to continue to YouTube</p>
        <input type="text"  name="username" placeholder="Username" onChange={(event)=>{setName(event.target.value)}}></input>
        <input type="password"  name="password" placeholder="Enter your password" onChange={(event)=>{setPassword(event.target.value)}}></input>
        <button type="submit" onClick={handleLogin}>Sign in</button>
        <p>OR</p>
        <h2>Sign up</h2>
        <input type="text"  name="username" placeholder="Username" onChange={(event)=>{setName(event.target.value)}}></input>
        <input type="email"  name="email" placeholder="Email" onChange={(event)=>{setEmail(event.target.value)}}></input>
        <input type="password"  name="password" placeholder="Enter your password" onChange={(event)=>{setPassword(event.target.value)}}></input>
        <button type="submit">Sign up</button>
        </div>
    )
}

export default SignIn;