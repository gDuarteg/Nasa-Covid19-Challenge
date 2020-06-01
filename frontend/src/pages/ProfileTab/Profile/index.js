import React from "react";
import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import styles from "./styles";

import { useSelector } from "react-redux";

export default function Profile({ navigation }) {
  const user = useSelector(state => state.user);
  console.log();
  return (
    <View style={styles.page}>
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => {
          navigation.navigate("ProfileConfig");
        }}
      >
        <Image
          style={styles.profileIcon}
          source={require("../../../assets/profile.png")}
        />
        <Text style={styles.profileText}>{user.name}</Text>
      </TouchableOpacity>

      <ScrollView style={styles.body}>
        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => {
            navigation.navigate("Notification");
          }}
        >
          <Image
            style={styles.icon}
            source={require("../../../assets/notification.png")}
          />
          <Text style={styles.itemText}>NOTIFICAÇÕES</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => {
            navigation.navigate("Wallet");
          }}
        >
          <Image
            style={styles.icon}
            source={require("../../../assets/wallet.png")}
          />
          <Text style={styles.itemText}>CARTEIRA</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => {
            navigation.navigate("PaymentConfig");
          }}
        >
          <Image
            style={styles.icon}
            source={require("../../../assets/wallet.png")}
          />
          <Text style={styles.itemText}>PAGAMENTOS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => {
            navigation.navigate("Collection");
          }}
        >
          <Image
            style={styles.icon}
            source={require("../../../assets/collection.png")}
          />
          <Text style={styles.itemText}>COLEÇÃO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => {
            navigation.navigate("Config");
          }}
        >
          <Image
            style={styles.icon}
            source={require("../../../assets/config.png")}
          />
          <Text style={styles.itemText}>CONFIGURAÇÕES</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.itemText}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
