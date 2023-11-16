import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screen1'
import SignUp from './SignUp'
import Note from './Note'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from 'react-native';
export default function App() {


  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='main' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="main" component={Screen1} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Note" component={Note} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

