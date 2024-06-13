'use server';
import { MenuItem } from '@/context/cart.context';
import axios from 'axios';
import { Session } from 'next-auth';
import getSession from '../auth/getSession';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function retrieveAllCanteens() {
  try {
    // * coba get session token, kalo udh hapus aja
    const session = (await getSession()) as Session;
    console.log('🚀 ~ retrieveAllCanteens ~ session:', session.sessionToken);
    const apiKey = process.env.API_KEY ?? '';

    const response = await axios.get(`${API_URL}/canteens`, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
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

// export async function retrieveDetailCanteenWithId(canteenId: string) {
//   try {
//     const response = await axios.get(`${API_URL}/canteens/menu/${canteenId}`, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.status >= 400 && response.status <= 500) {
//       throw new Error(`HTTP error! status: ${response.statusText}`);
//     }

//     console.log(`result: ${response.data}`);

//     return response.data.data;
//   } catch (error) {
//     console.error('Error fetching canteens:', error);
//     throw error;
//   }
// }

export async function retrieveDetailCanteenWithId(canteenId: string) {
  return await axios
    .get(`${API_URL}/canteens/menu/${canteenId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data.data)
    .catch((error) => {
      console.error('Error fetching canteens:', error);
    });
}

//* Create invoice with xendit api
export const createInvoice = async (
  items?: MenuItem[],
  amount?: number,
  userName?: string,
  userEmail?: string
): Promise<string | null> => {
  try {
    var username: string = process.env.XENDIT_SECRET_KEY ?? '';
    var password: string = '';

    const token = `${username}:${password}`;
    const encodedToken = Buffer.from(token).toString('base64');
    const xendit_url = 'https://api.xendit.co/v2/invoices';

    const xenditResponse = await axios.post(
      xendit_url,
      {
        external_id: 'test-invoice-success-{{$timestamp}}',
        amount: 25000,
        description: 'Invoice Demo #123',
        invoice_duration: 12000,
        customer: {
          given_names: 'Agung dwi kurniyanto',
          email: 'agungdwikurniyanto02@gmail.com',
        },
        customer_notification_preference: {
          invoice_paid: ['email', 'viber'],
        },
        success_redirect_url: 'http://localhost:3001/verified',
        failure_redirect_url: 'https://www',
        currency: 'IDR',
        items: [
          {
            name: 'Mie ayam',
            quantity: 3,
            price: 15000,
            category: 'Food',
          },
          {
            name: 'Mie Goreng',
            quantity: 1,
            price: 10000,
            category: 'Food',
          },
        ],
        fees: [
          {
            type: 'ADMIN',
            value: 500,
          },
        ],
      },
      {
        headers: {
          Authorization: `Basic ${encodedToken}`,
        },
      }
    );

    const invoiceUrl = xenditResponse.data.invoice_url;
    console.log('🚀 ~ invoiceUrl:', invoiceUrl);
    return invoiceUrl;
  } catch (error) {
    console.log('🚀 ~ error:', error);
    return null;
  }
};
