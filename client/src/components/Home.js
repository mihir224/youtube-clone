import React from "react";
import Card from "./Card";
import axios from "axios";

function Home(props){
    const [videos,setVideos]=React.useState([]);
    React.useEffect(()=>{
        const fetchVideos=async()=>{
            const res= await axios.get(`/videos/${props.type}`);
            setVideos(res.data);
        }
        fetchVideos();
    },[props.type])
    console.log(videos)
    return(
        <div id="cards">
        {videos.map((video)=>{
            return <Card key={video._id} video={video}/>
        })}
            
        </div>

    )

}

export default Home;