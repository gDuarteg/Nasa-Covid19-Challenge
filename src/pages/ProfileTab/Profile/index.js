import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView, Image, FlatList } from "react-native";
import styles from "./styles";

import api from "../../../services/api";
// import { useSelector } from "react-redux";

export default function Profile({ navigation }) {
  return (
    <View style={styles.page}>
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => {
            navigation.navigate("mapa");
          }}
        >
          <Image
            style={styles.icon}
            source={require("../../../assets/notification.png")}
          />
          <Text style={styles.itemText}>Map</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => {
            navigation.navigate("supply");
          }}
        >
          <Image
            style={styles.icon}
            source={require("../../../assets/collection.png")}
          />
          <Text style={styles.itemText}>Supply</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => {
          }}
        >
          <Image
            style={styles.icon}
            source={require("../../../assets/config.png")}
          />
          <Text style={styles.itemText}>Others</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
