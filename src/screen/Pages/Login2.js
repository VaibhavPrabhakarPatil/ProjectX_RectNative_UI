import React, { useState } from 'react';
import { View, Image, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import CommonCss from '@/src/components/Css/CommonCss'

export default function Login2({ navigation }) {
    const [phone, setPhone] =useState();

    return (
        <ScrollView contentContainerStyle={CommonCss.container} keyboardShouldPersistTaps="handled">
            <StatusBar barStyle={'dark-content'} />
            <Image source={require('../../../assets/images/hand.png')} style={[CommonCss.image,{marginTop:30}]} />
            <Text style={[CommonCss.title,{marginBottom:0}]} variant="headlineMedium"> Welcome To Project X</Text>
            <Text style={[CommonCss.title,{textAlign:'right'}]} variant="headlineMedium">Xyz</Text>
            <TextInput
                mode="outlined"
                label="Enter Your Number"
                keyboardType="phone-pad"
                maxLength={10}
                activeOutlineColor='#FFCC29'
                value={phone}
                onChangeText={setPhone}
                style={CommonCss.input}
            />
            <Button variant="contained" onPress={() => navigation.navigate('Otp2')} style={CommonCss.button}>
             <Text style={CommonCss.buttonText}>Submit</Text>  
            </Button>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
});
