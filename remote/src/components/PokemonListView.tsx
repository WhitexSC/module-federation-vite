import React from "react";

// import { Pokemon } from "shared-types";

const PokemonListView = ({ list }: { list: any[] }) => (
  <table>
    {list.map(({ name, type }) => (
      <tr>
        <td>
          <strong>{name}</strong>
        </td>
        <td>{type}</td>
      </tr>
    ))}
  </table>
);

export default PokemonListView;
