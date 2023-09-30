import React,{useState,useEffect} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import Card from './Card';
import { Oval } from 'react-loader-spinner';
import {useSelector} from "react-redux";

function Search(){
    const showNav=useSelector(state=>state.navbar.open);
    const[videos,setVideos] =useState([]);
    const [isLoading,setLoading]=useState(false);
    const [found,setFound]=useState(false);
    const query=useLocation().search;
    useEffect(()=>{
        setLoading(true);
        (async ()=>{
            try{
                const url=process.env.NODE_ENV==="production"?"https://youtube-clone-api224.onrender.com/api":"";
                const res=await axios.get(`${url}/videos/search${query}`,{withCredentials: true});
                if(res.data.length===0){
                    setFound(false);
                }
                else{
                    setVideos(res.data);
                    setFound(true);
                }
                setLoading(false);
            }
            catch(err){
                console.log(err);
            }
        })();
    },[query]);
    return (
        <div id='cards' style={{display:'flex',alignItems:'flex-start', justifyContent:'center'}}>
        {
            isLoading?(
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
            ):
            (found?(videos?.map((video) => {
                return <Card key={video._id} video={video} />
            })):
            (<h2 style={{textAlign:'center',color:'white',fontFamily:'inherit'}}>Sorry! Couldn't find any matching results.</h2>)
            )
        }
        </div>
    )
}

export default Search;