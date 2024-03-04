import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MessageForm from '../components/MessageForm'; // Ensure correct path
import MyMap from '../components/MyMap'; // Make sure this is the correct path

const ContactUsPage = () => {
  const [view, setView] = useState('form'); // Start with 'form' or 'map'

  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => setView('form')}>
          <FontAwesome name="paper-plane" size={24} color={view === 'form' ? "#900" : "#000"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setView('map')}>
          <FontAwesome name="location-arrow" size={30} color={view === 'map' ? "#900" : "#000"} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {view === 'form' && <MessageForm onSubmit={() => setView('default')} />}
        {view === 'map' && <MyMap region={initialRegion} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Or any desired background color
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    backgroundColor: '#fff', // Background color for the icons container
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1', // Color for the separator line
  },
  contentContainer: {
    flex: 1,
    // If you need padding or any other style here, add it
  },
  map: {
    width: '100%',
    height: '100%',
  },
  // Add other styles if needed
});

export default ContactUsPage;