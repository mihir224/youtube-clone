import {createSlice} from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:{
        currentUser:null,
        isLoading:false,
        serverErr:null
    },
    reducers:{
        loginStart:(state)=>{
            state.isLoading=true;
        },
        loginSuccess:(state,action)=>{
            state.isLoading=false;
            state.currentUser=action.payload;
        },
        loginFailure:(state,action)=>{
            state.isLoading=false;
            state.serverErr=action.payload;
        },
        logout:(state)=>{
            state.currentUser=null;
            state.isLoading=false;
            state.serverErr=null;
        }
    }
})

export const {loginStart,loginSuccess,loginFailure,logout} = userSlice.actions;

export default userSlice.reducer;

