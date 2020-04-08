import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity
} from "react-native";

import { useSelector } from "react-redux";

export default function Profile({ navigation }) {
  const user = useSelector(state => state.user);

  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  );
}
