import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Fullscreen from "./components/screen-wrappers/Fullscreen";
import Scrollable from "./components/screen-wrappers/Scrollable";
import Card from "./components/Card";
import { useState } from "react";

export default function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Scrollable>
      <Card>
        <View style={{ alignItems: "center" }}>
          <Image source={require("./assets/Charizard.jpeg")} />
          <Text> Charizard</Text>
        </View>
      </Card>
      <Card>
        <View style={{ alignItems: "center" }}>
          <Image source={require("./assets/Vulvasaur.jpeg")} />
          <Text> Charizard</Text>
        </View>
      </Card>
      <Card>
        <View style={{ alignItems: "center" }}>
          <Image source={require("./assets/Blastoise.jpeg")} />
          <Text> Charizard</Text>
        </View>
      </Card>
      <Card>
        <View style={{ alignItems: "center" }}>
          <Image source={require("./assets/Raichu.jpeg")} />
          <Text> Charizard</Text>
        </View>
      </Card>
      <Card>
        <View style={{ alignItems: "center" }}>
          <Image source={require("./assets/Mewtwo.jpeg")} />
          <Text> Charizard</Text>
        </View>
      </Card>
      <Card>
        <View style={{ alignItems: "center" }}>
          <Image source={require("./assets/Vaporeon.jpeg")} />
          <Text> Charizard</Text>
        </View>
      </Card>
      <Card>
        <View style={{ alignItems: "center" }}>
          <Image source={require("./assets/Arcanine.jpeg")} />
          <Text> Charizard</Text>
        </View>
      </Card>
      <Card>
        <View style={{ alignItems: "center" }}>
          <Image source={require("./assets/Snorlax.jpeg")} />
          <Text> Charizard</Text>
        </View>
      </Card>
      <Card>
        <View style={{ alignItems: "center" }}>
          <Image source={require("./assets/Mr-Mime.jpeg")} />
          <Text> Charizard</Text>
        </View>
      </Card>
      <Card>
        <View style={{ alignItems: "center" }}>
          <Image source={require("./assets/Mew.jpeg")} />
          <Text> Charizard</Text>
        </View>
      </Card>
      {/* <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card> */}
    </Scrollable>
  );

  // return (
  //   <Fullscreen center gap={30}>
  //     <Image source={require("./assets/splash-icon.png")} />
  //     <Text style={styles.title}>Swan Station</Text>
  //     <TextInput
  //       style={styles.input}
  //       value={login}
  //       onChangeText={setLogin}
  //       placeholder="Login"
  //       placeholderTextColor="#808080"
  //     />
  //     <TextInput
  //       style={styles.input}
  //       value={password}
  //       onChangeText={setPassword}
  //       placeholder="Password"
  //       secureTextEntry
  //       placeholderTextColor="#808080"
  //     />
  //     <TouchableOpacity style={styles.button}>
  //       <Text style={styles.textButton}>Login</Text>
  //     </TouchableOpacity>
  //   </Fullscreen>
  // );
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
    paddingVertical: 15,
    backgroundColor: "deepskyblue",
    borderRadius: 8,
    marginBottom: 15,
    elevation: 3,
    width: "50%",
    padding: 10,
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textButton: {
    fontSize: 16,
    fontWeight: "500",
  },
});
