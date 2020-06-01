import * as React from "react";
import { colors } from "../../styles";

import { createStackNavigator } from "@react-navigation/stack";

import pages from "../../pages/index";

const Stack = createStackNavigator();

export default function ProfileRoutes() {
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
        name="Profile"
        component={pages.ProfileTab.Profile}
        options={{
          title: "Perfil",
          headerTitleAlign: "center"
        }}
      />

      <Stack.Screen
        name="mapa"
        component={pages.ProfileTab.Mapa}
        options={{ title: "Mapa" }}
      />
      <Stack.Screen
        name="details"
        component={pages.ProfileTab.Details}
        options={{ title: "Details" }}
      />
      <Stack.Screen
        name="supply"
        component={pages.ProfileTab.Supply}
        options={{ title: "Supply" }}
      />
    </Stack.Navigator>
  );
}
