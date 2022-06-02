import * as React from "react";
import { TextInput, Button, View } from "react-native";
import { StyleSheet, Text, Image } from "react-native";
import { Input } from "../components/Input";

export default function App() {
  const data = [
    { nome: "oalala", idade: 21 },
    {
      nome: "212",
      idade: 21,
    },
    {
      nome: "dsdsds",
      idade: 21,
    },
  ];
  // ciclo for
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 50, height: 70 }}
        source={require("../assets/web.png")}
      ></Image>
      <Text>
        Primeira App {"\n"}in React Native {"\n"}
      </Text>
      <Input />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
