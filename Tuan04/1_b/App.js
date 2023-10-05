import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default function App() {
    return ( 
        <View style = { styles.container } >
            <View style={styles.gradient}>
                <ImageBackground source={require('./assets/lock-152879 1.png')} style={styles.lock_icon}/>
                <View style={styles.title}>
                    <text>FORGET</text>
                    <text>PASSWORRD</text>
                </View>
                <View style={styles.slogan}>
                    <text>Provide your account’s email for which you</text>
                    <text>want to reset your password</text>
                </View>
                <View style={styles.email}>
                  <input style={styles.inputEmail} type="text"/>
                  <img src={require('./assets/mail-2935365 1.png')} style={styles.imgEmail} />
                  <text style={styles.textEmail}>Email</text>
                </View>
                <View style={styles.buttonContainer}>
                   <button style={styles.buttonNext} type='submit'>NEXT</button>
                </View>
               
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
    gradient: {
        flex: 5,
        width: '100%',
        backgroundImage: 'linear-gradient(to bottom, #C7F4F6, #D1F4F6, #E5F4F5, #00CCF9)',
        //alignItems: 'center',
        justifyContent: 'space-around',
      },
    lock_icon:{
        width: '140px',
        height: '150px',
        top: '80px',
        left: '120px',
    },
    title:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Roboto',
        fontSize: '30px',
        fontWeight: 'bold',
        marginTop: '80px',
    },
    slogan:{
        flex: 1,
        alignItems: 'center',
        fontFamily: 'Roboto',
        fontSize: '17px',
        fontWeight: 'bold',
        height:'30px',
        //marginTop: '50px',
    },
    email:{
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        marginTop: '-30px',
    },
    inputEmail:{
        fontFamily: 'Roboto',
        fontSize: '17px',
        fontWeight: 'bold',
        height:'50px',
        width:'80%',
        backgroundColor: '#C4C4C4',
        border:'none'
    },
    imgEmail:{
        width: '50px',
        height: '50px',
        position: 'absolute',
        left: 50,
    },
    textEmail:{
      fontFamily: 'Roboto',
      fontSize: '17px',
      fontWeight: 'bold',
      position: 'absolute',
      left: 100,
      top: 15,
    },
    buttonContainer:{
      flex: 1,
      alignItems: 'center',
      marginTop: '-20px',
    },
    buttonNext:{
      border: 'none',
      width: '80%',
      height: '50px',
      backgroundColor:'#E3C000',
      fontFamily: 'Roboto',
      fontSize: '20px',
      fontWeight: 'bold',
    },
});