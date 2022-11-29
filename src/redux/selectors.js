import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilterValue = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);
