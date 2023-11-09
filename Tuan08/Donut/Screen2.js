import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function Screen2({ route }) {
    const { item } = route.params//lấy dữ liệu từ item flatlist ở screen1 truyền sang

    //tăng hoặc giảm giá trị của Quuantity
    // sử dụng useState để lưu giá trị Quantity
    const [Quantity, setQuantity] = useState(1);

    //tăng giá trị của Quantity
    const increasQuantity = () => {
        setQuantity(Quantity + 1);
    }
    //giảm giá trị của Quantity
    const descreasQuantity = () => {
        setQuantity(Quantity - 1);
        //nếu Quantity = 1 thì không giảm nữa
        if(Quantity==1){
            setQuantity(1);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={{ uri: item.img }} />
            </View>
            <View style={styles.info}>
                <Text style={styles.txtName}>{item.name}</Text>
                <View style={styles.CompAndPrice}>
                    <Text style={styles.txtComp}>{item.Company}</Text>
                    <Text style={styles.txtPrice}>${item.price}</Text>
                </View>
                <View style={styles.DeliveryAndQuantity}>
                    <View style={styles.delivery}>
                        <Image style={{ width: 15, height: 15 }} source={require('./assets/lock.png')} />
                        <Text style={styles.txtDelivery}>Delivery in</Text>
                    </View>
                    <View style={styles.TimeAndQuantity}>
                        <Text style={styles.Time}>30 min</Text>
                        <View style={styles.Quantity}>
                            <TouchableOpacity style={styles.btnAddandSub} onPress={descreasQuantity}>
                                <Text style={styles.txtAddandSub}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.txtQuantity}>{Quantity}</Text>
                            <TouchableOpacity style={styles.btnAddandSub} onPress={increasQuantity}>
                                <Text style={styles.txtAddandSub}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.ResInfo}>
                    <Text style={styles.resTitle}>
                        Restaurant info
                    </Text>
                    <Text style={styles.txtRes}>
                        Order a Large Pizza but the size is the equivalent of
                        a medium/small from other places
                        at the same price range.
                    </Text>
                </View>
                <TouchableOpacity style={styles.btnAddtoCart}>
                    <Text style={styles.txtAddtoCart}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    imgContainer: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    img: {
        width: '95%',
        height: '95%'
    },
    info: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 20,
    },
    txtName: {
        fontFamily: 'Roboto',
        fontSize: 25,
        fontWeight: 700
    },
    CompAndPrice: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    txtComp: {
        fontSize: 15,
        fontWeight: '700',
        color: 'rgba(0, 0, 0, 0.54)',
    },
    txtPrice: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '700',
    },
    DeliveryAndQuantity: {
        width: '95%',
        marginTop: 10,
    },
    delivery: {
        flexDirection: 'row',
        gap: 10,
    },
    txtDelivery: {
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: '700',
        color: 'rgba(0, 0, 0, 0.54)',
    },
    TimeAndQuantity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    Time: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '700',
        color: 'rgba(0, 0, 0, 1)',
        left: 10,
    },
    Quantity: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnAddandSub: {
        width: 30,
        height: 30,
        backgroundColor: 'rgba(241, 176, 0, 1)',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtAddandSub: {
        fontSize: 25,
        fontWeight: '700',
        color: 'rgba(248, 241, 241, 1)',
    },
    txtQuantity: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '700',
        color: 'rgba(0, 0, 0, 1)',
    },
    ResInfo: {
        width: '95%',
        marginTop: 10,
    },
    resTitle: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '700',
        color: 'rgba(0, 0, 0, 1)',
    },
    txtRes: {
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: '700',
        color: 'rgba(0, 0, 0, 0.67)',
    },
    btnAddtoCart: {
        width: '90%',
        height: 50,
        backgroundColor: 'rgba(241, 176, 0, 1)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'center',
    },
    txtAddtoCart: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '700',
        color: 'rgba(248, 241, 241, 1)',
    },
})