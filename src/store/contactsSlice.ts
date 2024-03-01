import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store';

interface ContactsState {
  contactsList: [],
  loading: boolean
}

const initialState: ContactsState = {
  contactsList: [],
  loading: false
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {

  }
})

export const contactsReducer = contactSlice.reducer;
export const selectContactsList = (state: RootState) => state.contacts.contactsList;
export const selectLoading = (state: RootState) => state.contacts.loading;