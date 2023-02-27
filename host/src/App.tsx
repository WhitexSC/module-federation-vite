import React from "react";
import ReactDOM from "react-dom";

import "./tsremote-mf-decl.d";

// import { PokemonListFunction, PokemonListComponent } from "shared-types";
import getList from "remoteApp/pokemonList";
import PokemonListView from "remoteApp/PokemonListView";
import "./index.css";

const PokemonComp = PokemonListView;
//  as PokemonListComponent;

const getPokemonList = getList;
//  as PokemonListFunction;

const App = () => (
  <div>
    <h1>TS-HOST</h1>
    <PokemonComp list={getPokemonList("Bulb")} />
  </div>
);

export default App;
