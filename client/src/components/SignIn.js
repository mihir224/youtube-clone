import React from "react";
import "../styles/SignIn.css";

function SignIn(){
    return (
        <div id="sign-in">
        <h2>Sign in</h2>
        <p>to continue to YouTube</p>
        <input type="email" id="email" name="email" placeholder="Email"></input>
        <input type="password" id="password" name="password" placeholder="Enter your password"></input>
        <button type="submit">Sign in</button>
        <p>OR</p>
        <h2>Sign up</h2>
        <input type="text" id="username" name="username" placeholder="Username"></input>
        <input type="email" id="email" name="email" placeholder="Email"></input>
        <input type="password" id="password" name="password" placeholder="Enter your password"></input>
        <button type="submit">Sign up</button>
        </div>
    )
}

export default SignIn;