import { createSlice } from "@reduxjs/toolkit";

const simplePageSlice = createSlice({
    name: "simplePage",
    initialState: {
        simplePage: false,
    },
    reducers: {
        changePage(state, action) {
            state.simplePage = action.payload;
        }
    }
})

export const { changePage } = simplePageSlice.actions;
export default simplePageSlice.reducer;