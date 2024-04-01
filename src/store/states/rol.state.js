import { createSlice } from "@reduxjs/toolkit";

const rolSlice =createSlice({
    name:'rol',
    initialState:'user',
    reducers:{
        setRolG:(state,action)=>action.payload
    }
})

export const {setRolG} = rolSlice.actions
export default rolSlice.reducer


