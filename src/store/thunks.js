import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://6620e6133bf790e070b11d38.mockapi.io';

export const getAdvertsThunk = createAsyncThunk(
  'campers/getAdverts',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/Advert/?page=${page}&limit=${limit}`);
      console.log('getAdvertsThunk', response.data);

      return response.data;
    } catch (error) {
      console.error('Error fetching adverts:', error);
      return rejectWithValue(error.message);
    }
  }
);
