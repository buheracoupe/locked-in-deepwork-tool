import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    settingsShowing: false,
}

const settingsSlice = createSlice({
    name: "settings",
    reducers: {
    toggleSettings: (state, action) => {
        state.settingsShowing = !state.settingsShowing;
    }
    },
})