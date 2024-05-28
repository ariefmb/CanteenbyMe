'use server';
import axios from 'axios';

const API_URL = process.env.API_URL || '';
export const fetchCanteen = async () => {
  return await axios.get(`${API_URL}/canteens`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
