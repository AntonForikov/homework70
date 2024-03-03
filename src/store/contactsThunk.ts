import {createAsyncThunk} from '@reduxjs/toolkit';
import {ContactsFromApi, ContactToSend, ContactWithId} from '../types';
import axiosApi from '../axiosApi';

export const addNewContact = createAsyncThunk<void, ContactToSend> (
  'contacts/add',
  async (contact) => {
    await axiosApi.post('/contacts.json', contact);
  }
);

export const getContactsList = createAsyncThunk (
  'contacts/list',
  async () => {
    const {data} = await axiosApi.get<ContactsFromApi | null>('/contacts.json');
    if (data) {
      return Object.keys(data).map(id => ({
        id: id,
        ...data[id],
      }));
    } else {
      return [];
    }
  }
);

export const updateContact = createAsyncThunk<void, ContactWithId> (
  'contacts/update',
  async (contact) => {
    const contactToSend: ContactToSend = {
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      photo: contact.photo
    }
    await axiosApi.put(`/contacts/${contact.id}.json`, contactToSend)
  }
)