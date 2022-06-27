 import { createSlice } from "@reduxjs/toolkit"
const initialState={
    filter_name:"All Items"
}


const filterSlice= createSlice({
    name:"filter",
    initialState,
    reducers:{
        changeFilter:(state,action)=>{
            state.filter_name=action.payload.filter_name
        }
    }
})


export const {changeFilter}= filterSlice.actions
export default filterSlice.reducer;