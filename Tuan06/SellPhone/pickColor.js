import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function pickColor() {
    const [currentColor, setCurrentColor] = useState('blue');

    const handleColorChange = (color) => {
        setCurrentColor(color);
    };
    const colorInfoText = {
        blue: 'xanh',
        red: 'đỏ',
        black: 'đen',
        silver: 'bạc',
    };

    const colorImage = {
        blue: require('../SellPhone/assets/vs_blue.png'),
        red: require('../SellPhone/assets/vs_red.png'),
        black: require('../SellPhone/assets/vs_black.png'),
        silver: require('../SellPhone/assets/vs_silver.png'),
    };

    return (
        <View style={styles.container} >
            <View style={styles.infoContainer}>
                <Image style={styles.imgPhone} source={colorImage[currentColor]} />
                <View style={styles.textInfo}>
                    <Text style={styles.txtPhoneName}>Điện Thoại Vsmart Joy 3 <br />Hàng chính hãng</Text>
                    <View style={styles.colorInfo}>
                        <Text style={styles.colorInfoText}>Màu:
                            <Text style={{
                                fontWeight: 'bold',
                                fontFamily: 'roboto',
                                fontSize: 15,
                                margin: 5,
                            }}>
                                {colorInfoText[currentColor]}
                            </Text>
                        </Text>
                        <Text style={styles.colorInfoText}>Cung cấp bởi <b>Tiki Tradding</b></Text>
                        <Text style={styles.colorInfoText}><b>1.790.000 đ</b></Text>
                    </View>
                </View>
            </View>
            <View style={styles.colorContainer}>
                <Text style={styles.txtPickColor}>Chọn một màu bên dưới:</Text>
                <View style={styles.color}>
                    <TouchableOpacity
                        style={styles.color1}
                        onPress={() => handleColorChange('silver')}
                    />
                    <TouchableOpacity
                        style={styles.color2}
                        onPress={() => handleColorChange('red')}
                    />
                    <TouchableOpacity
                        style={styles.color3}
                        onPress={() => handleColorChange('black')}
                    />
                    <TouchableOpacity
                        style={styles.color4}
                        onPress={() => handleColorChange('blue')}
                    />
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
        width: 140,
        height: 160,
        margin: 5,
    },
    txtPhoneName: {
        fontFamily: 'roboto',
        fontSize: 15,
        margin: 5,
    },
    colorInfo: {
        margin: 5,
    },
    colorInfoText: {
        fontFamily: 'roboto',
        fontSize: 15,
        margin: 5,
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
        backgroundColor: '#E0FFFF',
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
        borderWidth: 1,
        borderColor: '#CA1536',
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
