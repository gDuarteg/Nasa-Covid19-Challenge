import * as React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/login";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Product from "./pages/product";
import Cart from "./pages/cart";
import forgotPassword from "./pages/forgotPassword";
// import trackOrder from "./pages/trackOrder";
// import payment from "./pages/payment";

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
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="ForgotPassword" component={forgotPassword} />
      {/* <Stack.Screen name="TrackOrder" component={trackOrder} />
      <Stack.Screen name="Payment" component={payment} /> */}
    </Stack.Navigator>
  );
}
