import React, { useState,useEffect } from "react";
import "../styles/Video.css";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Shortcut from "@mui/icons-material/Shortcut";
import { useLocation } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchStart,fetchSuccess,fetchError } from "../redux/videoSlice";
import {format} from "timeago.js";

function Video(){
    const dispatch=useDispatch();
    const path=useLocation().pathname.split("/")[2]; //retrieves video id from url
    const currentVideo=useSelector(state=>state.video.currentVideo)
    const currentUser=useSelector(state=>state.user.currentUser);
    const [channel,setChannel]=useState({})
    useEffect(()=>{
        dispatch(fetchStart());
        const fetchData=async()=>{
            try{
                const vidRes=await axios.get(`/videos/find/${path}`);
                const channelRes=await axios.get(`/users/find/${vidRes.data?.userId}`)
                dispatch(fetchSuccess(vidRes.data))
                setChannel(channelRes.data)
            }catch(err){
                dispatch(fetchError(err));
            }
        }
        fetchData();
    },[path,dispatch])
    const customStyle={
        display:"block",
        border:"none",
        width:"97%",
        padding:"2px 5px",
        margin:"0",
        resize:"none",
        overflow:"hidden",
        backgroundColor:"inherit",
        border:"none",
        borderBottom: "1px solid gray",
        color:"white",
        float:"right",
        fontSize:"14px",
        fontFamily:"Montserrat"
    }
    const textareaRef=React.useRef(null);
    const [currentVal, setCurrentVal]=React.useState("");
    React.useEffect(()=>{
        textareaRef.current.style.height="0px";
        const scrollHeight=textareaRef.current.scrollHeight;
        textareaRef.current.style.height=scrollHeight+"px"; //changing the current height of the text area to whatever is returned by scroll height
    },[currentVal]);

    return (
        <div id="video-div">
        <div id="video-section">
            <div id="video">
                <iframe 
                    width="800" 
                    height="440" 
                    src="https://www.youtube.com/embed/yIaXoop8gl4?rel=0&autoplay=1" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen="allowfullscreen">
                </iframe>
            </div>
            <h2 id="video-title">{currentVideo?.title}</h2>
            <div id="video-body">
                <div id="channel-details">
                    <div id="channel-dp">
                        <img src={channel?.img} height="40" width="40"></img>
                    </div>
                    <div id="channel-desc">
                        <h3 style={{fontWeight:"500"}}>{channel?.name}</h3>
                        <p>{channel?.subscribers}</p>
                    </div>
                    <button className="sub-btn" type="button"><NotificationsIcon id="notif"/> Subscribe</button>
                </div>
                <div id="vid-icons">
                    <div>
                        <button id="like" className="vid-btns" type="button"><ThumbUpOffAltIcon className="vid-icon"/></button>
                        <button id="dislike" className="vid-btns" type="button"><ThumbDownOffAltIcon className="vid-icon"/></button>
                    </div>
                    <button className="vid-btns" type="button"><ShortcutIcon className="vid-icon"/>Share</button>
                    <button className="vid-btns" type="button"><SaveAltIcon className="vid-icon"/>Save</button>
                </div>
            </div>
            <div id="desc">
                <div id="info">
                    <p>{currentVideo?.views}</p>
                    <p>{format(currentVideo?.createdAt)}</p>
                    <p>{currentVideo?.tags}</p>
                </div>
                <p>It is a long established fact that a reader will be distracted by the 
                readable content of a page when looking at its layout. The point of using 
                Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                as opposed to using 'Content here, content here', making it look like readable English. 
                Many desktop publishing packages</p>
            </div>
            <h3 style={{padding:"15px 0", fontWeight:"400"}}>Number of comments</h3>
            <div id="comment">
                <div id="channel-dp">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s" height="40" width="40"></img>
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
                        <button className="vid-btns" type="button">Comment</button>
                    </div>
                </div>            
            </div>
            <div className="comments">
            <div id="channel-dp">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s" height="40" width="40"></img>
            </div> 
            <div id="cmnt-body">
                <p>user - when</p>
                <p>It is a long established fact that a reader will be distracted by the 
                readable content of a page when looking at its layout.</p>
                <div id="cmnts-btn">
                    <ThumbUpOffAltIcon/>
                    <ThumbDownOffAltIcon/>
                    <p><span>reply</span></p>
                </div>
            </div>
            </div>
            <div className="comments">
            <div id="channel-dp">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s" height="40" width="40"></img>
            </div> 
            <div id="cmnt-body">
                <p>user - when</p>
                <p>It is a long established fact that a reader will be distracted by the 
                readable content of a page when looking at its layout.</p>
                <div id="cmnts-btn">
                    <ThumbUpOffAltIcon/>
                    <ThumbDownOffAltIcon/>
                    <p><span>reply</span></p>
                </div>
            </div>
            </div>
            <div className="comments">
            <div id="channel-dp">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s" height="40" width="40"></img>
            </div> 
            <div id="cmnt-body">
                <p>user - when</p>
                <p>It is a long established fact that a reader will be distracted by the 
                readable content of a page when looking at its layout.</p>
                <div id="cmnts-btn">
                    <ThumbUpOffAltIcon/>
                    <ThumbDownOffAltIcon/>
                    <p><span>reply</span></p>
                </div>
            </div>
            </div>
            <div className="comments">
            <div id="channel-dp">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s" height="40" width="40"></img>
            </div> 
            <div id="cmnt-body">
                <p>user - when</p>
                <p>It is a long established fact that a reader will be distracted by the 
                readable content of a page when looking at its layout.</p>
                <div id="cmnts-btn">
                    <ThumbUpOffAltIcon/>
                    <ThumbDownOffAltIcon/>
                    <p><span>reply</span></p>
                </div>
            </div>
            </div>
            <div className="comments">
            <div id="channel-dp">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s" height="40" width="40"></img>
            </div> 
            <div id="cmnt-body">
                <p>user - when</p>
                <p>It is a long established fact that a reader will be distracted by the 
                readable content of a page when looking at its layout.</p>
                <div id="cmnts-btn">
                    <ThumbUpOffAltIcon/>
                    <ThumbDownOffAltIcon/>
                    <p><span>reply</span></p>
                </div>
            </div>
            </div>
            <div className="comments">
            <div id="channel-dp">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s" height="40" width="40"></img>
            </div> 
            <div id="cmnt-body">
                <p>user - when</p>
                <p>It is a long established fact that a reader will be distracted by the 
                readable content of a page when looking at its layout.</p>
                <div id="cmnts-btn">
                    <ThumbUpOffAltIcon/>
                    <ThumbDownOffAltIcon/>
                    <p><span>reply</span></p>
                </div>
            </div>
            </div>
        </div>
        <div id="suggestions">
        <div className="suggestion">
            <div id="thumbnail">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s" height="94" width="168"></img>
            </div> 
            <div id="s-txt">
                <h3>It is a long established fact that a reader will be distracted</h3>
                <p>Channel</p>
                <p>Views • When</p>
            </div>
        </div>
        <div className="suggestion">
            <div id="thumbnail">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s" height="94" width="168"></img>
            </div> 
            <div id="s-txt">
                <h3>It is a long established fact that a reader will be distracted</h3>
                <p>Channel</p>
                <p>Views • When</p>
            </div>
        </div>
        <div className="suggestion">
            <div id="thumbnail">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s" height="94" width="168"></img>
            </div> 
            <div id="s-txt">
                <h3>It is a long established fact that a reader will be distracted</h3>
                <p>Channel</p>
                <p>Views • When</p>
            </div>
        </div>
        <div className="suggestion">
            <div id="thumbnail">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s" height="94" width="168"></img>
            </div> 
            <div id="s-txt">
                <h3>It is a long established fact that a reader will be distracted</h3>
                <p>Channel</p>
                <p>Views • When</p>
            </div>
        </div>
        <div className="suggestion">
            <div id="thumbnail">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s" height="94" width="168"></img>
            </div> 
            <div id="s-txt">
                <h3>It is a long established fact that a reader will be distracted</h3>
                <p>Channel</p>
                <p>Views • When</p>
            </div>
        </div>
        <div className="suggestion">
            <div id="thumbnail">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s" height="94" width="168"></img>
            </div> 
            <div id="s-txt">
                <h3>It is a long established fact that a reader will be distracted</h3>
                <p>Channel</p>
                <p>Views • When</p>
            </div>
        </div>
        <div className="suggestion">
            <div id="thumbnail">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s" height="94" width="168"></img>
            </div> 
            <div id="s-txt">
                <h3>It is a long established fact that a reader will be distracted</h3>
                <p>Channel</p>
                <p>Views • When</p>
            </div>
        </div>
        <div className="suggestion">
            <div id="thumbnail">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s" height="94" width="168"></img>
            </div> 
            <div id="s-txt">
                <h3>It is a long established fact that a reader will be distracted</h3>
                <p>Channel</p>
                <p>Views • When</p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Video;