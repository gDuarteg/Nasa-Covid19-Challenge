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

//import api from "../services/api";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("tokenSECRETO");

  function postUser() {
    console.log(email + " " + password);

    // const response = await api.post("/auth/login", {
    //   email: email,
    //   password: password
    // });

    if (email === "admin" && password === "admin") {
      navigation.navigate("Home", { token: token });
    } else {
      Alert.alert("Senha Incorreta");
    }
  }
  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <Text style={styles.title}>Bytes</Text>
      </View>
      <View style={styles.body}>
        <View>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => {
            postUser();
          }}
        >
          <Text style={styles.button}>Entrar</Text>
        </TouchableOpacity>
        <View>
          <Text
            style={styles.forgotPassword}
            onPress={() => {
              Alert.alert("Já era");
              //this.props.navigation.navigate('ForgotPassword');
            }}
          >
            Esqueci Minha Senha
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 49,
    flex: 1,
    backgroundColor: "steelblue"
  },
  body: {
    justifyContent: "center",
    alignSelf: "center",
    maxWidth: 200,
    marginTop: 70
  },
  title: {
    fontSize: 50,
    fontFamily: "Roboto",
    marginVertical: 100,
    textAlign: "center",
    fontWeight: "bold"
  },
  TextInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 10
  },
  button: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  },
  viewButton: {
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 8,
    width: 200,
    height: 50,
    marginTop: 10
  },
  forgotPassword: {
    color: "black",
    textAlign: "center",
    marginTop: 5
  }
});
