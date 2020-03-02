import * as React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/login";
import Home from "./pages/home";
import Menu from "./pages/menu";
// import Product from "./pages/product";
// import Cart from "./pages/cart";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" component={Menu} />
      {/* <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Cart" component={Cart} /> */}
    </Stack.Navigator>
  );
}
