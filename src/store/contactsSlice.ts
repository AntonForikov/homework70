import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import {ContactToSend} from '../types';
import {changeInputField} from './contactsThunk';

interface ContactsState {
  contactsList: [],
  loading: boolean,
  userInputs: ContactToSend
  username: string
}

const initialState: ContactsState = {
  contactsList: [],
  loading: false,
  userInputs: {
    name: '',
    phone: '',
    email: '',
    photo: ''
  },
  username: ''
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(changeInputField, (state, action) => {
        state.userInputs.name = action.payload;
        console.log(state.userInputs);
      });
    }
});

export const contactsReducer = contactSlice.reducer;
// export const {changeInputField} = contactSlice.actions;
export const selectContactsList = (state: RootState) => state.contacts.contactsList;
export const selectLoading = (state: RootState) => state.contacts.loading;
export const selectUserInputs = (state: RootState) => state.contacts.userInputs;