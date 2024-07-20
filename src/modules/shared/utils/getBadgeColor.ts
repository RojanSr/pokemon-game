import { PokemonType } from "../constants";

const getBadgeColor = (type: PokemonType): string => {
  switch (type) {
    case "grass":
      return "#a8ef86";
    case "ground":
      return "#ffcd83";
    case "fire":
      return "#ff8c43";
    case "fighting":
      return "#e66c63";
    case "water":
      return "#8fb1ff";
    case "steel":
      return "#b2a9cc";
    case "bug":
      return "#A8B820"; // Olive green background for Bug type
    case "poison":
      return "#A040E0"; // Purple background for Poison type
    case "flying":
      return "#A890F0"; // Light purple background for Flying type
    case "normal":
      return "#A8A878"; // Light grey background for Normal type
    case "rock":
      return "#B8A038"; // Brownish yellow background for Rock type
    case "ghost":
      return "#705898"; // Dark purple background for Ghost type
    case "electric":
      return "#F8D030"; // Yellow background for Electric type
    case "psychic":
      return "#F85888"; // Pink background for Psychic type
    case "ice":
      return "#98D8D8"; // Light cyan background for Ice type
    case "dragon":
      return "#7038F8"; // Indigo background for Dragon type
    case "dark":
      return "#705848"; // Dark brown background for Dark type
    case "fairy":
      return "#EE99AC"; // Light pink background for Fairy type
    case "stellar":
      return "#87CEFA"; // Light sky blue background for Stellar type
    case "unknown":
      return "#68A090"; // Muted teal background for Unknown type
    default:
      return "#777"; // Default grey background for any other types
  }
};

export default getBadgeColor;
