import { createSlice } from "@reduxjs/toolkit";

const currentSplitSlice = createSlice({
    name: "currentSplit",
    initialState:{
        value: "focus"
    },
    reducers: {
        changeSplit(state, action){
            state.value = action.payload
        }
    }

})

export const { changeSplit } = currentSplitSlice.actions
export default currentSplitSlice.reducer