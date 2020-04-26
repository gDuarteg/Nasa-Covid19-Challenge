import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity
} from "react-native";

import styles from "./styles";
import api from "../../../services/api";
import * as actions from "../../../store/actions/user";
import { useSelector, useDispatch } from "react-redux";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  async function logUser() {
    try {
      const response = await api.auth.post("/login", {
        email: email,
        password: password
      });
      if (response.data.status === "success") {
        dispatch({ type: actions.SAVE_EMAIL, payload: email });
        dispatch({ type: actions.SAVE_PASSWORD, payload: password });
        dispatch({
          type: actions.ACTIVE_TOKEN,
          payload: response.data.data.token_id
        });
        navigation.navigate("Root");
      } else {
        dispatch({ type: actions.INVALID_TOKEN });
        Alert.alert("Usuario ou senha incorretos !!!");
      }
    } catch (error) {
      console.log(error);
    }
  }
  // function isSingedIn() {
  // const response = await api.auth.post("/auth/login", {
  //   email: email,
  //   password: password
  // });
  //   const response = "ok";
  //   if () {}
  // }

  return (
    <View style={styles.scrollView}>
      <View>
        <Text style={styles.title}>Bytes</Text>
      </View>
      <View style={styles.body}>
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
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => {
            navigation.navigate("Root"); // REMOVE
            logUser();
          }}
        >
          <Text style={styles.button}>Entrar</Text>
        </TouchableOpacity>
        <View>
          <Text
            style={styles.loginOptionsText}
            onPress={() => {
              navigation.navigate("CreateAccount");
            }}
          >
            Criar Conta
          </Text>
          <Text
            style={styles.loginOptionsText}
            onPress={() => {
              navigation.navigate("ForgotPassword");
            }}
          >
            Esqueci Minha Senha
          </Text>
        </View>
      </View>
    </View>
  );
}
