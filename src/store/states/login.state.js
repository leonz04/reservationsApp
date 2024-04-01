import { createSlice } from "@reduxjs/toolkit";

const loginSlice =createSlice({
    name:'login',
    initialState:false,
    reducers:{
        setLoginG:(state,action)=>action.payload
    }
})

export const {setLoginG} = loginSlice.actions
export default loginSlice.reducer


