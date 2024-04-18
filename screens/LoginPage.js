
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/AuthContext';
import SignupBottomSheet from '../components/SignupBottomSheet';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuthenticated, isSignupVisible, setSignupVisible } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await fetch('https://api-hdzvzie4ya-uc.a.run.app/api/login/driver', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Login successful:', data);
        await AsyncStorage.setItem('userToken', data.token);
        setIsAuthenticated(true);
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <View className="flex-1 items-center justify-center p-5 mt-7.5">
      <Image
        source={require('../assets/image/Unknown-6.jpeg')}
        className="h-20 w-20"
      />
      <TextInput
        className="w-full border border-gray-300 p-2.5 my-2.5"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        className="w-full border border-gray-300 p-2.5 my-2.5"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={() => setSignupVisible(true)} />
      {isSignupVisible && (
        <SignupBottomSheet
          visible={isSignupVisible}
          onClose={() => setSignupVisible(false)}
        />
      )}
    </View>
  );
};

export default LoginPage;
