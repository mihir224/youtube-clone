import React, { useState, useEffect } from "react";
import "../styles/Video.css";
import axios from 'axios';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import {format} from 'timeago.js';

function Comment({comment}){
    const [channel,setChannel]=useState({});
    useEffect(()=>{
        const fetchChannel=async()=>{
            const url=process.env.NODE_ENV==="production"?"https://youtube-clone-api224.onrender.com/api":"";
                const fetchedChannel=await axios.get(`${url}/users/find/${comment.userId}`);
                setChannel(fetchedChannel.data);
        }
        fetchChannel();
    },[comment.userId])
    return (
        <div className="comments">
            <div id="channel-dp">
                <img src={channel.img} style={{objectFit:"cover"}} height="40" width="40"></img>
            </div> 
            <div id="cmnt-body">
                <p ><span style={{fontWeight:"bold"}}>{channel.name}</span> • <span>{format(comment?.createdAt)}</span></p>
                <p>{comment.desc}</p>
                <div id="cmnts-btn">
                    <ThumbUpOutlinedIcon/>
                    <ThumbDownOutlinedIcon/>
                    <p><span>reply</span></p>
                </div>
            </div>
        </div>
        )
}

export default Comment;