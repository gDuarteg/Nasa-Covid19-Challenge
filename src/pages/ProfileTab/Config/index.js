import React from "react";
import { Text, View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import styles from "./styles";

import { useSelector } from "react-redux";

export default function Config({ navigation }) {
  const user = useSelector(state => state.user);
  console.log();
  return (
    <View style={styles.page}>
      <Text>CONFIG</Text>
      <Text>{user.name}</Text>
    </View>
  );
}
