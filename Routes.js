import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Home from "./view/Home.js";
import Adicionar from "./view/Adicionar.js";
import Listar from "./view/Listar.js";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Home" initial={true} />
      <Scene key="Adicionar" component={Adicionar} title="Adicionar" />
      <Scene key="Listar" component={Listar} title="Listar" />
    </Scene>
  </Router>
);

export default Routes;
