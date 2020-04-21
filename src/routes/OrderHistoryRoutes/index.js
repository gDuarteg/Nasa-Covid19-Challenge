import * as React from "react";

import pages from "../../pages/index";
import colors from "../../styles/colors";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

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
        name="Finalized"
        component={pages.CommunityTab.Feed}
        options={{ title: "Finalizados" }}
      />
      <Stack.Screen
        name="InProgress"
        component={pages.CommunityTab.ChefProfile}
        options={{ title: "Em Andamento" }}
      />
    </Stack.Navigator>
  );
}
