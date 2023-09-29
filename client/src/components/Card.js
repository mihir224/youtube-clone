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
            const url=process.env.NODE_ENV==="production"?"https://youtube-clone-api224.onrender.com/api":"";
            const res=await axios.get(`${url}/users/find/${video.userId}`);
            setChannel(res.data);
        }
        fetchChannel();
    },[video.userId]);
    return (
        <div id="card"> 
            <Link to={`/video/${video._id}`}><div id="thumbnail"><img style={{width:"100%"}} src={video.imgUrl} height="190"></img></div></Link>
            <div id="card-body">
            <div id="card-content">
                <div id="channel-dp">
                    <img src={channel.img} style={{objectFit:"cover"}} height="40" width="40"></img>
                </div>
                <div id="video-details">
                    <h3 style={{fontWeight:"500"}}>{video.title}</h3> 
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