import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';

const MessageForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Simple validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      Alert.alert('Please fill out all fields.');
      return;
    }
    if (!email.includes('@')) {
      Alert.alert('Please enter a valid email address.');
      return;
    }
    // Here you would typically send the message to your backend or email service
    Alert.alert('Thank you!', 'Your message has been sent.');

    // Clear the form
    setName('');
    setEmail('');
    setMessage('');

    // Call onSubmit to reset view or navigate back, if passed
    if (onSubmit) onSubmit();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Message"
          multiline
          numberOfLines={4}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  // Add styles for other elements as needed
});

export default MessageForm;
