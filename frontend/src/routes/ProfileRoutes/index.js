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
        name="Wallet"
        component={pages.ProfileTab.Wallet}
        options={{ title: "Carteira" }}
      />
      <Stack.Screen
        name="Collection"
        component={pages.ProfileTab.Collection}
        options={{ title: "Coleção" }}
      />
      <Stack.Screen
        name="Notification"
        component={pages.ProfileTab.Notification}
        options={{ title: "Notificações" }}
      />
      <Stack.Screen
        name="PaymentConfig"
        component={pages.ProfileTab.PaymentConfig}
        options={{ title: "Formas de Pagamento" }}
      />
      <Stack.Screen
        name="ProfileConfig"
        component={pages.ProfileTab.ProfileConfig}
        options={{ title: "Editar Dados" }}
      />
      <Stack.Screen
        name="Config"
        component={pages.ProfileTab.Config}
        options={{ title: "Configurações" }}
      />
    </Stack.Navigator>
  );
}
