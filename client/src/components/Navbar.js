import React from "react";
import "../styles/Navbar.css";
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

function Navbar(){
    return (
        <div id="nav-bar">
        <ul className="nav-list">
            <li><HomeIcon  className="nav-icons"/> <span>Home</span></li>
            <li><ExploreRoundedIcon className="nav-icons"/> <span>Explore</span></li>
            <li><SubscriptionsIcon className="nav-icons"/><span> Subscriptions</span></li>
        </ul>
        <hr/>
        <ul className="nav-list">
            <li><VideoLibraryRoundedIcon className="nav-icons"/> <span>Library</span></li>
            <li><HistoryRoundedIcon className="nav-icons"/> <span>History</span></li>
        </ul>
        <hr/>
        <ul className="nav-list">
            <li><LibraryMusicRoundedIcon className="nav-icons"/> <span>Music</span></li>
            <li><SportsBasketballRoundedIcon className="nav-icons"/> <span>Sports</span></li>
            <li><SportsEsportsRoundedIcon className="nav-icons"/> <span>Gaming</span></li>
            <li><MovieCreationRoundedIcon className="nav-icons"/> <span>Movies</span></li>
            <li><ArticleRoundedIcon className="nav-icons"/> <span>News</span></li>
            <li><LiveTvRoundedIcon className="nav-icons"/> <span>Live</span></li>
        </ul>
        <hr/>
        <ul className="nav-list">
            <li><SettingsRoundedIcon className="nav-icons"/> <span>Settings</span></li>
            <li><FlagRoundedIcon className="nav-icons"/> <span>Report</span></li>
            <li><HelpRoundedIcon className="nav-icons"/> <span>Help</span></li>
            <li><SettingsBrightnessRoundedIcon className="nav-icons"/> <span>Display </span></li>
        </ul>
        </div>
    )
}

export default Navbar;