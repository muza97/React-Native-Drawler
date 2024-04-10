//screens/contactScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MessageForm from '../components/MessageForm'; 
import MyMap from '../components/MyMap'; 

const ContactUsPage = () => {
  const [view, setView] = useState('form'); 

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
    backgroundColor: '#f5f5f5', 
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    backgroundColor: '#fff', 
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1', 
  },
  contentContainer: {
    flex: 1,
    
  },
  map: {
    width: '100%',
    height: '100%',
  },
  
});

export default ContactUsPage;