//components/CustomDrawerContent.js
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import LogoutButton from '../Buttons/LogoutButton'; // Adjust the path as needed

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* other custom items */}
      <LogoutButton navigation={props.navigation} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;