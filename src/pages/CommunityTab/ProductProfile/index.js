import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

import { useSelector } from "react-redux";

export default function ProductProfile({ navigation }) {
  const user = useSelector(state => state.user);
  return (
    <View style={styles.page}>
      <Text>ProductProfile</Text>
      <Text>{user.name}</Text>
    </View>
  );
}
