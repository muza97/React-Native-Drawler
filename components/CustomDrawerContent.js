//components/CustomDrawlerContent.js
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import LogoutButton from '../Buttons/LogoutButton';

const CustomDrawerContent = (props) => {
  const navigateToProfile = () => {
    props.navigation.navigate('Profile');
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <Image
          source={require('/Users/mz/Drawler/AwesomeProject/img/Unknown-3.jpg')} // Replace with your image URI
          style={styles.profileImage}
        />
        <TouchableOpacity onPress={navigateToProfile} style={styles.profileButton}>
          <Text style={styles.profileButtonText}>My Profile</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
      </View>
      <View style={styles.drawerItemsContainer}>
        <DrawerItemList {...props} />
        
      </View>
      <View style={styles.logoutContainer}>
          <LogoutButton onLogout={props.onLogout} />
        </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white', 
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 10,
  },
  profileButton: {
    // Style 
  },
  profileButtonText: {
    // Style 
  },
  divider: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: '100%', 
    marginVertical: 20,
  },
  drawerItemsContainer: {
    flex: 1,
    width: '100%',
    borderTopRightRadius: 20, 
    borderBottomRightRadius: 20, 
  },
  
});

export default CustomDrawerContent;
