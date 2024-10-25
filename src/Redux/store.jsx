import { configureStore } from "@reduxjs/toolkit";
import currentSplitReducer from "./slices/currentSplitSlice"
import settingsReducer from "./slices/settingsSlice"
import timerReducer from "./slices/timerSlice"
import simplePageReducer from "./slices/simplePageSlice"

export const store = configureStore({
    reducer: {
        currentSplitSlice: currentSplitReducer,
        settings: settingsReducer,
        timer: timerReducer,
        simplePage: simplePageReducer,
    }
})