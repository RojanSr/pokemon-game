import { StatNames } from "../../shared/constants";

const abbreviateStat = (stat: StatNames) => {
  switch (stat) {
    case "attack":
      return "ATK";
    case "defense":
      return "DEF";
    case "special-attack":
      return "SpA";
    case "special-defense":
      return "SpD";
    case "speed":
      return "SPD";
    default:
      return stat.toUpperCase();
  }
};

export default abbreviateStat;
