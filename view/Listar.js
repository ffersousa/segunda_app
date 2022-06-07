import * as React from "react";
import { TextInput, Button, View } from "react-native";
import { StyleSheet, Text, Image } from "react-native";
import { Input } from "../components/Input";

export function Listar() {
  const [data, setData] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      setData(json);
    }); // ciclo

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
