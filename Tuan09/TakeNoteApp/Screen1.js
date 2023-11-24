import React from 'react';
import {
    StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState, } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Screen1() {
    const route = useRoute();
    const [showPassword, setShowPassword] = useState(false);// show password
    // set show password
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    //set data from api
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fecthData();
        updateData();

        const routeParams = route.params;
        if (routeParams && routeParams.latestData) {
            setData(routeParams.latestData);
        }
    }, [route.params]);
    const fecthData = async () => {
        try {
            const response = await fetch('https://6544382b5a0b4b04436c2915.mockapi.io/TakeNoteApp');
            if (!response.ok) {
                throw new Error('Loi khi ket noi mang');
            } else {
                const jsonData = await response.json();
                setData(jsonData);
            }
        } catch (error) {
            console.error('Loi khi tai du lieu: ', error);
        } finally {
            setIsLoading(false);
        }
    }
    const updateData = async () => {
        const userData = await AsyncStorage.getItem('userData');
        if (userData !== null) {
            setData(JSON.parse(userData));
        }
    }
    //check login with data api
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState(null);
    //const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

    // Hàm để nhận dữ liệu mới nhất từ SignUp và cập nhật vào trang login

    const handleLogin = async () => {
        if (data) {
            const user = data.find(item => item.username === userName && item.password === password);
            // console.log(data);
            if (user) {
                setUserData(user);
                saveUserData(user);
            } else {
                alert('Login fail');
            }
        } else {
            alert('No user data found');
        }
    };

    //lưu dữ liệu người dùng vừa đăng nhập vào async storage và chuyển đến note.js
    const saveUserData = async (userData) => {
        try {
            await AsyncStorage.setItem('userData', JSON.stringify(userData));
            navigation.navigate('Note');
            //console.log('data sau khi luu: ', userData);
        } catch (error) {
            console.error('Loi khi luu du lieu: ', error);
        }
    }
    //navigation
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.txtWellcome}>Welcome to our application</Text>
            <View style={styles.AppNameContainer}>
                <Text style={styles.txtAppName}>MANAGE YOUR TASK</Text>
            </View>
            <View style={styles.containerLogin}>
                <View style={styles.inputContainer}>
                    <Icon style={styles.iconUserAndPassword} name="user" size={35} color="rgba(0,0,0,0.7)" />
                    <TextInput
                        style={styles.txtUserNameAndPassWord}
                        name='userName'
                        placeholder='User Name'
                        placeholderTextColor="rgba(0,0,0,0.7)"
                        onChangeText={(text) => setUserName(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon style={styles.iconUserAndPassword} name="lock" size={35} color="rgba(0,0,0,0.7)" />
                    <TextInput
                        style={styles.txtUserNameAndPassWord}
                        name='password'
                        placeholder='Password'
                        placeholderTextColor="rgba(0,0,0,0.7)"
                        secureTextEntry={!showPassword}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Icon style={styles.iconEye} name={showPassword ? 'eye' : 'eye-slash'} size={30} color="rgba(0,0,0,0.7)" />
                </TouchableOpacity>
                <View style={styles.forgotAndSignUp}>
                    <TouchableOpacity style={{ marginTop: 20 }}>
                        <Text style={{ color: 'rgba(0,0,0,0.7)', fontSize: 15, textDecorationLine: 'underline' }}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ color: 'rgba(0,0,0,0.7)', fontSize: 15, textDecorationLine: 'underline' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.btnGetStarted} onPress={handleLogin}>
                <Text style={styles.txtGetStarted}>Get Started <Icon style={{ left: 10 }} name='arrow-right' size={20} color={'#fff'} /></Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(151, 255, 255,0.7)',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    txtWellcome: {
        fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#A11417'
    },
    AppNameContainer: {
        width: '70%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
    },
    txtAppName: {
        fontFamily: 'Arial',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#8353E2',
        textAlign: 'center'
    },
    containerLogin: {
        marginTop: 100,
        width: '95%',
        borderWidth: 1,
        height: 200,
        borderColor: 'rgba(0,0,0,0.3)',
        borderRadius: 10,
        gap: 5,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    txtUserNameAndPassWord: {
        width: '95%',
        borderWidth: 1,
        height: 40,
        borderColor: 'rgba(0,0,0,0.3)',
        borderRadius: 50,
        marginTop: 20,
        padding: 10,
    },
    iconUserAndPassword: {
        top: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
        marginTop: 0,
        gap: 10
    },
    iconEye: {
        left: 130,
        top: -40,
        position: 'absolute',
    },
    forgotAndSignUp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        marginTop: 10,
    },
    btnGetStarted: {
        backgroundColor: 'rgba(0, 189, 214, 1)',
        width: '60%',
        height: 50,
        borderRadius: 50,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtGetStarted: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
})