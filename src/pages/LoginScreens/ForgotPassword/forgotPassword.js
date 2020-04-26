import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity
} from "react-native";

import styles from "./styles";
//import api from "../../../services/api";

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState("");

  async function sendEmail() {
    // const response = await api.auth.post("/forgotPassword", {
    //   email: email,
    // });
    const response = {
      status: "success"
    };
    if (response.status === "success") {
      Alert.alert("Enviamos a senha para o seu email !!!");
    } else {
      Alert.alert("Email não encontrado !!!");
    }
  }
  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.title}>Esqueceu sua senha?</Text>
      </View>
      <View style={styles.body}>
        <View>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => {
            sendEmail();
          }}
        >
          <Text style={styles.button}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
