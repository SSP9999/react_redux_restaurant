import { createSlice } from "@reduxjs/toolkit";

 
const initialState={
    order_value:[]
};

const orderSlice = createSlice({
    name:"order",
    initialState,
    reducers:{
        bookOrder:(state,action)=>{
           
            state.order_value.push(
                 {...action.payload.order_value}
            )
        }
    }
})

export const {bookOrder}= orderSlice.actions;

export default orderSlice.reducer