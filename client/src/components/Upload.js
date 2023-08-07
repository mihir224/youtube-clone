import React,{useState,useEffect} from 'react';
import '../styles/Upload.css';
import CloseIcon from '@mui/icons-material/Close';
import VideoCallIcon from '@mui/icons-material/VideoCallOutlined';
import ImageIcon from '@mui/icons-material/Image';
import { useDispatch, useSelector } from "react-redux";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase';
import axios from 'axios';
import {Navigate} from "react-router-dom";


function Upload({setUploadOpen}){
    const dispatch=useDispatch();
    const [img,setImg]=useState(undefined);
    const [video,setVideo]=useState(undefined);
    const [imgPerc,setImgPerc]=useState(0);
    const [videoPerc,setVideoPerc]=useState(0);
    const [input,setInput]=useState({});
    const [tags,setTags]=useState([])

    const uploadFile=(file,type)=>{
        const storage = getStorage(app);
        const filename=new Date().getTime() + file.name;
        const storageRef = ref(storage, filename);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed',
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            console.log('Upload is ' + progress + '% done');
            type==='imgUrl'?setImgPerc(progress):setVideoPerc(progress);
            switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
            default:
                break;
            }
        }, 
        (error) => {},
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setInput(prev=>{
                return {
                    ...prev,
                    [type]:downloadURL
                }
            })
            });
        }
        );
    }
    useEffect(()=>{
        img && uploadFile(img,"imgUrl");
    },[img]);

    useEffect(()=>{
        video && uploadFile(video,"videoUrl");
    },[video]);

    const handleChange=(e)=>{
        setInput(prev=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }
    const handleTags=(e)=>{
        setTags(e.target.value.split(","));
    }

    const handleUpload=async(e)=>{
        e.preventDefault();
        const res=await axios.post('/videos/add',{...input,tags});
        dispatch(setUploadOpen(false));
        if (res.status === 200) {
        return <Navigate to={`/video/${res.data._id}`} replace={true} />;
        }
    }

    return (
        <div id='upload'>
            <div>
                <h4 style={{fontSize:'28px',verticalAlign:'bottom'}}>Upload a new video </h4>
                <div onClick={()=>dispatch(setUploadOpen())} ><CloseIcon className='close-icon'/></div>
            </div>
            <div className='upload-div'>
            <label className='file-label' htmlFor='uploaded-video'><span id='upload-text'>Choose Video</span> <VideoCallIcon className='upload-icon'/></label>
            {videoPerc>0?<span style={{fontSize:'14px'}}>Uploading {videoPerc}%</span>:<input id='uploaded-video' className='file-input' type='file' accept='video/*' onChange={e=>setVideo(e.target.files[0])} />}
            </div>
            <div>
            <label className='text-label' htmlFor='vid-title'>Title:</label>
            <input id='vid-title' type='text' className='input-text' name='title' onChange={handleChange} placeholder='Video Title' required={true}/>
            </div>
            <div>
            <label className='text-label' htmlFor='uploaded-desc'>Description:</label>
            <input id='uploaded-desc' className='input-text' type='text' name='desc' onChange={handleChange} placeholder='Video Description' required={true}/>
            </div>
            <div>
            <label className='text-label' htmlFor='uploaded-tags'>Tags:</label>
            <input id='uploaded-tags' className='input-text' type='text' name='tags' onChange={handleTags} placeholder='Tags (use comma in between)'/>
            </div>
            <div className='upload-div'>
            <label className='file-label' htmlFor='uploaded-thumbnail'><span id='upload-text'>Pick Thumbnail</span> <ImageIcon/></label>
            {imgPerc>0?<span style={{fontSize:'14px'}}>Uploading {imgPerc}%</span>:<input id='uploaded-thumbnail' className='file-input' type='file' accept='image' onChange={e=>setImg(e.target.files[0])}/>}
            </div>
            <button id="upload-btn" type="submit" onClick={handleUpload}> <span>Upload</span></button>
        </div>
    )
}

export default Upload;