import React from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import CommonCss from '@/src/components/Css/CommonCss'

const AadhaarVerification = ({navigation}) => {
    return (
        <ScrollView contentContainerStyle={CommonCss.container}>
            <Text style={styles.heading}>Safe Aadhaar Verification for Authentication</Text>
            <Image
                source={require('@/assets/images/Aadhaar.jpg')}
                style={styles.image}
                resizeMode="contain"
            />
            <TextInput
                mode="outlined"
                label="Enter Your Adhar Number"
                keyboardType="phone-pad"
                maxLength={12}
                activeOutlineColor='#FFCC29'
                style={CommonCss.input}
            />

            <Button variant="contained" style={CommonCss.button} onPress={()=>navigation.navigate('AadharOtp')}>
                <Text style={CommonCss.buttonText}>Submit</Text>
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#1a1a1a',
        fontWeight: '500',
        marginTop:50
    },
    image: {
        width: '100%',
        height: 180,
        marginBottom: 20,
        borderRadius: 10,
    },
});

export default AadhaarVerification;
