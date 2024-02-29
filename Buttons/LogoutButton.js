//Buttons/LogoutButton.js
import React from 'react';
import { Button, View, AsyncStorage } from 'react-native';

const LogoutButton = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      const driverId = await AsyncStorage.getItem('driverId');
      let responseBody = null;

      if (driverId) {
        const response = await fetch('http://192.168.1.93:3001/api/logout-driver', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ driverId }),
        });
        responseBody = await response.json();

        if (response.status !== 200) {
          console.error('Logout failed:', responseBody.message);
        }
      }
    } catch (error) {
      console.error('Network or server error:', error);
    } finally {
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('driverId');

      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }], 
      });
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default LogoutButton;
