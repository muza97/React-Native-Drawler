// components/SignupBottomSheet.js
import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet, Text, ActivityIndicator } from 'react-native';

const SignupBottomSheet = ({ visible, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 

  const validateForm = () => {
    if (!email || !password || !name || !phoneNumber) {
      setError('All fields are required');
      return false;
    }
    return true;
  };

  const handleSignup = async () => {
    if (!validateForm()) return;
  
    setIsLoading(true);
    setError('');
  
    try {
      const response = await fetch('https://api-hdzvzie4ya-uc.a.run.app/api/register/driver', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Adjusted field name to "phone_number"
        body: JSON.stringify({ name, email, password, phone_number: phoneNumber }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setSuccessMessage('Registration successful! Please log in.');
        setName('');
        setEmail('');
        setPassword('');
        setPhoneNumber('');
        setTimeout(() => {
          setSuccessMessage('');
          onClose(); // Close the bottom sheet after a short delay
        }, 2000); // 3-sec delay
      } else {
        console.error('Signup failed:', data.message);
        setError(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError('Network or server error');
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.container}>
        <View style={styles.sheet}>
          <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
          <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
          <TextInput style={styles.input} placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="phone-pad" />
          <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
          {successMessage ? <Text style={styles.success}>{successMessage}</Text> : null}
          {error ? <Text style={styles.error}>{error}</Text> : null}
          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <View style={styles.buttonContainer}>
              <Button title="Sign Up" onPress={handleSignup} />
              <Button title="Cancel" onPress={onClose} />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  sheet: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  success: {
    color: 'green',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default SignupBottomSheet;
