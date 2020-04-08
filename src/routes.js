import * as React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//COMPONENTS

// PAGES
import Login from "./pages/login";
import createAccount from "./pages/createAccount";
import forgotPassword from "./pages/forgotPassword";

import Home from "./pages/home";
import Menu from "./pages/menu";
import Product from "./pages/product";
import Cart from "./pages/cart";
import payment from "./pages/payment";
import trackOrder from "./pages/trackOrder";

import Profile from "./pages/profile";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Payment" component={payment} />
      <Stack.Screen name="TrackOrder" component={trackOrder} />
    </Stack.Navigator>
  );
}
function ProfileScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      {/* <Stack.Screen name="Wallet" component={Cart} />
      <Stack.Screen name="PaymentConfig" component={payment} />
      <Stack.Screen name="Config" component={trackOrder} /> */}
    </Stack.Navigator>
  );
}

function Root() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Início") {
            iconName = focused ? "ios-home" : "ios-home";
          } else if (route.name === "Perfil") {
            iconName = focused ? "ios-person" : "ios-person";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={forgotPassword} />
      <Stack.Screen name="CreateAccount" component={createAccount} />
      <Stack.Screen name="Root" component={Root} />
    </Stack.Navigator>
  );
}
