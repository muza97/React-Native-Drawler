//screens/ProfileScreen.js

import {View, Text, StyleSheet} from "react-native"

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
        <Text style= {styles.text}>Welcome to your profile</Text> 
        </View>
    );
};

export default  ProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center", 
      justifyContent: "center",
    },
    text: {
      fontSize: 30,
      fontWeight: "bold", 
      marginBottom: 16, 
    },
  });