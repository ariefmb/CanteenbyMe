import axios, { AxiosError } from 'axios';
import getSession from '../auth/getSession';
import { Session } from 'next-auth';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'api-key': process.env.NEXT_PUBLIC_API_KEY,
  },
  timeout: 20000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const session: Session | null = await getSession();
    const sessionToken: string | undefined = session?.sessionToken;

    if (sessionToken) {
      if (config.headers)
        config.headers.Authorization = `Bearer ${sessionToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500
    ) {
      throw new Error('Terjadi Kesalahan pada server, mohon hubungi developer');
    } else {
      console.error('Response error:', error);
      return Promise.reject(error);
    }
  }
);
export default axiosInstance;
