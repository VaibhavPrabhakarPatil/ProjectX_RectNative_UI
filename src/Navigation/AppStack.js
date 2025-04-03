import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/authentication/signIn/Login';
import Otp from '../screen/authentication/signIn/Otp';
import Home from '../screen/Pages/Home';
import Services from '../screen/Pages/Services';

const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Services" component={Services} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
