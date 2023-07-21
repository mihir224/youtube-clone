import {createSlice} from "@reduxjs/toolkit";

const navbarSlice=createSlice({
    name: 'navbar',
    initialState:{
        open:true
    },
    reducers:{
        setOpen(state){
            state.open=!state.open;
        }
    }
})

export const {setOpen} = navbarSlice.actions;

export default navbarSlice.reducer;
