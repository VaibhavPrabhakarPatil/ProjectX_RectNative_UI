import React from 'react';
import { Pressable, View, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CommonHeader() {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <StatusBar backgroundColor="#fff" barStyle='dark-content' translucent={true} />
            <View style={styles.headerContent}>
                <Pressable>
                    <Image style={[styles.drawericon, { tintColor: 'black' }]} source={require('../../assets/images/bars.png')} />
                </Pressable>
                <View style={styles.locationContainer}>
                    <Image style={[styles.drawericon, { marginLeft: 20 }]} source={require('../../assets/images/Placeholder.png')} />
                    <View style={styles.textContainer}>
                        <Text style={styles.Textheadding}>Vaibhav Patil</Text>
                        <Text style={styles.subText}>Kundane War</Text>
                    </View>
                </View>
                <Pressable onPress={() => navigation.navigate('')}>
                    <Image style={[styles.drawericon, { width: 40, height: 40 }]} source={require('../../assets/images/profile.png')} />
                </Pressable>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    textContainer: {
        paddingLeft: 10,
        marginBottom: 10,
    },
    Textheadding: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    subText: {
        fontSize: 13,
        color: 'gray',
    },
    drawericon: {
        width: 30,
        height: 30,
        tintColor: '#FFCC29',
        marginBottom: 10,
    },
});
