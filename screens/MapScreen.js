import React from "react";
import { View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import { themeColors } from "../theme";
//import { EXPO_PUBLIC_API_KEY } from "@env"; // Importing API key from environment

const MapScreen = () => {
  const api_key =process.env.EXPO_PUBLIC_API_KEY;
  console.log(api_key);

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
        customMapStyle={themeColors.mapStyle} // Assuming you have a custom map style defined in your theme
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
    </View>
  );
};

export default MapScreen;
