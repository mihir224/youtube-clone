import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:'video',
    initialState:{
        currentUser:null,
        isLoading:false,
        serverErr:null
    },
    reducers:{
        videoStart:(state)=>{
            state.isLoading=true;
        }
    }
})

export const {videoStart}=videoSlice.actions;

export default videoSlice.reducer;