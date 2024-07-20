import { PokemonDetails } from "../types";

const hoverShowTypes = (
  types: PokemonDetails["types"],
  startFrom: number
): string => {
  let res = "";

  for (let i = startFrom; i < types.length; i++) {
    if (res !== "") {
      res += `, ${types[i].type.name}`;
    } else {
      res += types[i].type.name;
    }
  }

  return res;
};

export default hoverShowTypes;
