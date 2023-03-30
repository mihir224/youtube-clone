import React from "react";
import "../styles/Searchbar.css";
import { Link } from "react-router-dom"
import logo from "../images/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Searchbar(){
    return (
        <div id="search-bar">
            <div id="search-area">
            <input id="search" type="search" placeholder="Search"></input>
            <button id="search-btn" type="submit"><SearchIcon id="search-icon"/></button>
            </div>
            <div id="n-icons">
                <VideoCallIcon id="icon"/>
                <NotificationsIcon id="icon"/>
                <button type="button"></button>
            </div>
        </div>
    )
}

export default Searchbar;