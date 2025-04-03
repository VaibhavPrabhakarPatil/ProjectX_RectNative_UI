import React from 'react';
import { View, Pressable, StyleSheet } from "react-native";
import CommonHeader from '@/src/components/CommonHeader';
import CommonCss from '@/src/components/Css/CommonCss';
import { Button, Text } from 'react-native-paper';

export default function UploadImage({ navigation }) {
    return (
        <>
            <CommonHeader />
            <View style={CommonCss.container}>
                <Pressable style={[CommonCss.servicesButton, { backgroundColor: '#ccc' }]} >
                    <Text style={CommonCss.buttonText}>Upload Image 1</Text>
                </Pressable>
                <Pressable style={[CommonCss.servicesButton, { backgroundColor: '#ccc' }]} >
                    <Text style={CommonCss.buttonText}>Upload Image 2</Text>
                </Pressable>
                <Pressable style={[CommonCss.servicesButton, { backgroundColor: '#ccc' }]} >
                    <Text style={CommonCss.buttonText}>Upload Image 3</Text>
                </Pressable>
                <Pressable style={[CommonCss.servicesButton, { width: '100%', backgroundColor: '#ccc' }]}>
                    <Text style={CommonCss.buttonText}>Brand</Text>
                </Pressable>
                <Pressable style={[CommonCss.servicesButton, { width: '100%', backgroundColor: '#ccc' }]}>
                    <Text style={CommonCss.buttonText}>Purchase Date</Text>
                </Pressable>
                <Pressable style={[CommonCss.servicesButton, { width: '100%', backgroundColor: '#ccc' }]}>
                    <Text style={CommonCss.buttonText}>Expected Selling Price</Text>
                </Pressable>
                <Button variant="contained"  style={[CommonCss.button,{marginTop:20}]}>
                    <Text style={CommonCss.buttonText}>Submit</Text>
                </Button>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
});

