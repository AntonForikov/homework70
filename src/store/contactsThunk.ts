import {createAsyncThunk} from '@reduxjs/toolkit';

export const getContactsList = createAsyncThunk (
  'contacts/list',
  async () => {
    console.log('getContactsList thunk')
  }
)