import * as React from "react";
import { TextInput, Button, View } from "react-native";
import { StyleSheet, Text, Image } from "react-native";
import Input from "../components/Input";
import { TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

const About = () => {
  const goToHome = () => {
    Actions.home();
  };
  return (
    <View>
      <TouchableOpacity style={{ margin: 128 }} onPress={goToHome}>
        <Text>Home</Text>
      </TouchableOpacity>
      <Input></Input>
      <Input></Input>
    </View>
  );
};

export default About;
