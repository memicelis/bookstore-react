import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getStatus: (state) => {
      if (state.categories.length === 0) {
        state.categories.push('Under construction');
      }
    },
  },
});

export const { getStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
