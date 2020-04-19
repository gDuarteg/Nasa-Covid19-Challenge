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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import * as actions from "../store/actions/user";
import { useSelector, useDispatch } from "react-redux";

import { colors } from "../styles";

//import api from "../services/api";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  async function postUser() {
    // const response = await api.post("/auth/login", {
    //   email: email,
    //   password: password
    // });
    const response = "Approved Token";

    if (email === "admin" && password === "admin") {
      dispatch({ type: actions.SAVE_EMAIL, payload: email });
      dispatch({ type: actions.SAVE_PASSWORD, payload: password });
      dispatch({ type: actions.ACTIVE_TOKEN, payload: response });
      navigation.navigate("Root");
    } else {
      dispatch({ type: actions.INVALID_TOKEN });
      navigation.navigate("Root");
      // Alert.alert("Senha Incorreta");
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
    fontSize: hp("10%"),
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
  },
  loginOptionsText: {
    color: colors.text,
    textAlign: "center",
    marginTop: 5
  }
});
