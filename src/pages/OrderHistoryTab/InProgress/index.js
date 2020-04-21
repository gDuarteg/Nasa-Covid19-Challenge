import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

import { useSelector } from "react-redux";

export default function InProgress({ navigation }) {
  const user = useSelector(state => state.user);
  console.log();
  return (
    <View style={styles.page}>
      <Text>em progresso</Text>
      <Text>{user.name}</Text>
    </View>
  );
}
