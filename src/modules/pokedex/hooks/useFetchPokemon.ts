import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/api";
import { PokemonDetails } from "@pokedex/types";

const fetchPokemon = async (name: string) => {
  try {
    const response = await axios.get<PokemonDetails>(
      `${api.pokedex.pokemon_data}/${name}`
    );
    return response;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch Pokémon");
  }
};

const useFetchPokemon = (name: string) => {
  return useQuery({
    queryKey: [api.pokedex.pokemon_data],
    queryFn: () => fetchPokemon(name),
    select: (data) => data?.data,
    enabled: !!name,
  });
};

export default useFetchPokemon;
