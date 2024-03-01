//components/CustomDrawlerContent.js
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Button } from 'react-native';
import LogoutButton from '../Buttons/LogoutButton'; // Adjust the path as needed

const CustomDrawerContent = (props) => {

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <View style={{ padding: 20 }}>

        <LogoutButton onLogout={props.onLogout} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;