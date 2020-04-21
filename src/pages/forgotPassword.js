import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity
} from "react-native";

import * as actions from "../store/actions/user";
import { useSelector, useDispatch } from "react-redux";
import { colors } from "../styles";

//import auth from "../services/api";

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState("");

  async function sendEmail() {
    // const response = await auth.post("/forgotPassword", {
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
    <ScrollView style={styles.scrollView}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.loginBackground
  },
  body: {
    justifyContent: "center",
    alignSelf: "center",
    maxWidth: 200,
    marginTop: 70
  },
  title: {
    color: colors.title,
    fontSize: 50,
    fontFamily: "Roboto",
    marginVertical: 100,
    textAlign: "center",
    fontWeight: "bold"
  },
  TextInput: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    marginTop: 10
  },
  button: {
    fontSize: 20,
    textAlign: "center",
    color: colors.buttonText,
    fontWeight: "bold"
  },
  viewButton: {
    justifyContent: "center",
    backgroundColor: colors.buttonBackgrond,
    borderRadius: 8,
    width: 200,
    height: 50,
    marginTop: 10
  }
});
