import React from 'react';
import '../styles/Upload.css';
import CloseIcon from '@mui/icons-material/Close';
import VideoCallIcon from '@mui/icons-material/VideoCallOutlined';
import ImageIcon from '@mui/icons-material/Image';
import { useDispatch, useSelector } from "react-redux";



function Upload({setUploadOpen}){
    const dispatch=useDispatch();
    return (
        <div id='upload'>
            <div>
                <h4 style={{fontSize:'28px',verticalAlign:'bottom'}}>Upload a new video </h4>
                <div onClick={()=>dispatch(setUploadOpen())} ><CloseIcon className='close-icon'/></div>
            </div>
            <div className='upload-div'>
            <label className='file-label' htmlFor='uploaded-video'><span id='upload-text'>Choose Video</span> <VideoCallIcon className='upload-icon'/></label>
            <input id='uploaded-video' className='file-input' type='file' accept='video/*' />
            </div>
            <div>
            <label className='text-label' htmlFor='vid-title'>Title:</label>
            <input id='vid-title' type='text' className='input-text' placeholder='Video Title'/>
            </div>
            <div>
            <label className='text-label' htmlFor='uploaded-desc'>Description:</label>
            <input id='uploaded-desc' className='input-text' type='text' placeholder='Video Description'/>
            </div>
            <div className='upload-div'>
            <label className='file-label' htmlFor='uploaded-thumbnail'><span id='upload-text'>Pick Thumbnail</span> <ImageIcon/></label>
            <input id='uploaded-thumbnail' className='file-input' type='file' accept='image'/>
            </div>
            <button id="upload-btn" type="submit"> <span>Upload</span></button>
        </div>
    )
}

export default Upload;