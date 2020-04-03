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

//import api from "../services/api";

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState("");

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  function postUser() {
    // const response = await api.post("/auth/forgotPassword", {
    //   email: email,
    //   password: password
    // });
    // const response = "Approved Token";

    if (email === "admin") {
      dispatch({ type: actions.SAVE_EMAIL, payload: email });
      dispatch({ type: actions.SAVE_PASSWORD, payload: password });
      dispatch({ type: actions.ACTIVE_TOKEN, payload: response });
      navigation.navigate("Home");
    } else {
      dispatch({ type: actions.INVALID_TOKEN });
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
            postUser();
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
