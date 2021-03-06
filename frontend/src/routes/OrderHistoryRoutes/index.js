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
        name="Pedidos"
        component={pages.OrderHistoryTab.Finalized}
        options={{ title: "Finalizados" }}
      />
      <Stack.Screen
        name="Produto"
        component={pages.OrderHistoryTab.InProgress}
        options={{ title: "Em Andamento" }}
      />
    </Stack.Navigator>
  );
}
