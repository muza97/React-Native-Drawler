import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DasboardScreen from "./screens/DashboardScreen";
import SettingScreen from "./screens/SettingScreen";

const Drawer = createDrawerNavigator();

export default function  App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen  name="Dashboard" component={DasboardScreen} />
        <Drawer.Screen  name="Settings" component={SettingScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
    )
    };
    

    const handleLogout = async () => {
      try {
        const driverId = await AsyncStorage.getItem('driverId');
        let responseBody = null;
    
        if (driverId) {
          const response = await fetch('http://192.168.1.93:3001/api/logout-driver', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ driverId }),
          });
          responseBody = await response.json();
    
          if (response.status !== 200) {
            console.error('Logout failed:', responseBody.message);
          }
        }
      } catch (error) {
        console.error('Network or server error:', error);
      } finally {
        // Clear AsyncStorage and navigate to LoginPage whether or not the driverId was found or the server responded.
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('driverId');
        navigation.navigate('Login');
      }
    };



    