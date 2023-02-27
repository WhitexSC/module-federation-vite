// import { Pokemon, PokemonListFunction } from "shared-types";

const pokemon: any[] = [
  {
    name: "Bulbasaur",
    type: "Fire",
  },
  {
    name: "Bulbafoo",
    type: "Earth",
  },
  {
    name: "Bulba Potter",
    type: "Wwatersdf",
  },
];

const getList = (nameFilter: string) =>
  pokemon.filter(({ name }) => name.includes(nameFilter));

export default getList;
