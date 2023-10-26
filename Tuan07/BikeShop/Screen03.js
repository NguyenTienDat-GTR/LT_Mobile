import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
export default function Screen03() {
    const route = useRoute();

    // Lấy tham số được truyền từ Screen02
    const { item } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image style={styles.img} source={item.img} />
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.txtName}>{item.name}</Text>
                <View style={styles.containerPrice}>
                    <Text style={styles.txtSale}>15% OFF 350$</Text>
                    <Text style={styles.txtPrice}>449$</Text>
                </View>
                <Text style={styles.description}>Description</Text>
                <Text style={styles.txtDescription}>It is a very important form of
                    writing as we write almost everything in paragraphs,
                    be it an answer, essay, story, emails, etc.
                </Text>
                <View style={styles.containerButton}>
                    <Image style={{ width: 50, height: 50 }} source={require('../BikeShop/assets/heart.png')}/>
                    <TouchableOpacity style={styles.buttonAddToCart}>
                        <Text style={styles.txtButtonAddToCart}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    containerImg: {
        width: '95%',
        height: '55%',
        backgroundColor: 'rgba(233, 65, 65, 0.1)',
        borderRadius: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: 10,
        padding: 10,
    },
    img: {
        flex: 1,
        width: '85%',
        height: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        zIndex: 1,
    },
    containerInfo: {
        marginLeft: 10,
        marginTop:20,
    },
    txtName:{
        fontFamily: 'Ubuntu',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'start',
    },
    containerPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%',
        marginTop: 10,
    },
    txtSale:{
        fontFamily: 'Ubuntu',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'start',
        color: 'rgba(0, 0, 0, 0.59)',
    },
    txtPrice:{
        fontFamily: 'Ubuntu',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'start',
        color: '#000000',
        textDecorationLine: 'line-through',
    },
    description:{
        fontFamily: 'Ubuntu',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'start',
        color: '#000000',
        marginTop: 10,
    },
    txtDescription:{
        fontFamily: 'Ubuntu',
        fontSize: 20,
        textAlign: 'start',
        color: 'rgba(0, 0, 0, 0.57)',
        marginTop: 10,
    },
    containerButton:{
        width: '95%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonAddToCart:{
        width: '70%',
        height: 50,
        backgroundColor: '#E94141',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    txtButtonAddToCart:{
        fontSize: 25,
        fontFamily: 'Ubuntu',
        color: '#fff',
    },
});