import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/authentication/signIn/Login';
import Otp from '../screen/authentication/signIn/Otp';
import Home from '../screen/Pages/Home';
import Services from '../screen/Pages/Services';
import UploadImage from '../screen/Pages/UploadImage';
import Login2 from '../screen/Pages/Login2';
import Otp2 from '../screen/Pages/Otp2';
import AadhaarVerification from '../screen/Pages/AadhaarVerification';
import AadharOtp from '../screen/Pages/AadharOtp';



const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Services" component={Services} options={{ headerShown: false }} />
            <Stack.Screen name="UploadImage" component={UploadImage} options={{ headerShown: false }} />
            <Stack.Screen name="Login2" component={Login2} options={{ headerShown: false }} />
           <Stack.Screen name="Otp2" component={Otp2} options={{ headerShown: false }} />
            <Stack.Screen name="AadhaarVerification" component={AadhaarVerification} options={{ headerShown: false }} />
           <Stack.Screen name="AadharOtp" component={AadharOtp} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
