import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Home from "./views/Home.js";
import Adicionar from "./views/Adicionar.js";
import Listar from "./views/Listar.js";

export const Routes = () => (
   <Router>
    <Scene key="root">
      <Scene key="Home" component={Home} title="Home" />
      <Scene key="Adicionar" component={Adicionar} title="Adicionar" />
      <Scene key="Listar" component={Listar} title="Listar" />
    </Scene>
  </Router>
);