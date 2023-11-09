import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screen1'
import Screen2 from './Screen2'
export default function App() {


  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='main' screenOptions={{headerShown:false}}>
        <Stack.Screen name="main" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

