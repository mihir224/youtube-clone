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
        setUploadOpen(state){
            state.uploadOpen=!state.uploadOpen;
        }
    }
})

export const {setOpen,setUploadOpen} = navbarSlice.actions;

export default navbarSlice.reducer;
