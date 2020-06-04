import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import Dashboard from './Dashboard';
import ServiceDetails from './ServiceDetails';
import AdminLogin from './Admin/Login';
import AdminDashboard from './Admin/Dashboard';
import AdminService from './Admin/Services';
import AdminServiceDetails from './Admin/ServiceDetails';
import Order from './Order';
import OrderStatus from './OrderStatus';

const Stack = createStackNavigator();

export default function AppRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashborad" component={Dashboard} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="OrderStatus" component={OrderStatus} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="AdminService" component={AdminService} />
        <Stack.Screen
          name="AdminServiceDetails"
          component={AdminServiceDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
