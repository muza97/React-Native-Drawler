import React from 'react';
import { View, Text, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogoutButton = ({ onLogout }) => {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('userId');
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
      <Pressable
        onPress={handleLogout}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#ef4444' : '#dc2626', 
            padding: 10,
            borderRadius: 5
          }
        ]}
        className="bg-red-500" 
      >
        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
          Logout
        </Text>
      </Pressable>
    </View>
  );
};

export default LogoutButton;
