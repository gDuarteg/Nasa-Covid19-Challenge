import React, { useState } from "react";
import { Text, View, Alert, TouchableOpacit, TextInput } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

import api from "../../../services/api";

export default function Calculator({ navigation }) {
  const [area, setArea] = useState(0);
  const [wheight, setWheight] = useState(0);
  const [typeOfArea, setTypeOfArea] = useState("");
  const [typeOfTerrain, setTypeOfTerrain] = useState("");
  const [typeOfSeed, setTypeOfSeed] = useState("");

  const [response, setResponse] = useState("");

  async function sendCheck() {
    try {
      const res = await api.api.post("/producer/calculator", {
        "user": "andre",
        "sample_area": area,
        "wheight": wheight,
        "area": typeOfArea
      });
      console.log(res.data.body)
      setResponse(res.data.body);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Enter your information to calculate how much you should earn </Text>
      <View style={styles.body}>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.TextInput}
            keyboardType={"numeric"}
            placeholder="Area (m^2)"
            onChangeText={text => setArea(text)}
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.TextInput}
            keyboardType={"numeric"}
            placeholder="Wheight"
            onChangeText={text => setWheight(text)}
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.TextInput}
            placeholder="Type of area"
            onChangeText={text => setTypeOfArea(text)}
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.TextInput}
            placeholder="Type of Terrain"
            onChangeText={text => setTypeOfTerrain(text)}
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.TextInput}
            placeholder="Type of seed"
            onChangeText={text => setTypeOfSeed(text)}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.checkButton}
        onPress={() => {
          sendCheck();
        }}
      >
        <Text style={styles.checkText}>Check</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Profit: {response} kg/ha</Text>
    </View>
  );
}
