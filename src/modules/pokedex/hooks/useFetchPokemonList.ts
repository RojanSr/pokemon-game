import { useQuery } from "@tanstack/react-query";
import { api } from "../../shared/api";
import axios, { AxiosError } from "axios";
import {
  PaginationOptions,
  PaginationResponse,
} from "../../shared/types/global";
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

const fetchPokemonList = async ({
  searchQuery,
  pagination,
}: {
  searchQuery?: string;
  pagination: PaginationOptions;
}) => {
  try {
    if (searchQuery) {
      const response = await axios.get<PokemonDetails>(
        `${api.pokedex.pokemon_data}/${searchQuery.toLowerCase()}`
      );
      const finalResponse: PaginationResponse<PokemonDetails[]> = {
        count: 1,
        results: [response.data],
      };

      return finalResponse;
    } else {
      const response = await axios.get<PaginationResponse<PokemonListRes[]>>(
        `${api.pokedex.pokemon_data}?limit=${pagination.limit}&offset=${pagination.offset}`
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

      const finalResponse: PaginationResponse<PokemonDetails[]> = {
        count: response.data.count,
        results: pokemonList,
      };

      return finalResponse;
    }
  } catch (err) {
    reponseErrorHandler(err as AxiosError<ResponseData, unknown>);
    return {
      count: 0,
      results: [],
    };
  }
};

const useFetchPokemonList = ({
  searchQuery,
  pagination,
}: {
  searchQuery?: string;
  pagination: PaginationOptions;
}) => {
  return useQuery({
    queryKey: [api.pokedex.pokemon_data, pagination],
    queryFn: () => fetchPokemonList({ searchQuery, pagination }),
    // staleTime: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 1,
    retryDelay: 3000,
  });
};

export default useFetchPokemonList;
