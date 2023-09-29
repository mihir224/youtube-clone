import React,{useState,useEffect} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import Card from './Card';


function Search(){
    const[videos,setVideos] =useState([]);
    const query=useLocation().search;
    useEffect(()=>{
        (async ()=>{
            try{
                const url=process.env.NODE_ENV==="production"?"https://youtube-clone-api224.onrender.com/api":"";
                const res=await axios.get(`${url}/videos/search${query}`,{withCredentials: true});
                setVideos(res.data);
            }
            catch(err){
                console.log(err);
            }
        })();
    });
    return(
        <div>
            {videos?.map((video) => {
                return <Card key={video._id} video={video} />;
            })}
        </div>
    )
}

export default Search;