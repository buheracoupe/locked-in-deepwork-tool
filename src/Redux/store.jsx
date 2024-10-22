import { configureStore } from "@reduxjs/toolkit";
import currentSplitReducer from "./slices/currentSplitSlice"
import settingsReducer from "./slices/settingsSlice"

export const store = configureStore({
    reducer: {
        currentSplitSlice: currentSplitReducer,
        settings: settingsReducer,
    }
})