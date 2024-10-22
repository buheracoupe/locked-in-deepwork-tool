import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    settingsShowing: false,
}

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
    toggleSettings: (state, action) => {
        state.settingsShowing = action.payload
    }
    },
})

export const { toggleSettings } = settingsSlice.actions;
export default settingsSlice.reducer;