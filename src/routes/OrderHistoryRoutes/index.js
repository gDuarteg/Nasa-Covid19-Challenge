import * as React from "react";

import pages from "../../pages/index";
import colors from "../../styles/colors";
import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

export default function OrderHistoryRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.headerBackground
        },
        headerTintColor: colors.headerText,
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }}
    >
      <Stack.Screen
        name="Calculator"
        component={pages.OrderHistoryTab.Calculator}
        options={{ title: "Consulting" }}
      />
      <Stack.Screen
        name="Produtos"
        component={pages.OrderHistoryTab.InProgress}
        options={{ title: "Produto" }}
      />
    </Stack.Navigator>
  );
}
