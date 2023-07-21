import React,{useState,useEffect} from "react";
import axios from "axios";
import { format } from "timeago.js";
import "../styles/Video.css";
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function Suggestion({video}){
    const [channel,setChannel]=useState({});
    const showNav=useSelector(state=>state.navbar.open);
    useEffect(()=>{
        const fetchUser=async()=>{
            try{
                const url=process.env.NODE_ENV==="production"?"https://youtube-clone-api224.onrender.com/api":"";
                const user=await axios.get(`${url}/users/find/${video?.userId}`,{withCredentials: true})
                setChannel(user.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchUser();
    },[])
    return video?(
    <div 
        className="suggestion"
        style={{ 
            padding:`${showNav==true?"6px 20px":"6px 0"}`,
            maxWidth:'370px'
            }}
    >
    <Link 
    to={`/video/${video?._id}`} 
    replace={true}
    style={{
            display: 'flex',
            color:'#ffffffee',
            fontSize: '12px',
            gap:'2px',
            textDecoration:'none',
            fontFamily:'inherit'
    }}
    >
            <div id="thumbnail">
                <img src={video.imgUrl} style={{objectFit:"cover"}} height="96" width="172"></img>
            </div> 
            <div id="s-txt">
                <h3>{video.title}</h3>
                <p>{channel?.name}</p>
                <p>{video.views} views • {format(video.createdAt)}</p>
            </div>
    </Link>
    </div>
    ):<div>Loading</div>
}

export default Suggestion;