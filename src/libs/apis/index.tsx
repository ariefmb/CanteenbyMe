'use server';
import axios from 'axios';
import { Session } from 'next-auth';
import getSession from '../auth/getSession';
import { TCreateOrder } from '../types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function retrieveAllCanteens() {
  try {
    const response = await axios.get(`${API_URL}/canteens`, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_KEY,
      },
    });

    if (response.status >= 400 && response.status <= 500) {
      throw new Error(`HTTP error! status: ${response.statusText}`);
    }

    return response.data.data;
  } catch (error) {
    console.error('Error fetching canteens:', error);
    throw error;
  }
}

export async function retrieveDetailCanteenWithId(canteenId: string) {
  return await axios
    .get(`${API_URL}/canteens/menu/${canteenId}`, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_KEY,
      },
    })
    .then((response) => response.data.data)
    .catch((error) => {
      console.error('Error fetching canteens:', error);
    });
}

export async function createOrder(data: TCreateOrder) {
  try {
    const session = (await getSession()) as Session;
    const sessionToken: string = session?.sessionToken ?? '';
    const userId: string = session?.user.id ?? '';

    const response = await axios.post(
      `${API_URL}/orders/invoice`,
      {
        redirectUrl: data.redirectUrl,
        userId: userId,
        userName: data.userName,
        userEmail: data.userEmail,
        tableNumber: data.tableNumber,
        fees: data.fees,
        orderMenus: data.orderMenus,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': API_KEY,
          Authorization: `Bearer ${sessionToken}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}

export async function getHistoryOrderByUserId(
  userId: string | undefined,
  sessionToken: string
) {
  try {
    const response = await axios.get(`${API_URL}/orders/user/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_KEY,
        Authorization: `Bearer ${sessionToken}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}
