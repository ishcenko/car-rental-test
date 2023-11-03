import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorit: [],
};

export const favoritSlise = createSlice({
  name: 'favorit',
  initialState,
  reducers: {
    addFavorit: (state, action) => {
      state.favorit.push(action.payload);
    },
    removeFavorit: (state, action) => {
      const updateFavorit = state.favorit.filter(
        item => item.id !== action.payload.id
      );
      state.favorit = updateFavorit;
    },
  },
});
export const { addFavorit, removeFavorit } = favoritSlise.actions;
export default favoritSlise.reducer;
