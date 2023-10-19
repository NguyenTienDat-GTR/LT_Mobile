import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import Reac, { useState } from 'react';
export default function pickColor() {
    return (
        <View style={styles.container} >
            <View style={styles.infoContainer}>
                <Image style={styles.imgPhone} source={require('../SellPhone/assets/vs_blue.png')} />
                <Text style={styles.txtPhoneName}>Điện Thoại Vsmart Joy 3 <br /> Hàng chính hãng</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoContainer: {
        flex: 1,
        flexdirection: 'row',
        backgroundColor: '#fff',
        height: '50%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    imgPhone: {
        width: '150px',
        height: '170px',
        margintop: '0px',
    },
    txtPhoneName: {
        fontfamily: 'roboto',
        fontsize: '15px',
    }
});