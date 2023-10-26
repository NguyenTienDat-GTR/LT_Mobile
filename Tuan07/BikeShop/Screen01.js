import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Screen01({ navigation }) {
    const navigationScreen02 = useNavigation();// chuyển màn hình 02
    const navigationToScreen02 = () =>{
        navigationScreen02.navigate('pickBike');
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.txtTitle}>
                    A premium online store for <br /> sporter and their stylish choice
                </Text>
            </View>
            <View style={styles.containerImgBike}>
                <Image style={{ width: '70%',height: '70%',}}
                    source={require('../BikeShop/assets/blue_bike.png')} />
            </View>
            <Text style={styles.txtShopName}>POWER BIKE <br /> SHOP</Text>
            <TouchableOpacity style={styles.buttonStart} onPress={navigationToScreen02}>
                <Text style={styles.txtButton} >Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    containerTitle: {
        alignItems: 'center',
    },
    txtTitle: {
        fontFamily: 'Ubuntu',
        fontSize: 25,
        textAlign: 'center',
    },
    containerImgBike: {
        width: '95%',
        height: '52%',
        backgroundColor: 'rgba(233, 65, 65, 0.1)',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtShopName: {
        fontFamily: 'Ubuntu',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonStart: {
        width: '90%',
        height: 50,
        backgroundColor: '#E94141',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    txtButton: {
        fontSize: 25,
        fontFamily: 'Ubuntu',
        color: '#fff',
    },
});