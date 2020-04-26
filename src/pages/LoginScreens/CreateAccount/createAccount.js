import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity
} from "react-native";

import styles from './styles';
import api from "../../../services/api";

export default function CreateAccount({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [wrong, setWrong] = useState(false);

  async function registerUser() {
    try {
      const response = await api.auth.post("/register", {
        username: name,
        email: email,
        password: password
      });
      if (response.data.status === "success") {
        Alert.alert("Cadastro realizado com sucesso !!!");
      } else {
        Alert.alert("Não foi possivel fazer seu cadastro !!!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkPassword();
  }, [password2]);

  function checkPassword() {
    if (password != password2) {
      setWrong(true);
    } else {
      setWrong(false);
    }
  }
  return (
    <View style={styles.scrollView}>
      <View>
        <Text style={styles.title}>Criar Conta</Text>
      </View>
      <View style={styles.body}>
        <View>
          <TextInput
            style={styles.TextInput}
            placeholder="Nome"
            onChangeText={text => setName(text)}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
          />
          {/* <TextInput
            style={styles.TextInput}
            placeholder="Celular"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          /> */}
          <TextInput
            style={styles.TextInput}
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Confirmar Senha"
            secureTextEntry={true}
            onChangeText={text => setPassword2(text)}
          />
        </View>
        {wrong ? (
          <Text style={styles.checkPasswordText}> Senhas diferentes !!!</Text>
        ) : (
            console.log("Senhas diferentes")
          )}
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => {
            if (wrong === false) {
              registerUser();
            }
          }}
        >
          <Text style={styles.button}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

