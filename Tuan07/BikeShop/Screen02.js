import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
export default function Screen02() {
    const data = [ //tạo dữ liệu cho flatlist
        {
            id: 'sp1',
            name: 'Pinarello',
            price: '1800',
            img: require('../BikeShop/assets/blue_bike.png'),
            like: require('../BikeShop/assets/heart.png'),
            type: 'Road Bike',
        },
        {
            id: 'sp2',
            name: 'Pina Mountain',
            price: '1700',
            img: require('../BikeShop/assets/red_black_bike.png'),
            like: require('../BikeShop/assets/heart.png'),
            type: 'Mountain Bike',
        },
        {
            id: 'sp3',
            name: 'Pina Bike',
            price: '1500',
            img: require('../BikeShop/assets/purple_bike.png'),
            like: require('../BikeShop/assets/heart.png'),
            type: 'Road Bike',
        },
        {
            id: 'sp4',
            name: 'Pinarello',
            price: '1900',
            img: require('../BikeShop/assets/red_bike.png'),
            like: require('../BikeShop/assets/heart.png'),
            type: 'Road Bike',
        },
        {
            id: 'sp5',
            name: 'Pinarello',
            price: '2700',
            img: require('../BikeShop/assets/purple_bike.png'),
            like: require('../BikeShop/assets/heart.png'),
            type: 'Road Bike',
        },
        {
            id: 'sp6',
            name: 'Pinarello',
            price: '1350',
            img: require('../BikeShop/assets/red_black_bike.png'),
            like: require('../BikeShop/assets/heart.png'),
            type: 'Mountain Bike',
        },
    ];
    const [filter, setFilter] = useState('All');//tạo state để lưu trạng thái của filter
    const [filteredData, setFilteredData] = useState(data);//tạo state để lưu trạng thái của dữ liệu

    const handleFilter = (FilterType) => {//tạo hàm để thay đổi trạng thái của filter và dữ liệu
        setFilter(FilterType);
        if (FilterType === 'All') {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter((item) => item.type === FilterType));
        }
    };
    //chuyển sang màn hình 03
    const navigationScreen03 = useNavigation();
    const navigationToScreen03 = (item) => {
        navigationScreen03.navigate('bikeDetail',{item});
    }
    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}>
                The world’s Best Bike
            </Text>
            <View style={styles.containerFilter}>
                <TouchableOpacity
                    style={[styles.txtFilter, filter === 'All' ? styles.selectedFilter : null]}
                    onPress={() => handleFilter('All')}>
                    All
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.txtFilter, filter === 'Road Bike' ? styles.selectedFilter : null]}
                    onPress={() => handleFilter('Road Bike')}>
                    Road Bike
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.txtFilter, filter === 'Mountain Bike' ? styles.selectedFilter : null]}
                    onPress={() => handleFilter('Mountain Bike')}>
                    Mountain Bike
                </TouchableOpacity>
            </View>
            <FlatList style={{ width: '100%' }}
                data={filteredData}
                renderItem={({ item }) => (//nếu có truyền dữ liệu từ flatlist thì thêm vào item
                    <TouchableOpacity style={styles.item} onPress={() => navigationToScreen03(item)}>
                        <Image style={styles.img} source={item.img} />
                        <View style={styles.infoSp}>
                            <Text style={styles.nameSp} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                            <Text style={styles.priceSp}>${item.price}</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonLike}>
                            <Image style={styles.like} source={item.like} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
                numColumns={2}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    txtTitle: {
        fontFamily: 'Ubuntu',
        fontSize: 25,
        textAlign: 'center',
        color: '#E94141',
        fontWeight: 'bold',
        marginTop: 20,
        alignSelf: 'flex-start',
    },
    containerFilter: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
    },
    txtFilter: {
        width: 120,
        height: 20,
        fontFamily: 'Ubuntu',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#E94141',
        padding: 2,
        color: '#BEB6B6',
    },
    selectedFilter: {
        color: '#E94141',
    },
    item: {
        flex: 1,
        backgroundColor: 'rgba(247, 186, 131, 0.15)',
        margin: 7,
        width: '100%',
        height: 220,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    img: {
        width: '80%',
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    infoSp: {
        alignItems: 'center',
        padding: 10,
        justifyContent: 'flex-end',
    },
    nameSp: {
        fontFamily: 'Ubuntu',
        fontSize: 20,
        textAlign: 'center',
        color: '#000',
    },
    priceSp: {
        fontFamily: 'Ubuntu',
        fontSize: 20,
        textAlign: 'center',
        color: '#E94141',
    },
    buttonLike: {
        width: 30,
        height: 30,
        position: 'absolute',
        alignSelf: 'flex-start',
        marginTop: -170,
        marginLeft: 10,
    },
    like: {
        width: 30,
        height: 30,
    }
});
