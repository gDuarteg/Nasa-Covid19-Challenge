import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";
import { colors } from "../../styles";

import { createStackNavigator } from "@react-navigation/stack";

import pages from "../../pages/index";
import QRScanner from "../../components/QRscanner";

const Stack = createStackNavigator();

export default function OrderRoutes({ navigation }) {
  const product = useSelector(state => state.product);
  const order = useSelector(state => state.order);

  function renderCartLen() {
    if (order.len > 0) {
      return (
        <View style={styles.cartLenView}>
          <Text style={styles.cartLen}>{order.len}</Text>
        </View>
      );
    }
  }

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
        name="Home"
        component={pages.OrderTab.Home}
        options={{
          title: "Bytes Home",
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="Menu"
        component={pages.OrderTab.Menu}
        options={{
          title: "Menu Bytes",
          headerRight: () => (
            <TouchableOpacity
              style={styles.cartButton}
              onPress={() => {
                navigation.navigate("Order");
              }}
            >
              <Image
                style={styles.imgCart}
                source={require("../../assets/cart.png")}
              />
              {renderCartLen()}
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name="Product"
        component={pages.OrderTab.Product}
        options={{
          title: product.name,
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="Order"
        component={pages.OrderTab.Order}
        options={{ title: "Pedido" }}
      />
      <Stack.Screen
        name="Payment"
        component={pages.OrderTab.Payment}
        options={{ title: "Pagamento" }}
      />
      <Stack.Screen
        name="QRScanner"
        component={QRScanner}
        options={{ title: "Escanei o código QR" }}
      />
      <Stack.Screen
        name="TrackOrder"
        component={pages.OrderTab.TrackOrder}
        options={{ title: "Acompanhar pedido" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  imgCart: {
    height: 35,
    width: 35
  },
  cartButton: {
    position: "absolute",
    right: 20
  },
  cartLen: {
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold"
  },
  cartLenView: {
    position: "absolute",
    right: -5,
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 20
  }
});
