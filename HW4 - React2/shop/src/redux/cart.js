import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { items: [] };

export const cartSlice = createSlice({
    name: "cart",
    initialState: { initialStateValue },
    reducers: {
        add_item: (state, action) => {
            state.items.push(action.payload);
        },

        remove_item: (state, action) => {
            let index = state.items.indexOf(action.payload);
            if (index > -1) {
                state.items.splice(index, 1);
            }
        },
    },
});

export const { add_item, remove_item } = cartSlice.actions;

export default cartSlice.reducer;