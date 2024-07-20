import { PokemonType, StatNames } from "../../shared/constants";

export interface PokemonDetails {
  abilities: { ability: { name: string }; slot: number }[];
  cries: {
    latest: string;
    legacy: string;
  };
  height: number;
  id: number;
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
  name: string;
  sprites: {
    front_default: string;
    other: {
      showdown: {
        front_default: string;
      };
    };
  };
  weight: number;
  types: {
    slot: number;
    type: {
      name: PokemonType;
      url: string;
    };
  }[];
  base_experience: number;
  stats: { base_stat: number; stat: { name: StatNames; url: string } }[];
}
