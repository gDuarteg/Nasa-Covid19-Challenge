import React from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";

import { useSelector } from "react-redux";

export default function ProfileConfig({ navigation }) {
  const user = useSelector(state => state.user);
  const [nameChanged, onChangeName] = React.useState(user.name);
  const [passwordChanged, onChangePassword] = React.useState(user.password);
  const [phoneChanged, onChangePhone] = React.useState(user.phone);
  const [emailChanged, onChangeEmail] = React.useState(user.email);

  async function saveUpdate() {
    try {
      // const response = await api.post("/auth/userUpdate", {
      //   id: user.id,
      //   name: nameChanged,
      //   email: emailChanged,
      //   password: passwordChanged,
      //   phone: phoneChanged
      // });
      const response = "success";
      if (response === "success") {
        Alert.alert("Alterações Salvas");
      } else {
        Alert.alert("Não foi possivel alterar suas informações");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.page}>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeName(text)}
          value={nameChanged}
        />

        <TextInput
          style={styles.input}
          onChangeText={text => onChangePassword(text)}
          value={passwordChanged}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => onChangePhone(text)}
          value={phoneChanged}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeEmail(text)}
          value={emailChanged}
        />
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => {
            saveUpdate();
          }}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
