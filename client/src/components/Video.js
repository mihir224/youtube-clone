import React, { useState,useEffect } from "react";
import "../styles/Video.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Shortcut from "@mui/icons-material/Shortcut";
import { useLocation } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { subscribe,unsubscribe } from "../redux/userSlice";
import { fetchStart,fetchSuccess,fetchError,like,dislike } from "../redux/videoSlice";
import {format} from "timeago.js";
import Comments from "./Comments";
import Suggestions from "./Suggestions";
import {Link} from "react-router-dom";

function Video(){
    const dispatch=useDispatch();
    const path=useLocation().pathname.split("/")[2]; //retrieves video id from url
    const currentVideo=useSelector(state=>state.video.currentVideo)
    const isLoading=useSelector(state=>state.video.isLoading);
    const currentUser=useSelector(state=>state.user.currentUser);
    const [channel,setChannel]=useState({})
    const [comments,setComments]=useState([])
    const [commentUser,setCommentUser]=useState({})
    const customStyle={
        display:"block",
        border:"none",
        width:"97%",
        padding:"2px 5px",
        margin:"0",
        resize:"none",
        overflow:"hidden",
        backgroundColor:"inherit",
        borderBottom: "1px solid gray",
        color:"white",
        float:"right",
        fontSize:"14px",
        fontFamily:"Montserrat"
    }
    useEffect(()=>{
        dispatch(fetchStart());
        const fetchData=async()=>{
            try{
                const url=process.env.NODE_ENV==="production"?"https://youtube-clone-api224.onrender.com/api":"";
                const vidRes=await axios.get(`${url}/videos/find/${path}`,{withCredentials: true});
                const channelRes=await axios.get(`${url}/users/find/${vidRes.data?.userId}`,{withCredentials: true})
                const commentRes=await axios.get(`${url}/comments/${path}`,{withCredentials: true});
                dispatch(fetchSuccess(vidRes.data))
                setChannel(channelRes.data)
                setComments(commentRes.data)
            }catch(err){
                dispatch(fetchError(err));
            }
        }
        fetchData();
    },[path,dispatch])
    const textareaRef=React.useRef(null);
    const [currentVal, setCurrentVal]=React.useState("");
    React.useEffect(()=>{
        if(currentUser){
        textareaRef.current.style.height="0px";
        const scrollHeight=textareaRef.current.scrollHeight;
        textareaRef.current.style.height=scrollHeight+"px"; //changing the current height of the text area to whatever is returned by scroll height
    }
    },[currentUser,currentVal,comments]);
    const handleLike=async()=>{
        if(!currentUser){
            alert("To like a video, first please login")
        }
        try{
            if(currentUser){
                const url=process.env.NODE_ENV==="production"?"https://youtube-clone-api224.onrender.com/api":"";
                await axios.put(`${url}/users/like/${currentVideo?._id}`,{},{withCredentials: true})
                dispatch(like(currentUser?._id))
            }
        }catch(err){
            console.log(err)
        }
    }
    const handleDislike=async()=>{
        if(!currentUser){
            alert("To dislike a video, first please login")
        }
        try{
            if(currentUser){
                const url=process.env.NODE_ENV==="production"?"https://youtube-clone-api224.onrender.com/api":"";
                await axios.put(`${url}/users/dislike/${currentVideo?._id}`,{},{withCredentials: true})
                dispatch(dislike(currentUser?._id))
            }
        }catch(err){
            console.log(err)
        }
    }
    const handleSub=async()=>{
        if(!currentUser){
            alert("Login to subscribe")
        }
        try{
            if(currentUser){
                const url=process.env.NODE_ENV==="production"?"https://youtube-clone-api224.onrender.com/api":"";
                currentUser?.subscribedUsers.includes(channel?._id)?
                    await axios.put(`${url}/users/unsub/${channel?._id}`,{},{withCredentials: true}):
                    await axios.put(`${url}/users/sub/${channel?._id}`,{},{withCredentials: true})
                dispatch(subscribe(channel?._id))
        }
        }catch(err){
            console.log(err)
        }
    }

    const handleComment=async()=>{
        try{
            const url=process.env.NODE_ENV==="production"?"https://youtube-clone-api224.onrender.com/api":"";
           await axios.post(`${url}/comments/`,{videoId:currentVideo?._id,desc:currentVal},{withCredentials: true});
           
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div id="video-div">
        <div id="video-section">
            <div id="video">
                {/* <iframe 
                    width="800" 
                    height="440" 
                    src="https://www.youtube.com/embed/yIaXoop8gl4?rel=0&autoplay=1" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen="allowfullscreen">
                </iframe> */}
                <video src={currentVideo?.videoUrl} id="vid" controls></video>
            </div>
            <h2 id="video-title">{currentVideo?.title}</h2>
            <div id="video-body">
                {isLoading?<p>Loading Channel Details...</p>:<div id="channel-details">
                    <div id="channel-container">
                    <div id="channel-dp">
                        <img src={channel?.img} style={{objectFit:"cover"}}  height="40" width="40"></img>
                    </div>
                    <div id="channel-desc">
                        <h3 style={{fontWeight:"500"}}>{channel?.name}</h3>
                        <p>{channel?.subscribers} subscribers</p>
                    </div>
                    </div>
                    {currentUser?.subscribedUsers.includes(channel?._id)?
                    <button className="sub-btn" type="button" onClick={handleSub}><NotificationsActiveIcon id="notif" /> Subscribed</button>:
                    <button className="sub-btn" type="button" onClick={handleSub}><NotificationsIcon id="notif"/>  Subscribe</button>}
                </div>}
                <div id="vid-icons">
                    <div>
                        <button id="like" className="vid-btns" type="button" onClick={handleLike}>{currentVideo?.likes.includes(currentUser?._id)?<ThumbUpIcon className="vid-icon" />:<ThumbUpOutlinedIcon className="vid-icon"/>} {currentVideo?.likes.length}</button>
                        <button id="dislike" className="vid-btns" type="button" onClick={handleDislike}>{currentVideo?.dislikes.includes(currentUser?._id)?<ThumbDownIcon className="vid-icon"/>:<ThumbDownOutlinedIcon className="vid-icon"/>}</button>
                    </div>
                    <button className="vid-btns" type="button"><ShortcutIcon className="vid-icon"/>Share</button>
                    <button className="vid-btns" type="button"><SaveAltIcon className="vid-icon"/>Save</button>
                </div>
            </div>
            <div id="desc">
                <div id="info">
                    <p>{currentVideo?.views} views</p>
                    <p>{format(currentVideo?.createdAt)}</p>
                    <div style={{display:"flex",width:"10em",justifyContent:"space-between"}}>
                    <span id='tag'>Tags: {currentVideo?.tags.map((tag)=><p style={{fontWeight:"400"}}>{tag}</p>)}</span>
                    </div>
                </div>
                <p>{currentVideo?.desc}</p>
            </div>
            <h3 style={{padding:"15px 0", fontWeight:"400"}}>{comments?.length} comments</h3>
            {currentUser?<div id="comment">
                <div id="channel-dp">
                    <img src={currentUser?.img} style={{objectFit:"cover"}} height="40" width="40"></img>
                </div>  
                <div id="comment-ip">           
                    <div id="ta-div">
                        <textarea 
                            ref={textareaRef} 
                            value={currentVal} 
                            style={customStyle}
                            placeholder="Add a comment..."
                            onChange={(event)=>{
                            setCurrentVal(event.target.value);
                        }}></textarea>
                    </div>
                    <div id="cmt-btns">
                        <button className="vid-btns" type="button">Cancel</button>
                        <button className="vid-btns" type="submit" onClick={handleComment}>Comment</button>
                    </div>
                </div>            
            </div>:<h3 style={{fontWeight:"400"}}>To add a comment, <Link to="/signin" replace={true} style={{color:"inherit"}}>Sign in</Link> to your MS-Tube account</h3>}
             <Comments videoId={currentVideo?._id}/>
        </div> 
        {isLoading?<span style={{color:'white',width:'25%', textAlign:'center'}}>Loading Suggestions...</span>:<Suggestions tags={currentVideo?.tags}/>}
        </div>
    )
}

export default Video;