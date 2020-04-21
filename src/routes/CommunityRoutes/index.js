import * as React from "react";

import pages from "../../pages/index";
import colors from "../../styles/colors";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function CommunityRoutes() {
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
        name="Feed"
        component={pages.CommunityTab.Feed}
        options={{ title: "Feed" }}
      />
      <Stack.Screen
        name="ChefProfile"
        component={pages.CommunityTab.ChefProfile}
        options={{ title: "Perfil Chef" }}
      />
      <Stack.Screen
        name="ProductProfile"
        component={pages.CommunityTab.ProductProfile}
        options={{ title: "Perfil Produto" }}
      />
    </Stack.Navigator>
  );
}
