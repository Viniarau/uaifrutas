import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabNavigator from '../components/TabNavigator';

import AuthLoadingScreen from '../views/AuthLoading';
import LoginView from '../views/Login';
import HomeView from '../views/Home';
import {LAYOUT} from '../constants/app';
import AdvertsView from '../views/adverts';
import CartView from '../views/cart';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  initialStack = () => (
    <Stack.Navigator initialRouteName="authLoading">
      <Stack.Screen
        name="authLoading"
        component={AuthLoadingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );

  bottomTabNavigator = () => (
    <Tab.Navigator
      initialRouteName="home"
      tabBar={props => <TabNavigator {...props} />}>
      <Tab.Screen
        name="adverts"
        component={AdvertsView}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="home"
        component={HomeView}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartView}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );

  homeStack = () => (
    <Stack.Navigator
      children={this.bottomTabNavigator}
      initialRouteName="authLoading">
      <Stack.Screen
        name="authLoading"
        component={AuthLoadingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        component={LoginView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="home"
        component={this.bottomTabNavigator}
        options={{
          title: 'HOME',
          headerStyle: {
            backgroundColor: LAYOUT.COLORS.primary,
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          },
        }}
      />
    </Stack.Navigator>
  );

  render() {
    return <NavigationContainer>{this.homeStack()}</NavigationContainer>;
  }
}

export default App;
