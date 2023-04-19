import React from "react";
import "../styles/Card.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";
import { Link } from "react-router-dom";
import {format} from "timeago.js";



function Card({video}){
    const [channel,setChannel]=React.useState({});
    React.useEffect(()=>{
        const fetchChannel=async ()=>{
            const res=await axios.get(`/users/find/${video.userId}`);
            setChannel(res.data);
        }
        fetchChannel();
    },[video.userId]);
    return (
        <div id="card"> 
            <Link to="/video/:id"><div id="thumbnail"><img style={{width:"100%"}} src={video.imgUrl} height="190"></img></div></Link>
            <div id="card-body">
            <div id="content">
                <div id="channel-dp">
                    <img src={channel.img} height="40" width="40"></img>
                </div>
                <div id="video-details">
                    <h3>{video.title}</h3> 
                    <p>{channel.name}</p>
                    <p>{video.views} views • {format(video.createdAt)}</p>
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