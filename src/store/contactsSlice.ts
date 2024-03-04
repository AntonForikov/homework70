import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import {addNewContact, getContactsById, getContactsList} from './contactsThunk';
import {ContactWithId} from '../types';

interface ContactsState {
  contactsList: ContactWithId[],
  currentContact: ContactWithId | null,
  loading: boolean,

}

const initialState: ContactsState = {
  contactsList: [],
  currentContact: null,
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

      builder.addCase(getContactsById.pending, (state) => {
        state.loading = true;
      }).addCase(getContactsById.fulfilled, (state, {payload: contact}) => {
        state.loading = false;
        state.currentContact = contact;
      }).addCase(getContactsById.rejected, (state) => {
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

      // builder.addCase(updateContact.fulfilled, () => {})
    }
});

export const contactsReducer = contactSlice.reducer;
export const selectContactsList = (state: RootState) => state.contacts.contactsList;
export const selectCurrentContact = (state: RootState) => state.contacts.currentContact;
export const selectLoading = (state: RootState) => state.contacts.loading;