import React from "react";
import { Text, View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import styles from "./styles";

import { useSelector } from "react-redux";

export default function PaymentConfig({ navigation }) {
  const user = useSelector(state => state.user);
  console.log();
  return (
    <View style={styles.page}>
      <Text>CONFIGURAÇÕES DE PAGAMENTO</Text>
      <Text>{user.name}</Text>
    </View>
  );
}
