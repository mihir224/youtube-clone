import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom"
import logo from "../images/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import SportsBasketballRoundedIcon from '@mui/icons-material/SportsBasketballRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import SettingsBrightnessRoundedIcon from '@mui/icons-material/SettingsBrightnessRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useDispatch, useSelector } from "react-redux";

function Navbar(){
    const currentUser=useSelector(state=>state.user.currentUser);
    return (
        <div id="nav-bar">
        <div id="logo-container">
                <div id="hamburger"><MenuIcon id="icon"/></div>
                <Link to="/" style={{textDecoration: "none",fontSize: "14px"}}><div id="logo">
                    <img src={logo} height="25" width="40"></img><h2>MS-Tube</h2>
                </div></Link>
            </div>
           <div id="nav">
        <ul className="nav-list">
            <Link to="/" style={{textDecoration: "none",color: "inherit"}}><li className="nav-items"><HomeIcon  style={{fontSize:"25px"}} className="nav-icons"/> <span>Home</span></li></Link>
            <Link to="/trending" style={{textDecoration: "none",color: "inherit"}}><li className="nav-items"><ExploreRoundedIcon style={{fontSize:"25px"}} className="nav-icons"/> <span>Explore</span></li></Link>
            <Link to="/subscribed" style={{textDecoration: "none",color: "inherit"}}><li className="nav-items"><SubscriptionsIcon style={{fontSize:"25px"}} className="nav-icons"/> <span>Subscriptions</span></li></Link>
        </ul>
        <hr/>
        <ul className="nav-list">
            <li className="nav-items"><VideoLibraryRoundedIcon style={{fontSize:"25px"}} className="nav-icons"/> <span>Library</span></li>
            <li className="nav-items"><HistoryRoundedIcon style={{fontSize:"25px"}} className="nav-icons"/> <span>History</span></li>
        </ul>
        <hr/>
        <ul className="nav-list">
            {currentUser?<li style={{padding:"0px 10px",lineHeight: "1.2em",listStyle:"none",fontSize: "14px",fontWeight:"600",opacity:"0.6"}}><span>BEST OF <br/> MS-TUBE</span></li>
            :<div><li style={{padding:"4px 10px",lineHeight: "1.5em",listStyle:"none",fontSize: "14px",fontWeight:"400"}}><span>Sign in to like videos, comment, and subscribe.</span></li>
            <Link to="signin" style={{textDecoration: "none",fontSize: "14px",listStyle:"none"}}><li style={{padding:"4px 10px",lineHeight: "1em"}} ><button id="signin-btn" type="submit"><AccountCircleRoundedIcon/><span>Sign in</span></button></li></Link></div>
            }
        </ul>
        {!currentUser&&<hr/>}
        <ul className="nav-list">
            <li className="nav-items"><LibraryMusicRoundedIcon style={{fontSize:"25px"}} className="nav-icons"/> <span>Music</span></li>
            <li className="nav-items"><SportsBasketballRoundedIcon style={{fontSize:"25px"}} className="nav-icons"/> <span>Sports</span></li>
            <li className="nav-items"><SportsEsportsRoundedIcon style={{fontSize:"25px"}} className="nav-icons"/> <span>Gaming</span></li>
            <li className="nav-items"><MovieCreationRoundedIcon style={{fontSize:"25px"}} className="nav-icons"/> <span>Movies</span></li>
            <li className="nav-items"><ArticleRoundedIcon style={{fontSize:"25px"}} className="nav-icons"/> <span>News</span></li>
            <li className="nav-items"><LiveTvRoundedIcon style={{fontSize:"25px"}} className="nav-icons"/> <span>Live</span></li>
        </ul>
        <hr/>
        <ul className="nav-list">
            <li className="nav-items"><SettingsRoundedIcon style={{fontSize:"25px"}} className="nav-icons"/> <span>Settings</span></li>
            <li className="nav-items"><FlagRoundedIcon style={{fontSize:"25px"}} className="nav-icons"/> <span>Report</span></li>
            <li className="nav-items"><HelpRoundedIcon style={{fontSize:"25px"}} className="nav-icons"/> <span>Help</span></li>
            <li className="nav-items"><SettingsBrightnessRoundedIcon style={{fontSize:"25px"}} className="nav-icons"/> <span>Display </span></li>
        </ul>
        </div>
        </div>
    )
}

export default Navbar;