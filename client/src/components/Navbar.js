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
            <li><HomeIcon className="nav-icons"/> Home</li>
            <li><ExploreRoundedIcon className="nav-icons"/> Explore</li>
            <li><SubscriptionsIcon className="nav-icons"/> Subscriptions</li>
        </ul>
        <hr/>
        <ul className="nav-list">
            <li><VideoLibraryRoundedIcon className="nav-icons"/> Library</li>
            <li><HistoryRoundedIcon className="nav-icons"/> History</li>
        </ul>
        <hr/>
        <ul className="nav-list">
            <li><LibraryMusicRoundedIcon className="nav-icons"/> Music</li>
            <li><SportsBasketballRoundedIcon className="nav-icons"/> Sports</li>
            <li><SportsEsportsRoundedIcon className="nav-icons"/> Gaming</li>
            <li><MovieCreationRoundedIcon className="nav-icons"/> Movies</li>
            <li><ArticleRoundedIcon className="nav-icons"/> News</li>
            <li><LiveTvRoundedIcon className="nav-icons"/> Live</li>
        </ul>
        <hr/>
        <ul className="nav-list">
            <li><SettingsRoundedIcon className="nav-icons"/> Settings</li>
            <li><FlagRoundedIcon className="nav-icons"/> Report</li>
            <li><HelpRoundedIcon className="nav-icons"/> Help</li>
            <li><SettingsBrightnessRoundedIcon className="nav-icons"/> Display </li>
        </ul>
        </div>
    )
}

export default Navbar;