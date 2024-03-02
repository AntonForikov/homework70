import {createAction, createAsyncThunk} from '@reduxjs/toolkit';

export const changeInputField = createAction(
  'contact/changeField',
  (value: string) => {
    return {payload: value};
  });

export const getContactsList = createAsyncThunk (
  'contacts/list',
  async (id: string) => {
    console.log('getContactsList thunk with id:', id);
  }
);