import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "colorMode",
    initialState: { darkMode: false },
    reducers: {
        changeMode: (state = {}, action) => {
            // return !state.colorMode.darkMode;
            // return action.payload;
            state.darkMode = action.payload;
        },
    },
});

export const { changeMode } = cartSlice.actions;

export default cartSlice.reducer;