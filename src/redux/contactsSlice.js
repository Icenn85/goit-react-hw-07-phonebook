import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactAction: (state, action) => [...state, action.payload],

    deleteContactAction: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;

export const getContacts = state => state.contacts;
