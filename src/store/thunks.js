import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://6620e6133bf790e070b11d38.mockapi.io';

export const getAdvertsThunk = createAsyncThunk(
  'campers/getAdverts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/Advert');
      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const filterForAdvertsThunk = createAsyncThunk(
  'campers/getAdverts',
  async (date, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams();
      params.append('sortBy', 'title');
      params.append('order', 'desc');

      const response = await axios.get('/Advert', date, {
        params: params,
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('filterForAdvertsThunk', response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
