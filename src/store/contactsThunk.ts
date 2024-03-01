import {createAsyncThunk} from '@reduxjs/toolkit';

export const getContactsList = createAsyncThunk (
  'contacts/list',
  async (id: string) => {
    console.log('getContactsList thunk with id:', id)
  }
)