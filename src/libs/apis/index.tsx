import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export async function retrieveAllCanteens() {
//   try {
//     const response = await fetch(`${API_URL}/canteens`, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const result = await response.json();
//     return result.data;
//   } catch (error) {
//     console.error('Error fetching canteens:', error);
//     throw error;
//   }
// }

export async function retrieveAllCanteens() {
  try {
    const url = `${API_URL}/canteens`;
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 500) {
      throw new Error(`HTTP error! status: ${response.statusText}`);
    }

    return response.data.data;
  } catch (error) {
    console.error('Error fetching canteens:', error);
    throw error;
  }
}

export async function retrieveDetailCanteenWithId(canteenId: string) {
  try {
    const response = await fetch(`${API_URL}/canteens/menu/${canteenId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching canteens:', error);
    throw error;
  }
}
