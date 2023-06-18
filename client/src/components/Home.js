import React from "react";
import Card from "./Card";
import axios from "axios";
import {useSelector} from "react-redux";

function Home(props){
    const [videos,setVideos]=React.useState([]);
    const [isLoading,setIsLoading]=React.useState(false);
    React.useEffect(()=>{
        setIsLoading(true);
        const fetchVideos=async()=>{
            const url=process.env.NODE_ENV==="production"?"https://youtube-clone-api224.onrender.com/api":"";
            const res= await axios.get(`${url}/videos/${props.type}`);
            setVideos(res.data);
            setIsLoading(false);
        }
        fetchVideos();
    },[props.type])
    console.log(videos)
    return isLoading?<h2 id='loading-txt'>Loading...</h2>:(
        <div id="cards">
            {videos.map((video)=>{
                return <Card key={video._id} video={video}/>
            })}
        </div>
    )

}

export default Home;