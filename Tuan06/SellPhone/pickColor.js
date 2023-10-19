import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';

export default function pickColor() {
    return (
        <View style={styles.container} >
            <View style={styles.infoContainer}>
                <Image style={styles.imgPhone} source={require('../SellPhone/assets/vs_blue.png')} />
                <View style={styles.textInfo}>
                    <Text style={styles.txtPhoneName}>Điện Thoại Vsmart Joy 3 <br/>Hàng chính hãng</Text>
                    <View style={styles.colorInfo}>
                        <Text style={styles.colorInfoText}>Màu: <b>đỏ</b></Text>
                        <Text style={styles.colorInfoText}>Cung cấp bởi <b>Tiki Trandding</b></Text>
                        <Text style={styles.colorInfoText}>1.790.000 đ</Text>
                    </View>
                </View>
            </View>
            <View style={styles.colorContainer}>
                <Text style={styles.txtPickColor}>Chọn một màu bên dưới:</Text>
                <View style={styles.color}>
                    <View style={styles.color1} />
                    <View style={styles.color2} />
                    <View style={styles.color3} />
                    <View style={styles.color4} />
                </View>
                <TouchableHighlight style={styles.buttonComplete}>
                    <Text style={styles.txtComplete}>XONG</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    infoContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: '28%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    imgPhone: {
        width: 150,
        height: 170,
        margin: 5,
    },
    txtPhoneName: {
        fontFamily: 'roboto',
        fontSize: 15,
        margin: 5,
    },
    txtInfo: {
        flex: 1,
        margin: 5,
    },
    colorInfo: {
        margin: 5,
    },
    colorInfoText: {
        fontFamily: 'roboto',
        fontSize: 15,
    },
    colorContainer: {
        backgroundColor: '#C4C4C4',
        width: '100%',
        height: '72%',
    },
    txtPickColor: {
        fontFamily: 'roboto',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
    },
    color: {
        flex: 4,
        gap: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    color1: {
        backgroundColor: '#C5F1FB',
        width: 80,
        height: 80,
    },
    color2: {
        backgroundColor: '#F30D0D',
        width: 80,
        height: 80,
    },
    color3: {
        backgroundColor: '#000000',
        width: 80,
        height: 80,
    },
    color4: {
        backgroundColor: '#234896',
        width: 80,
        height: 80,
    },
    buttonComplete: {
        width: '90%',
        height: 50,
        backgroundColor: '#1952E294',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1 solid #CA1536',
        marginTop: 10,
        borderRadius: 5,
        alignSelf: 'center',
        marginVertical: 10,
    },
    txtComplete: {
        fontFamily: 'Roboto',
        fontSize: 30,
        color: 'white',
    },
});
