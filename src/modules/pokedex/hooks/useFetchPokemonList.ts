import { useQuery } from "@tanstack/react-query";
import { api } from "../../shared/api";
import axios from "axios";
import { PaginationResponse } from "../../shared/types/global";
import { PokemonType, StatNames } from "../../shared/constants";

interface PokemonListRes {
  name: string;
  url: string;
}

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
  stats: { base_stat: number; stat: { name: StatNames } }[];
}

const fetchPokemonDetails = async (url: string) => {
  try {
    const response = await axios.get<PokemonDetails>(url);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const fetchPokemonList = async () => {
  try {
    const response = await axios.get<PaginationResponse<PokemonListRes[]>>(
      api.pokemon_list
    );
    const pokemonList = await Promise.all(
      response.data.results.map(async (pokemon) => {
        const res = await fetchPokemonDetails(pokemon.url);
        return {
          cries: res?.data?.cries || { latest: "", legacy: "" }, // Provide default values
          sprites: res?.data?.sprites || {
            front_default: "",
            other: { showdown: { front_default: "" } },
          },
          height: res?.data?.height,
          id: res?.data?.id,
          moves: res?.data?.moves || [],
          weight: res?.data?.weight,
          name: res?.data?.name,
          types: res?.data?.types,
          base_experience: res?.data?.base_experience,
          abilities: res?.data?.abilities,
          stats: res?.data?.stats,
        } as PokemonDetails;
      })
    );
    return pokemonList;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch Pokémon list"); // Throw an error for better error handling
  }
};

const useFetchPokemonList = () => {
  return useQuery({
    queryKey: [api.pokemon_list],
    queryFn: fetchPokemonList,
    select: (data) => data,
  });
};

export default useFetchPokemonList;
