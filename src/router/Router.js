import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomNavigator from '../components/molecules/BottomNavigator/BottomNavigator';
import DoctorScreen from '../pages/Doctor/Doctor';
import GetStartedScreen from '../pages/GetStarted/GetStartedScreen';
import HospitalsScreen from '../pages/Hospitals/Hospitals';
import MessagesScreen from '../pages/Messages/Messages';
import SignInScreen from '../pages/SignIn/SignIn';
import SignUpScreen from '../pages/SignUp/SignUp';
import SplashScreen from '../pages/Splash/SplashScreen';
import UploadPhotoScreen from '../pages/UploadPhoto/UploadPhoto';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Doctor"
        component={DoctorScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Hospitals"
        component={HospitalsScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStartedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhotoScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
