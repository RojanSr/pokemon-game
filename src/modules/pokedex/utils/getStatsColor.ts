import { StatNames } from "../../shared/constants";

const getStatColor = (stat: StatNames) => {
  switch (stat) {
    case "hp":
      return "#df2140";
    case "attack":
      return "#ff994d";
    case "defense":
      return "#fedc5d";
    case "special-attack":
      return "#85ddff";
    case "special-defense":
      return "#a8ef85";
    case "speed":
      return "#fb94a8";
    default:
      return "#7295db";
  }
};

export default getStatColor;
