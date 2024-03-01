//screens/PaymentScreen.js

import {View, Text, StyleSheet} from "react-native"

const PaymentScreen = () => {
    return (
        <View style={styles.container}>
        <Text style= {styles.text}>Welcome to the Payment</Text> 
        </View>
    );
};

export default  PaymentScreen;

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
