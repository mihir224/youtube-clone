import React, { useState } from "react";
import "../styles/Searchbar.css";
import { Link } from "react-router-dom"
import logo from "../images/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";

function Searchbar({showNav,setShowNav}){
    const dispatch=useDispatch();
    const currentUser=useSelector(state=>state.user.currentUser); 
    // const [dropdown,setDropDown]=useState(false);
    const customStyling={
        background:`url(${currentUser?.img}) no-repeat`,
        backgroundSize:"40px",
        backgroundPosition:"-5px -2px"
    }
   
    const handleLogout=(event)=>{
        event.preventDefault();
        dispatch(logout());
    }
    return (
        <div id="search-bar" >
        <div id="logo-container">
                <div id="hamburger" onClick={()=>setShowNav(!showNav)}><MenuIcon id="icon"/></div>
                <Link to="/" style={{textDecoration: "none",fontSize: "14px"}}><div id="logo">
                    <img src={logo} height="25" width="40"></img><h2>MS-Tube</h2>
                </div></Link>
            </div>
            <div id="search-area">
            <input id="search" type="search" placeholder="Search"></input>
            <button id="search-btn" type="submit"><SearchIcon id="search-icon"/></button>
            </div>
            {currentUser?
            <div id="n-icons">
                <VideoCallIcon id="icon"/>
                <NotificationsIcon id="icon"/>
               <div id="dropdown">
                <button type="button"  style={customStyling}></button>
                <div id="dropdown-content" >
                    <ul>
                    <li className="dd-list-item"><button id="logout-btn" onClick={handleLogout}><LogoutIcon style={{fontSize:"20px"}}/> Log out</button></li>
                    </ul>
                </div>
                </div>
            </div>
            :<Link to="signin" style={{textDecoration: "none",fontSize: "14px",listStyle:"none"}}><button id="signin-btn" type="submit"><AccountCircleRoundedIcon/><span>Sign in</span></button></Link>
            }
        </div>
    )
}

export default Searchbar;