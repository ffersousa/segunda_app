import * as React from "react";
import { View } from "react-native";
import { StyleSheet, Button, Image } from "react-native";
import { Text } from "react-native";

import { TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

const Adicionar = () => {
  const goToAdicionar = () => {
    Actions.Adicionar();
  };

  const goToListar = () => {
    Actions.Listar();
  };

  return (
    <View style={stylesHome.container}>
      <View style={stylesHome.Botoes}>
        <TouchableOpacity style={stylesHome.buttonOne} onPress={goToAdicionar}>
          <Text style={stylesHome.setColorWhite}>Adicionar </Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.buttonTwo} onPress={goToListar}>
          <Text style={stylesHome.setColorWhite}>Listar </Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesHome.buttonThree}>
          <Text style={stylesHome.setColorWhite}>Sair </Text>
        </TouchableOpacity>
      </View>
      <View style={stylesHome.Logo}>
        <Image source={require("../assets/web.png")} />
      </View>
      <View style={stylesHome.Texto}>
        <Text> Olá Mundo</Text>
      </View>
    </View>
  );
};

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 60,
    height: 80,
    marginBottom: 60,
  },

  buttonOne: {
    backgroundColor: "#2ECC71",
    alignItems: "center",
    width: 100,
    height: 60,
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonTwo: {
    backgroundColor: "#FFCE54",
    alignItems: "center",
    width: 100,
    height: 60,
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonThree: {
    backgroundColor: "#ED5565",
    alignItems: "center",
    width: 100,
    height: 60,
    justifyContent: "center",
    borderRadius: 20,
  },
  setColorWhite: {
    color: "#FFFFFF",
  },
  Texto: {
    flex: 0,
    flexDirection: "row",
    fontSize: 30,
    justifyContent: "center",
  },
  Botoes: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  Logo: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Adicionar;
