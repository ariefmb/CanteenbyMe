import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function retrieveAllCanteens() {
  try {
    const response = await axios.get(`${API_URL}/canteens`, {
      headers: {
        'Content-Type': 'application/json',
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
  try {
    console.log(`id: ${canteenId}`);
    
    const response = await axios.get(`${API_URL}/canteens/menu/${canteenId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status >= 400 && response.status <= 500) {
      throw new Error(`HTTP error! status: ${response.statusText}`);
    }

    
    console.log(JSON.stringify(
      response.data.data
    ));

    

    return response.data.data;
  } catch (error) {
    console.error('Error fetching canteens:', error);
    throw error;
  }
}
