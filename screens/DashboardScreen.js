import {View, Text, StyleSheet} from "react-native"

const DasboardScreen = () => {
    return (
        <View style={styles.container}>
        <Text style= {styles.text}>Welcome to the DashBoard</Text> 
        </View>
    );
};

export default  DasboardScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignIteams: "center",
        justifyContent: "center",
    },
text: {
    fontSize:30,
    frontWeight: "bold",
    marginbottom: 16,
},
});
