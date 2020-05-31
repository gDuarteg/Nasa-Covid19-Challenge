import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import OrderRoutes from "./OrderRoutes";
import ProfileRoutes from "./ProfileRoutes";
import OrderHistoryRoutes from "./OrderHistoryRoutes";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Início") {
            iconName = focused ? "ios-home" : "ios-home";
          } else if (route.name === "Pedidos") {
            iconName = focused ? "ios-reorder" : "ios-reorder";
          } else if (route.name === "Perfil") {
            iconName = focused ? "ios-person" : "ios-person";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: colors.tabSelect,
        inactiveTintColor: colors.tabItem
      }}
    >
      <Tab.Screen name="Pedidos" component={OrderHistoryRoutes} />
      <Tab.Screen name="Início" component={OrderRoutes} />
      <Tab.Screen name="Perfil" component={ProfileRoutes} />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <Stack.Navigator
      // initialRouteName=""
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Root" component={Root} />
    </Stack.Navigator>
  );
}
export default Routes;
