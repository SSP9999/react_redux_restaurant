import { createSlice } from "@reduxjs/toolkit"
const initialState={
    table_number:null
}



const tableSlice = createSlice({
    name:'tablenumber',
    initialState,
    reducers: {
        changeTable: (state,action) => {
            state.table_number = action.payload.table_number
        }
    }
})
export const {changeTable} = tableSlice.actions
export default tableSlice.reducer