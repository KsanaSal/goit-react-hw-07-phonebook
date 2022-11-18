import { createSlice } from '@reduxjs/toolkit';

const filter = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: filter,
  reducers: {
    setFilter: {
      reducer(_, action) {
        return action.payload;
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
