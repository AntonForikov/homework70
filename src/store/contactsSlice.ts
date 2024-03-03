import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import {addNewContact, getContactsList} from './contactsThunk';
import {ContactsWithId} from '../types';

interface ContactsState {
  contactsList: ContactsWithId[],
  loading: boolean,

}

const initialState: ContactsState = {
  contactsList: [],
  loading: false,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(addNewContact.pending, (state) => {
        state.loading = true;
      }).addCase(addNewContact.fulfilled, (state) => {
        state.loading = false;
      }).addCase(addNewContact.rejected, (state) => {
        state.loading = false;
      });

      builder.addCase(getContactsList.pending, (state) => {
        state.loading = true;
      }).addCase(getContactsList.fulfilled, (state, {payload: contactList}) => {
        state.loading = false;
        state.contactsList = contactList;
      }).addCase(getContactsList.rejected, (state) => {
        state.loading = false;
      });
    }
});

export const contactsReducer = contactSlice.reducer;
export const selectContactsList = (state: RootState) => state.contacts.contactsList;
export const selectLoading = (state: RootState) => state.contacts.loading;