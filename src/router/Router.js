import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import GetStartedScreen from '../pages/GetStarted/GetStartedScreen';
import SignInScreen from '../pages/SignIn/SignIn';
import SignUpScreen from '../pages/SignUp/SignUp';
import SplashScreen from '../pages/Splash/SplashScreen';
import UploadPhotoScreen from '../pages/UploadPhoto/UploadPhoto';

const Stack = createNativeStackNavigator();

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
    </Stack.Navigator>
  );
};

export default Router;
