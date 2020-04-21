import * as React from "react";

import pages from "../../pages/index";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function LoginRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={pages.LoginScreens.Login} />
      <Stack.Screen
        name="ForgotPassword"
        component={pages.LoginScreens.ForgotPassword}
      />
      <Stack.Screen
        name="CreateAccount"
        component={pages.LoginScreens.CreateAccount}
      />
    </Stack.Navigator>
  );
}
