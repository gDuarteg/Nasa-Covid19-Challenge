import React from "react";
import Routes from "./src/routes/index";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import store from "./src/store/index";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Routes />
      </Provider>
    </NavigationContainer>
  );
}
