import { createSlice } from "@reduxjs/toolkit";

export const flipSlice = createSlice({
    name: "flip",
    initialState: { isLit: true },
    reducers: {
        flip: (state) => {
            state.isLit = !state.isLit;
        }
    }
});

export const { flip } = flipSlice.actions;

export default flipSlice.reducer;