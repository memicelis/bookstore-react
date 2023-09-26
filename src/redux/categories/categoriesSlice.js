import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories:[],
};

const categoriesSlice = createSlice({
    name:'categories',
    initialState,
    reducers: {
        setCategories: (state,action) =>{
            state.categories=['Under construction'];
        },
    },
});

export const {setCategories} = categoriesSlice.actions
export default categoriesSlice.reducer;