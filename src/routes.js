import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { colors } from "./styles";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//COMPONENTS

// AUTH PAGES
import Login from "./pages/login";
import createAccount from "./pages/createAccount";
import forgotPassword from "./pages/forgotPassword";

// ORDER PAGES
import Home from "./pages/home";
import Menu from "./pages/menu";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Payment from "./pages/payment";
import trackOrder from "./pages/trackOrder";

// PROFILE PAGES
import Profile from "./pages/ProfileTab/Profile";
import Collection from "./pages/ProfileTab/Collection";
import Config from "./pages/ProfileTab/Config";
import Notification from "./pages/ProfileTab/Notification";
import PaymentConfig from "./pages/ProfileTab/PaymentConfig";
import ProfileConfig from "./pages/ProfileTab/ProfileConfig";
import Wallet from "./pages/ProfileTab/Wallet";
import { red } from "color-name";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  const product = useSelector(state => state.product);
  const cart = useSelector(state => state.cart);

  function renderCartLen() {
    if (cart.len > 0) {
      return (
        <View style={styles.cartLenView}>
          <Text style={styles.cartLen}>{cart.len}</Text>
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
        component={Home}
        options={{
          title: "Bytes Home",
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          title: "Menu Bytes",
          headerRight: () => (
            <TouchableOpacity
              style={styles.cartButton}
              onPress={() => {
                navigation.navigate("Cart");
              }}
            >
              <Image
                style={styles.imgCart}
                source={require("./assets/cart.png")}
              />
              {renderCartLen()}
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{
          title: product.name,
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ title: "Pedido" }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ title: "Pagamento" }}
      />
      <Stack.Screen
        name="TrackOrder"
        component={trackOrder}
        options={{ title: "Acompanhar pedido" }}
      />
    </Stack.Navigator>
  );
}
function ProfileScreen() {
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
        component={Profile}
        options={{
          title: "Perfil",
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{ title: "Carteira" }}
      />
      <Stack.Screen
        name="Collection"
        component={Collection}
        options={{ title: "Coleção" }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ title: "Notificações" }}
      />
      <Stack.Screen
        name="PaymentConfig"
        component={PaymentConfig}
        options={{ title: "Formas de Pagamento" }}
      />
      <Stack.Screen
        name="ProfileConfig"
        component={ProfileConfig}
        options={{ title: "Editar Dados" }}
      />
      <Stack.Screen name="Config" component={Config} />
    </Stack.Navigator>
  );
}

function Root() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Início") {
            iconName = focused ? "ios-home" : "ios-home";
          } else if (route.name === "Perfil") {
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
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={forgotPassword} />
      <Stack.Screen name="CreateAccount" component={createAccount} />
      <Stack.Screen name="Root" component={Root} />
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
