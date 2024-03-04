//App.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthProvider, AuthContext } from './context/AuthContext'; 
import CustomDrawerContent from './components/CustomDrawerContent';
import SignupBottomSheet from './components/SignupBottomSheet';

import LoginPage from './screens/LoginPage';
import MapScreen from './screens/MapScreen';
import PaymentScreen from './screens/PaymentScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';
import ContactScreen from './screens/ContactScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginPage} />
    {/* other authentication screens */}
  </Stack.Navigator>
);

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </AuthProvider>
  );
};

const AppContent = () => {
  const { isAuthenticated, setIsAuthenticated, isSignupVisible, setSignupVisible } = useContext(AuthContext);
  const onLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <>
      {isAuthenticated ? (
          <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} onLogout={onLogout}setIsAuthenticated={setIsAuthenticated} />}>
          
          <Drawer.Screen name="Map" component={MapScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />         
          <Drawer.Screen name="Payment" component={PaymentScreen} />
          <Drawer.Screen name="Settings" component={SettingScreen} />
          <Drawer.Screen name=  "Contact Us" component={ContactScreen} />
          {/*  other screens */}
        </Drawer.Navigator>
      ) : (
        <AuthStack />
      )}
      <SignupBottomSheet
        visible={isSignupVisible}
        onClose={() => setSignupVisible(false)}
        onSignupSuccess={() => setIsAuthenticated(true)}
      />
    </>
  );
};

export default App;
