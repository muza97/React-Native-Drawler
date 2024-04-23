import React from "react";
import { View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import { themeColors } from "../theme";
import { updateLocation } from "../hooks/updateLocation";
//import { EXPO_PUBLIC_API_KEY } from "@env"; // Importing API key from environment

const MapScreen = () => {
  const api_key =process.env.EXPO_PUBLIC_API_KEY;
  console.log(api_key);
  const handleUpdateLocation = async () => {
    try {
      // Call the updateLocation function with the desired latitude and longitude
      const response = await updateLocation(37.78825, -122.4324);
      console.log('Update location response:', response);
      // Handle response if needed
    } catch (error) {
      // Handle error
      console.error('Update location error:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}
        customMapStyle={themeColors.mapStyle}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        showsScale={true}
        showsTraffic={false}
        showsIndoors={false}
        showsBuildings={true}
        showsIndoorLevelPicker={true}
        showsPointsOfInterest={true}
        loadingEnabled={true}
        loadingIndicatorColor={themeColors.primary}
        loadingBackgroundColor={themeColors.transparent}
        scrollEnabled={true}
        zoomEnabled={true}
        rotateEnabled={true}
        toolbarEnabled={true}
        moveOnMarkerPress={true}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title={"Marker Title"}
          description={"Marker Description"}
        />
      </MapView>
      <Text onPress={handleUpdateLocation}>Update Location</Text>
    </View>
  );
};

export default MapScreen;