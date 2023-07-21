import React from "react";
import Card from "./Card";
import axios from "axios";
import { Oval } from 'react-loader-spinner';
import {useSelector} from 'react-redux';

function Home(props){
    const [videos,setVideos]=React.useState([]);
    const [isLoading,setIsLoading]=React.useState(false);
    const showNav=useSelector(state=>state.navbar.open);
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
    return (
        <div id="cards">
            {isLoading ? (
            <div style={{paddingTop:`${showNav?"":"170px"}`}}>
                <Oval
                height={80}
                width={80}
                color="white"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="grey"
                strokeWidth={2}
                strokeWidthSecondary={2}
                />
            </div>
            ) : (
            videos?.map((video) => {
                return <Card key={video._id} video={video} />;
            })
            )}
        </div>
    )

}

export default Home;