import axios from "axios";
import { api } from "../../shared/api";
import { useQuery } from "@tanstack/react-query";
import { PokemonGrowthRate } from "../../shared/constants";

interface PokemonSpeciesResponse {
  evolves_from_species: { name: string };
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
  growth_rate: PokemonGrowthRate;
  genera: { genus: string; language: { name: string } }[]; // Species of Pokemon
}

const fetchPokemonDetails = async (pokemonName: string) => {
  if (!pokemonName) return;
  try {
    const response = await axios.get<PokemonSpeciesResponse>(
      `${api.pokemon_data}/${pokemonName}`
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};

const useFetchPokemonDetails = (pokemonName: string) => {
  return useQuery({
    queryKey: [api.pokemon_data],
    queryFn: () => fetchPokemonDetails(pokemonName),
    select: (data) => data?.data,
  });
};

export default useFetchPokemonDetails;
