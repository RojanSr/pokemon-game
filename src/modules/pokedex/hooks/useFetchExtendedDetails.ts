import axios, { AxiosError } from "axios";
import { api } from "../../shared/api";
import { useQuery } from "@tanstack/react-query";
import { PokemonGrowthRate } from "../../shared/constants";
import { reponseErrorHandler, ResponseData } from "../../shared/utils/helper";

interface PokemonSpeciesResponse {
  evolves_from_species: { name: string };
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
  growth_rate: PokemonGrowthRate;
  genera: { genus: string; language: { name: string } }[]; // Species of Pokemon
}

const fetchExtendedDetails = async (pokemonName: string) => {
  if (!pokemonName) return;
  try {
    const response = await axios.get<PokemonSpeciesResponse>(
      `${api.pokemon_extended_data}/${pokemonName}`
    );
    return response;
  } catch (err) {
    reponseErrorHandler(err as AxiosError<ResponseData, unknown>);
    console.error(err);
  }
};

const useFetchExtendedDetails = (pokemonName: string) => {
  return useQuery({
    queryKey: [api.pokemon_extended_data],
    queryFn: () => fetchExtendedDetails(pokemonName),
    select: (data) => data?.data,
    enabled: !!pokemonName,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 1,
    retryDelay: 3000,
  });
};

export default useFetchExtendedDetails;
