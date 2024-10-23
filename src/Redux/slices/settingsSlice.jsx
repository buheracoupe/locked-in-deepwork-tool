import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    settingsShowing: false,
    focusMinutes: 60,
    restMinutes: 15,
}

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
    toggleSettings: (state, action) => {
        state.settingsShowing = action.payload
    },
    setTime: (state, action) => {
        state.focusMinutes = parseInt(action.payload.focusTime)
        state.restMinutes = parseInt(action.payload.restTime)
    }
    },
})

export const { toggleSettings, setTime } = settingsSlice.actions;
export default settingsSlice.reducer;