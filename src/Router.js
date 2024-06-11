//import React from 'react';
////import { NavigationContainer } from '@react-navigation/native';
//import Home from './screens/Home';
//import List from './screens/List';
//import {NavigationContainer} from '@react-navigation/native';
////import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {createDrawerNavigator} from '@react-navigation/drawer';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//
//const Drawer = createBottomTabNavigator();
//
//const Router = () => {
//  return (
//    <NavigationContainer>
//      <Drawer.Navigator>
//        <Drawer.Screen name="Home" component={Home} />
//        <Drawer.Screen name="List" component={List} />
//      </Drawer.Navigator>
//    </NavigationContainer>
//  );
//};
//
//export default Router;

//import  from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Screen...
import SettingScreen from './screens/SettingScreen';
import UserScreen from './screens/SettingScreen/UserScreen';
import Home from './screens/HomeScreen/';
import Detail from './screens/HomeScreen/DetailItem';
import Setting from './screens/SettingScreen/';
import User from './screens/SettingScreen/UserScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const RouterApp = () => {
  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name={'List Course'} component={Home} />
        <Stack.Screen name={'Detail Item'} component={Detail} />
      </Stack.Navigator>
    );
  };

  const SettingStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name={'Setting'} component={Setting} />
        <Stack.Screen name={'User'} component={User} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarStyle: {
            height: 70,
            paddingBottom: 10,
            paddingTop: 5,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarActiveTintColor: 'violet',
        })}>
        <Tab.Screen
          name={'Home'}
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <AntIcon name="home" color={color} size={focused ? 24 : 20} />
            ),
          }}
        />
        <Tab.Screen
          name={'Settings'}
          component={SettingStack}
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <AntIcon name="setting" color={color} size={focused ? 24 : 20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RouterApp;
