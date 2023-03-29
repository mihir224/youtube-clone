import React from "react";
import "../styles/Card.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from "react-router-dom"


function Card(){
    return (
        <div id="card"> 
            <Link to="/video/:id"><div id="thumbnail"><img style={{width:"100%"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s" height="190"></img></div></Link>
            <div id="card-body">
            <div id="content">
                <div id="channel-dp">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s" height="40" width="40"></img>
                </div>
                <div id="video-details">
                    <h3>title</h3> 
                    <p>channel</p>
                    <p>Views • When</p>
                </div>
            </div>
                <div id="more">
                    <MoreVertIcon id="more-icon"/>
                </div>
            </div>
        </div>
    )
}

export default Card;