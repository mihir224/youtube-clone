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
        },
        // subscribe:(state,action)=>{
        //     if(!state.currentUser.subscribedUsers.includes(action.payload)){
        //         state.currentUser.subscribedUsers.push(action.payload)
                
        //     }
        // },
        // unsubscribe:(state,action)=>{
        //     if(state.currentUser.subscribedUsers.includes(action.payload)){
        //         state.currentUser.subscribedUsers.splice(state.currentUser.subscribedUsers.findIndex(userId=>userId===action.payload),1)
               
        //     }
        // }
        subscribe:(state,action)=>{
            if(state.currentUser.subscribedUsers.includes(action.payload)){
                state.currentUser.subscribedUsers.splice(state.currentUser.subscribedUsers.findIndex(channelId=>channelId===action.payload),1);
            }
            else if(!state.currentUser.subscribedUsers.includes(action.payload)){
                state.currentUser.subscribedUsers.push(action.payload);
            }
        }
    }
})

export const {loginStart,loginSuccess,loginFailure,logout,subscribe,unsubscribe} = userSlice.actions;

export default userSlice.reducer;

