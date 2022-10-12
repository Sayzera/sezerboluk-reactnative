import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import DetailScreen from '../screens/ProductDetail';
import CreateProduct from '../screens/CreateProduct';
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen
          name="CreateProduct"
          component={CreateProduct}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
