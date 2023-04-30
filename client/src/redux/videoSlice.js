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
        }
    }
})

export const {fetchStart,fetchSuccess,fetchError}=videoSlice.actions;

export default videoSlice.reducer;