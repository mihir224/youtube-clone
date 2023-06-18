import React,{useState,useEffect} from "react";
import axios from "axios";
import { format } from "timeago.js";
import "../styles/Video.css";

function Suggestion({video}){
    const [channel,setChannel]=useState({});
    useEffect(()=>{
        const fetchUser=async()=>{
            try{
                const url=process.env.NODE_ENV==="production"?"https://youtube-clone-api224.onrender.com/api":"";
                const user =await axios.get(`${url}/users/find/${video?.userId}`,{withCredentials: true})
                setChannel(user.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchUser();
    },[])
    return video?(
    <div className="suggestion">
            <div id="thumbnail">
                <img src={video.imgUrl} style={{objectFit:"cover"}} height="94" width="168"></img>
            </div> 
            <div id="s-txt">
                <h3>{video.title}</h3>
                <p>{channel?.name}</p>
                <p>{video.views} views • {format(video.createdAt)}</p>
            </div>
    </div>
    ):<div>Loading</div>
}

export default Suggestion;