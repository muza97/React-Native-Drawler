import React, { useEffect } from "react";
import { View, Text, Platform } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { themeColors } from "../theme";
import { updateLocation } from "../hooks/updateLocation"; // Ensure this is the correct import path

const MapScreen = () => {
  const api_key = process.env.EXPO_PUBLIC_API_KEY; // Use this API key as needed
  console.log(api_key);

  const handleUpdateLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      return;
    }

    try {
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      const response = await updateLocation(latitude, longitude);
      console.log('Update location response:', response);
    } catch (error) {
      console.error('Update location error:', error);
    }
  };

  useEffect(() => {
    handleUpdateLocation(); // Optionally update location on component mount
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        customMapStyle={themeColors.mapStyle}
        showsUserLocation={true}
        showsMyLocationButton={true}
        loadingEnabled={true}
        loadingIndicatorColor={themeColors.primary}
        scrollEnabled={true}
        zoomEnabled={true}
        rotateEnabled={true}
      />
      <Text onPress={handleUpdateLocation}>Update Location</Text>
    </View>
  );
};

export default MapScreen;
