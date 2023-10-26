import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen01 from './Screen01';
import Screen02 from './Screen02';
import Screen03 from './Screen03';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="main" component={Screen01} />
        <Stack.Screen name="pickBike" component={Screen02} />
        <Stack.Screen name="bikeDetail" component={Screen03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;


