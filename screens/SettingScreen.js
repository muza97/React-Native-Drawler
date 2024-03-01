//screens/SettingsScreen.js

import {View, Text, StyleSheet} from "react-native"

const SettingScreen = () => {
    return (
        <View style={styles.container}>
        <Text style= {styles.text}>Welcome to the Settings</Text> 
        </View>
    );
};

export default SettingScreen;

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
