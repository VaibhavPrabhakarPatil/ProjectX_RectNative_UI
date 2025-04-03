import React from 'react';
import { View, Text, Pressable, StyleSheet } from "react-native";
import CommonHeader from '@/src/components/CommonHeader';
import CommonCss from '@/src/components/Css/CommonCss';

export default function Services({navigation}) {
    return (
        <>
            <CommonHeader />
            <View style={CommonCss.container}>
                <Pressable style={styles.servicesButton}>
                    <Text style={styles.buttonText}>Buy</Text>
                </Pressable>
                <Pressable style={styles.servicesButton}>
                    <Text style={styles.buttonText}>Sell</Text>
                </Pressable>
                <Pressable style={styles.servicesButton}>
                    <Text style={styles.buttonText}>Rent</Text>
                </Pressable>
                <Pressable style={styles.servicesButton}>
                    <Text style={styles.buttonText}>To Rent</Text>
                </Pressable>
                <Pressable style={styles.servicesButton}>
                    <Text style={styles.buttonText}>Donate</Text>
                </Pressable>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    servicesButton: {
        backgroundColor: '#FFCC29',
        borderWidth: 1,
        borderColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10, 
        width:'50%'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});

