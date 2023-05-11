import axios from "axios";
import React, { useEffect, useState } from "react";
import Suggestion from "./Suggestion";
import "../styles/Video.css";

function Suggestions({tags}){
    const [videos,setVideos]=useState([]);
    useEffect(()=>{
        const fetchVideoByTag=async()=>{
            try{
                const url=process.env.NODE_ENV==="production"?"https://youtube-clone-api224.onrender.com/api":"";
                const videoRes=await axios.get(`${url}/videos/tags?tags=${tags}`,{withCredentials: true})
                setVideos(videoRes.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchVideoByTag();
    },[tags])
    return (
        <div id="suggestions">
        {videos?.map(video=>(
            <Suggestion video={video} />
        ))}
        
        </div>
    )
}

export default Suggestions;
