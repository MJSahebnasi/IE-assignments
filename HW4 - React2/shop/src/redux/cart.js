import { createSlice } from "@reduxjs/toolkit";

// do NOT use initial state like this: (extra wrapper)
// const initialStateValue = { items: [] };

export const cartSlice = createSlice({
    name: "cart",
    initialState: { items: [] },
    reducers: {
        add_item: (state = {}, action) => {
            state.items.push(action.payload);
        },

        remove_item: (state = {}, action) => {
            const index = action.payload;
            if (index > -1) {
                state.items.splice(index, 1);
            }
        },
    },
});

export const { add_item, remove_item } = cartSlice.actions;

export default cartSlice.reducer;