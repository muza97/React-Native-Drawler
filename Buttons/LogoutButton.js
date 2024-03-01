//buttons/Logoutbutton.js
import React from 'react';
import { Button, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogoutButton = ({ onLogout }) => {
  const handleLogout = async () => {
    try {

      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('driverId');
    } catch (error) {
      console.error('Network or server error:', error);
    } finally {
      
      if (onLogout) {
        onLogout();
      }
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default LogoutButton;
