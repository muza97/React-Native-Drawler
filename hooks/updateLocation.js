import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

export const updateLocation = async (latitude, longitude) => {
  try {

    const userToken = await AsyncStorage.getItem('userToken');

    const response = await axios.post('http://localhost:3000/driver/update-location', {
      latitude,
      longitude,
    }, {
      headers: {
        Authorization: `Bearer ${userToken}`, 
      },
    });
    
    console.log('Location updated successfully:', response.data);
    return response.data; 
  } catch (error) {
    console.error('Error updating location:', error);
    throw error; 
  }
};
