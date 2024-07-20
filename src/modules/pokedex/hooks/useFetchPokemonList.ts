import { useQuery } from "@tanstack/react-query";
import { api } from "../../shared/api";
import axios, { AxiosError } from "axios";
import { PaginationResponse } from "../../shared/types/global";
import { PokemonDetails } from "../types";
import { reponseErrorHandler, ResponseData } from "../../shared/utils/helper";

interface PokemonListRes {
  name: string;
  url: string;
}

const fetchPokemonDetails = async (url: string) => {
  try {
    const response = await axios.get<PokemonDetails>(url);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const fetchPokemonList = async ({ searchQuery }: { searchQuery?: string }) => {
  try {
    if (searchQuery) {
      const response = await axios.get<PokemonDetails>(
        `${api.pokemon_data}/${searchQuery.toLowerCase()}`
      );
      return [response.data];
    } else {
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
    }
  } catch (err) {
    reponseErrorHandler(err as AxiosError<ResponseData, unknown>);
    return [];
  }
};

const useFetchPokemonList = ({ searchQuery }: { searchQuery?: string }) => {
  return useQuery({
    queryKey: [api.pokemon_list, api.pokemon_data],
    queryFn: () => fetchPokemonList({ searchQuery: searchQuery }),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 1,
    retryDelay: 3000,
  });
};

export default useFetchPokemonList;
