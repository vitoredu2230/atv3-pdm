import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Fullscreen from "./components/screen-wrappers/Fullscreen";
import { useState } from "react";

export default function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Fullscreen center gap={30}>
      <Text style={styles.title}>Swan Station</Text>
      <TextInput
        style={styles.input}
        value={login}
        onChangeText={setLogin}
        placeholder="Login"
        placeholderTextColor="#000000"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#000000"
      />
      <TouchableOpacity style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>
    </Fullscreen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 600,
  },
  input: {
    width: "50%",
    borderWidth: 1,
    color: "black",
  },
  button: {
    borderWidth: 1,
    width: "50%",
    alignItems: "center",
  },
});
