import React, {useEffect,useState} from "react";
import axios from "axios";
import Comment from "./Comment";
import "../styles/Video.css";
import { useSelector } from "react-redux";

function Comments({videoId}){
    const[comments,setComments]=useState([])
    const isLoading=useSelector(state=>state.video.isLoading);
    useEffect(()=>{
        const fetchComment=async()=>{
            try{
            const fetchedComments=await axios.get(`/comments/${videoId}`)
            setComments(fetchedComments.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchComment();
    },[videoId])

    return isLoading?<h3>Loading Comments...</h3>:(
        <div>
        {comments?.map((comment)=>(
            <Comment key={comment._id} id={comment._id} comment={comment}/>
        ))}
        </div>
    )
}

export default Comments;