import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import Reac, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function mainScreen() {
    const navigation = useNavigation();
    const navigationToPickColor = () => {
        navigation.navigate('pickColor');
    }
    return (
        <View style={styles.container} >
            <Image style={styles.imgPhone} source={require('../SellPhone/assets/vs_blue.png')} />
            <View>
                <text style={styles.textNamePhone}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</text>
                <View style={styles.containerInfo}>
                    <View style={styles.groupStar}>
                        <Image style={styles.star} source={require('../SellPhone/assets/star.png')} />
                        <Image style={styles.star} source={require('../SellPhone/assets/star.png')} />
                        <Image style={styles.star} source={require('../SellPhone/assets/star.png')} />
                        <Image style={styles.star} source={require('../SellPhone/assets/star.png')} />
                        <Image style={styles.star} source={require('../SellPhone/assets/star.png')} />
                    </View>
                    <text>(Xem 828 đánh giá)</text>
                </View>
                <View style={styles.containerPrice}>
                    <text>1.790.000 đ</text>
                    <text style={styles.txtOriginalPrice}>1.790.000 đ</text>
                </View>
                <View style={styles.containerSlogan}>
                    <text style={styles.txtSlogan}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</text>
                    <Image style={styles.imgDetail} source={require('../SellPhone/assets/Group_1.png')} />
                </View>
                <TouchableHighlight style={styles.buttonPickColor} onPress={navigationToPickColor}>
                    <Text style={styles.txtChooseColor}>4 MÀU-CHỌN MÀU</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttonBuy}>
                    <Text style={styles.txtBuy}>CHỌN MUA</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgPhone: {
        width: '80%',
        height: '60%',
        marginTop: '0px'
    },
    containerInfo: {
        marginTop: '10px',
        flexDirection: 'row'
    },
    textNamePhone: {
        fontFamily: 'Roboto',
        fontSize: '17px',
        fontWeight: 'bold'
    },
    groupStar: {
        flex: 1,
        flexDirection: 'row'
    },
    star: {
        width: '23px',
        height: '25px',
        marginTop: '-5px'
    },
    containerPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: 'Roboto',
        fontSize: '25px',
        fontWeight: 'bold',
        marginTop: '10px'
    },
    txtOriginalPrice: {
        opacity: 0.4,
        textDecorationLine: 'line-through',
    },
    containerSlogan: {
        marginTop: '10px',
        flexDirection: 'row'
    },
    txtSlogan: {
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'red',
    },
    imgDetail: {
        width: '20px',
        height: '20px',
        left: '10px',
        top: '2px'
    },
    buttonPickColor: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        marginTop: '10px',
        borderRadius: '10px'
    },
    txtChooseColor: {
        fontFamily: 'Roboto',
        fontSize: '20px',
        color: 'Black',
    },
    buttonBuy: {
        width: '100%',
        height: 50,
        backgroundColor: '#EE0A0A',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #CA1536',
        marginTop: '10px',
        borderRadius: '5px'
    },
    txtBuy: {
        fontFamily: 'Roboto',
        fontSize: '30px',
        color: 'white',
    }
});