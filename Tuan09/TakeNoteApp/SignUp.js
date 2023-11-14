import React from 'react';
import {
    StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function SignUp() {
    const navigation = useNavigation();

    const [showPassword, setShowPassword] = useState(false);// show password
    // set show password
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    //post data to api
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const postData = async () => {
        try {
            const response = await fetch('https://6544382b5a0b4b04436c2915.mockapi.io/TakeNoteApp');
            if (!response.ok) {
                throw new Error('Loi khi ket noi mang');
            } else {
                const jsonData = await response.json();
                const updatedData = [
                    ...jsonData,
                    {
                        firstname: firstName,
                        lastname: lastName,
                        username: userName,
                        password: password
                    }
                ];

                const postResponse = await fetch('https://6544382b5a0b4b04436c2915.mockapi.io/TakeNoteApp', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        firstname: firstName,
                        lastname: lastName,
                        username: userName,
                        password: password
                    })
                });

                if (!postResponse.ok) {
                    throw new Error('Loi khi ket noi mang');
                } else {
                    const postData = await postResponse.json();
                    // Lưu dữ liệu vào AsyncStorage
                    await AsyncStorage.setItem('userData', JSON.stringify(updatedData));
                    console.log('Data sau khi post:', updatedData);
                    setIsSignUpSuccessful(true);
                }
            }
        } catch (error) {
            console.error('Loi khi post du lieu: ', error);
        }
    };


    //check confirm password
    const checkConfirmPassword = () => {
        if (password === confirmPassword) {
            //alert('Confirm password success');
            return true;
        } else {
            alert('Confirm password fail');
            return false;
        }
    }

    //check sign up success
    const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);

    //check trùng username
    const checkUserName = async () => {
        try {
            const respone = await fetch('https://6544382b5a0b4b04436c2915.mockapi.io/TakeNoteApp');
            if (!respone.ok) {
                throw new Error('Loi khi ket noi mang');
            }
            else {
                const jsonData = await respone.json();
                const user = jsonData.find(item => item.username === userName);
                if (user) {
                    alert('User name is already taken');
                    return false;
                }
                else {
                    return true;
                }

            }
        }
        catch (error) {
            console.error('Loi khi tai du lieu: ', error);
        }
    }
    //gửi dữ liệu api mới nhất về trang login
    const sendLastestDataToLogin = async () => {
        try {
            const response = await fetch('https://6544382b5a0b4b04436c2915.mockapi.io/TakeNoteApp');
            if (!response.ok) {
                throw new Error('Loi khi ket noi mang');
            } else {
                const jsonData = await response.json();
                navigation.navigate('main', { LatestData: jsonData });
            }
        } catch (error) {
            console.error('Loi khi tai du lieu: ', error);
        }
    }

    const handleSignUp = async () => {
        if (checkUserName() && checkConfirmPassword()) {
            postData().then(() => {
                sendLastestDataToLogin(); // Gửi dữ liệu mới nhất về trang login sau khi đăng ký thành công
                alert('Sign Up success');
            }).catch(error => {
                console.error('Error during signup:', error);
                alert('Sign Up fail');
            });
        }
        else {
            alert('Sign Up fail');
        }
    }
    useEffect(() => {
        if (isSignUpSuccessful) {
            navigation.navigate('main');
        }
    }, [isSignUpSuccessful]);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ height: 30, alignItems: 'flex-start', left: -170, top: 10 }}
                onPress={() => navigation.goBack()}>
                <Icon name='arrow-left' size={40} color={'rgba(0,0,0,0.8)'} />
            </TouchableOpacity>
            <View style={styles.containerSignUp}>
                <Text style={styles.txtSignUpTitle}>Sign Up Form</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.lable}>First Name:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="First Name"
                        placeholderTextColor="rgba(0,0,0,0.6)"
                        onChangeText={(value) => setFirstName(value)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.lable}>Last Name:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Last name"
                        placeholderTextColor="rgba(0,0,0,0.6)"
                        onChangeText={(value) => setLastName(value)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.lable}>User Name:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="User Name"
                        placeholderTextColor="rgba(0,0,0,0.6)"
                        onChangeText={(value) => setUserName(value)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.lable}>Password:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="rgba(0,0,0,0.6)"
                        secureTextEntry={!showPassword}
                        onChangeText={(value) => setPassword(value)}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Icon style={styles.iconEye} name={showPassword ? 'eye' : 'eye-slash'} size={30} color="rgba(0,0,0,0.7)" />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.lable}>Confirm Password:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        placeholderTextColor="rgba(0,0,0,0.6)"
                        secureTextEntry={!showPassword}
                        onChangeText={(value) => setConfirmPassword(value)}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Icon style={styles.iconEye} name={showPassword ? 'eye' : 'eye-slash'} size={30} color="rgba(0,0,0,0.7)" />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.btnSignUp} onPress={handleSignUp}>
                <Text style={styles.txtSignUp}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(151, 255, 255,0.7)',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    containerSignUp: {
        width: '95%',
        height: 500,
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255,1)',
        borderRadius: 20,
        top: 30,
        padding: 5,
    },
    txtSignUpTitle: {
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    inputContainer: {
        width: '100%',
        height: 50,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 30,
    },
    input: {
        width: '90%',
        borderWidth: 1,
        height: 40,
        borderColor: 'rgba(0,0,0,0.3)',
        borderRadius: 50,
        marginTop: 5,
        padding: 10,
        marginLeft: 15,
    },
    lable: {
        fontFamily: 'Roboto',
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 20,
    },
    btnSignUp: {
        width: '60%',
        height: 50,
        backgroundColor: 'rgba(0, 189, 214, 1)',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    txtSignUp: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
    },
    iconEye: {
        left: 300,
        top: -35,
        position: 'absolute',
    },
});