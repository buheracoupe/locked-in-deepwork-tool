import { configureStore } from "@reduxjs/toolkit";
import currentSplitReducer from "./slices/currentSplitSlice"

export const store = configureStore({
    reducer: {
        currentSplitSlice: currentSplitReducer
    }
})