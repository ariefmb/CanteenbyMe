'use server';
import { Session } from 'next-auth';
import getSession from '../auth/getSession';
import {
  TCanteens,
  TCreateOrder,
  THistoryOrders,
  TInvoice,
  TMenus,
} from '../types';
import axiosInstance from '../utils/axios';

export async function retrieveAllCanteens(): Promise<TCanteens[]> {
  try {
    const response = await axiosInstance.get(`/canteens`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching canteens:', error);
    throw error;
  }
}

export async function retrieveDetailCanteenWithId(
  canteenId: string
): Promise<TMenus[]> {
  try {
    const response = await axiosInstance.get(`/canteens/menu/${canteenId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching canteens:', error);
    throw error;
  }
}

export async function createOrder(data: TCreateOrder): Promise<TInvoice> {
  try {
    const session = (await getSession()) as Session;
    const userId: string = session?.user.id ?? '';

    const response = await axiosInstance.post(`/orders/invoice`, {
      redirectUrl: data.redirectUrl,
      userId: userId,
      userName: data.userName,
      userEmail: data.userEmail,
      tableNumber: data.tableNumber,
      fees: data.fees,
      orderMenus: data.orderMenus,
    });
    return response.data.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}

export async function getHistoryOrderByUserId(): Promise<THistoryOrders[]> {
  try {
    const session = (await getSession()) as Session;
    const userId: string = session?.user.id ?? '';

    const response = await axiosInstance.get(`/orders/user/${userId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}
