import React from 'react';
import "../styles/Upload.css";
import CancelIcon from '@mui/icons-material/Cancel';


function Upload({setUploadOpen}){
    return (
        <div id='upload'>
            <h4>Upload a video</h4>
            <input id="uploaded-video" type="file" accept="video/*" />
            <div>
            <label htmlFor="vid-title">Title</label>
            <input id="vid-title" type="text" placeholder="Video Title"/>
            </div>
            <div>
            <label htmlFor="uploaded-desc">Description</label>
            <input id="uploaded-desc" type="text" placeholder="Video Description"/>
            </div>
            <input id="uploaded-thumbnail" type="file" accept="image"/>
        </div>
    )
}

export default Upload;