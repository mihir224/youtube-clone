import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:'video',
    initialState:{
        currentVideo:null,
        isLoading:false,
        serverErr:null
    },
    reducers:{
        fetchStart:(state)=>{
            state.isLoading=true;
        },
        fetchSuccess:(state,action)=>{
            state.isLoading=false
            state.currentVideo=action.payload
        },
        fetchError:(state,action)=>{
            state.isLoading=false
            state.serverErr=action.payload
        },
        //we use like and dislike actions to immediately update the like/dislike icon as soon as the user clicks on it instead of him having to see it only after reloading the page
        like:(state,action)=>{
            if(!state.currentVideo.likes.includes(action.payload)){
                state.currentVideo.likes.push(action.payload);
                state.currentVideo.dislikes.splice(state.currentVideo.dislikes.findIndex(userId=>userId===action.payload),1); //to remove the user from dislikes array if he previously disliked the video
            }
        },
        dislike:(state,action)=>{
            if(!state.currentVideo.dislikes.includes(action.payload)){
                state.currentVideo.dislikes.push(action.payload);
                state.currentVideo.likes.splice(state.currentVideo.likes.findIndex(userId=>userId===action.payload),1); //to remove the user from likes array if he previously liked the video
            }
        }
    }
})

export const {fetchStart,fetchSuccess,fetchError,like,dislike}=videoSlice.actions;

export default videoSlice.reducer;