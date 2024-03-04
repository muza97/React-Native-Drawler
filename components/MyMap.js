// components/MyMap.js
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';

const MyMap = ({ region, marker }) => {
  return (
    <MapView
      style={styles.map}
      region={region}
    >
      {marker && <Marker coordinate={marker} />}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MyMap;
