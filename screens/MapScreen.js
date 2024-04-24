import React, { useEffect, useState } from "react";
import { View, Text, Platform } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { themeColors } from "../theme";
import { updateLocation } from "../hooks/updateLocation"; 

const MapScreen = () => {
  const [userLocation, setUserLocation] = useState(null);
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
      setUserLocation({ latitude, longitude });
      const response = await updateLocation(latitude, longitude);
      console.log('Update location response:', response);
    } catch (error) {
      console.error('Update location error:', error);
    }
  };

  useEffect(() => {
    handleUpdateLocation();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {userLocation && (
        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          customMapStyle={themeColors.mapStyle}
          initialRegion={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          loadingEnabled={true}
          loadingIndicatorColor={themeColors.primary}
          scrollEnabled={true}
          zoomEnabled={true}
          rotateEnabled={true}
        >
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="You are here"
          />
        </MapView>
      )}
      <Text onPress={handleUpdateLocation}>Update Location</Text>
    </View>
  );
};

export default MapScreen;
