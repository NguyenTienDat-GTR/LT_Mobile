import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default function App() {
    return ( 
        <View style = { styles.container } >
            <View style={styles.gradient}>
                <ImageBackground source={require('./assets/Ellipse8.png')} style={styles.ellipse}/>
                <View style={styles.title}>
                    <text>GROW</text>
                    <text>YOUR BUSINESS</text>
                </View>
                <View style={styles.slogan}>
                    <text>We will help you to grow your business using</text>
                    <text>online server</text>
                </View>
                <View style={styles.btnGroup}>
                    <button style={styles.buttonLogin} type = 'submit'>LOGIN</button>
                    <button style={styles.buttonSignUp} type = 'submit'>SIGN UP</button>
                </View>
                <View style={styles.textHWW}>
                  <text>HOW WE WORK?</text>
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
    ellipse:{
        width: '140px',
        height: '140px',
        top: '105px',
        left: '120px',
    },
    title:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Roboto',
        fontSize: '30px',
        fontWeight: 'bold',
        marginTop: '150px',
    },
    slogan:{
        flex: 1,
        alignItems: 'center',
        fontFamily: 'Roboto',
        fontSize: '17px',
        fontWeight: 'bold',
        height:'30px',
        marginTop: '50px',
    },
    btnGroup:{
        flex:2,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: '30px'
    },
    buttonLogin:{
        border: 'none',
        borderRadius: '10px',
        width: '100px',
        height: '50px',
        backgroundColor:'yellow',
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    buttonSignUp:{
        border: 'none',
        borderRadius: '10px',
        width: '100px',
        height: '50px',
        backgroundColor:'yellow',
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    textHWW:{
      flex: 1,
      alignItems: 'center',
      fontFamily: 'Roboto',
      fontSize: '25px',
      fontWeight: 'bold',
    }
});