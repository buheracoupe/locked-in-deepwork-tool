import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    timerRunning: false,
    timerSwitch: "off"
}

const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        toggleTimer(state, action){
            state.timerRunning = action.payload;
        },
        toggleSwitch(state, action){
            state.timerSwitch = action.payload;
        }
    }

})

export const {toggleTimer, toggleSwitch} =timerSlice.actions
export default timerSlice.reducer;