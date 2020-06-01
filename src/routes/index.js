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

          if (route.name === "Market") {
            iconName = focused ? "ios-home" : "ios-home";
          } else if (route.name === "Consulting") {
            iconName = focused ? "ios-document" : "ios-document";
          } else if (route.name === "Profile") {
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
      <Tab.Screen name="Profile" component={ProfileRoutes} />
      <Tab.Screen name="Market" component={OrderRoutes} />
      <Tab.Screen name="Consulting" component={OrderHistoryRoutes} />
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
