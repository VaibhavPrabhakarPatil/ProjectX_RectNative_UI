import React from 'react';
import { View, Text, Pressable, StyleSheet } from "react-native";
import CommonHeader from '@/src/components/CommonHeader';
import CommonCss from '@/src/components/Css/CommonCss';

export default function Services({navigation}) {
    return (
        <>
            <CommonHeader />
            <View style={CommonCss.container}>
                <Pressable style={CommonCss.servicesButton} onPress={()=>navigation.navigate('UploadImage')}>
                    <Text style={CommonCss.buttonText}>Buy</Text>
                </Pressable>
                <Pressable style={CommonCss.servicesButton}>
                    <Text style={CommonCss.buttonText}>Sell</Text>
                </Pressable>
                <Pressable style={CommonCss.servicesButton}>
                    <Text style={CommonCss.buttonText}>Rent</Text>
                </Pressable>
                <Pressable style={CommonCss.servicesButton}>
                    <Text style={CommonCss.buttonText}>To Rent</Text>
                </Pressable>
                <Pressable style={CommonCss.servicesButton}>
                    <Text style={CommonCss.buttonText}>Donate</Text>
                </Pressable>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
});

