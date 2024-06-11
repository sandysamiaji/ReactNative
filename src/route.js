import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Create from './screens/firebase/create';
import Update from './screens/firebase/update';
import Home from './screens/firebase/index';

const Stack = createNativeStackNavigator();
const RouterApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Create'} component={Create} />
        <Stack.Screen name={'Update'} component={Update} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterApp;
