import axios from "axios";
import React, { useEffect, useState } from "react";
import Suggestion from "./Suggestion";
import "../styles/Video.css";

function Suggestions({tags}){
    const [videos,setVideos]=useState([]);
    useEffect(()=>{
        const fetchVideoByTag=async()=>{
            try{
                const videoRes=await axios.get(`/videos/tags?tags=${tags[0]}`)
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
