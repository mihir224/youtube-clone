import {createSlice} from "@reduxjs/toolkit";

const navbarSlice=createSlice({
    name: 'navbar',
    initialState:{
        open:true,
        uploadOpen:false
    },
    reducers:{
        setOpen(state){
            state.open=!state.open;
        },
        setUploadOpen(state,action){
            state.uploadOpen=action.payload;
        }
    }
})

export const {setOpen,setUploadOpen} = navbarSlice.actions;

export default navbarSlice.reducer;
