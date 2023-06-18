import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom"
import logo from "../images/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import ExploreRoundedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballRoundedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationOutlined';
import ArticleRoundedIcon from '@mui/icons-material/ArticleOutlined';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsRoundedIcon from '@mui/icons-material/SettingsOutlined';
import FlagRoundedIcon from '@mui/icons-material/FlagOutlined';
import HelpRoundedIcon from '@mui/icons-material/HelpOutlined';
import SettingsBrightnessRoundedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useDispatch, useSelector } from "react-redux";

function Navbar({showNav}){
    const currentUser=useSelector(state=>state.user.currentUser);
    return (
        <div id={showNav?"nav-bar":"no-show"}>
           <div id="nav">
        <ul className="nav-list">
            <Link to="/" style={{textDecoration: "none",color: "inherit"}}><li className="nav-items"><HomeIcon  style={{fontSize:"25px"}} className="nav-icons"/><span>Home</span></li></Link>
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