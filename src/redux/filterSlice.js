import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContactsAction: (state, action) => action.payload,
  },
});

export const { filterContactsAction } = filterSlice.actions;
