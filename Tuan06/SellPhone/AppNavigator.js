import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import mainScreen from './mainScreen';
import pickColor from './pickColor';

const Stack = createStackNavigator();

const appNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="First"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="main" component={mainScreen} />
        {/* Để thêm SecondScreen, bạn có thể sử dụng tương tự */}
        <Stack.Screen name="pickColor" component={pickColor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default appNavigator;


