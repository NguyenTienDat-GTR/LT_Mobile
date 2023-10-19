import { StatusBar } from 'expo-status-bar';
import Reac, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View, Image, TouchableHighlight
} from 'react-native';

export default function App() {
  const [loginStatus, setLoginStatus] = useState(''); // Lưu trạng thái đăng nhập
  const [showPassword, setShowPassword] = useState('false'); // Lưu trạng thái hiển thị mật khẩu
  const arr = [
    { name: 'dat', password: '12345' },
    { name: 'teo', password: '123456' },
  ];

  const checkLogin = () => {
    const nameInput = document.getElementById('name').value;
    const passInput = document.getElementById('password').value;

    for (let i = 0; i < arr.length; i++) {
      if (nameInput === arr[i].name && passInput === arr[i].password) {
        alert('Login Success');
        return;
      }
    }
    alert('Login Failure');
  };
  return (
    <View style={styles.container}>
      <View style={styles.txtLogin}>
        <Text style={styles.txtLoginText}>LOGIN</Text>
      </View>
      <View style={styles.input}>
        <View style={styles.inputName}>
          <Image style={styles.imgName} source={require('./assets/avatar_user.png')} />
          <TextInput style={styles.txtName} id="name" placeholder='Name'></TextInput>
        </View>
        <View style={styles.inputPass}>
          <Image style={styles.imgLock} source={require('./assets/lock.png')} />
          <TextInput style={styles.txtPass} id="password" placeholder='Password' secureTextEntry={showPassword}></TextInput>
          <TouchableHighlight onPress={() => setShowPassword(!showPassword)}>
            <Image style={styles.imgEye} source={require('./assets/eye.png')} />
          </TouchableHighlight>
        </View>
        <TouchableHighlight style={styles.loginButton} onPress={checkLogin}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableHighlight>
        <View style={styles.txtForgot}>
          <text>FORGOT YOUR PASSWORD</text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(to bottom, #FBCB00, #BF9A00)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtLogin: {
    position: 'absolute',
    top: 130,
    left: 5,
  },
  txtLoginText: {
    fontFamily: 'Roboto',
    fontSize: 30,
    lineHeight: 35.16,
    fontWeight: 'bold',
  },
  input: {
    flex: 2,
    flexDirection: 'column',
    width: '100%',
    marginTop: 150,
    justifyContent: 'center',
  },
  inputName: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(242, 242, 242, 0.5)',
    width: '90%',
    height: 50,
    marginLeft: 20,
    border: '1px solid white',
  },
  imgName: {
    width: 40,
    height: 40,
  },
  txtName: {
    flex: 1,
    height: 50,
    marginLeft: 10,
  },
  inputPass: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(242, 242, 242, 0.5)',
    width: '90%',
    height: 50,
    marginTop: 30,
    marginLeft: 20,
    border: '1px solid white',
  },
  imgLock: {
    width: 40,
    height: 40,
    left: 2,
  },
  txtPass: {
    flex: 1,
    height: 50,
    marginLeft: 10,
  },
  imgEye: {
    width: 40,
    height: 40,
    left: -7,
  },
  loginButton: {
    width: '90%',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    marginLeft: 20,
  },
  loginButtonText: {
    fontFamily: 'Roboto',
    fontSize: 30,
    color: 'white',
  },
  txtForgot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'black',
    marginTop: 50,
    marginLeft: 20,
  }
});
