import { api } from "@shared/api";
import axios from "axios";
import { PokedexByRegionResponse } from "../types";
import { useQuery } from "@tanstack/react-query";

export const regionPokedexMap = {
  kanto: 2, // National IDs 1-151
  johto: 3, // National IDs 152-251
  hoenn: 4, // National IDs 252-386
  sinnoh: 5, // National IDs 387-493
  unova: 9, // National IDs 494-649
  kalos: 12, // National IDs 650-721
  alola: 16, // National IDs 722-809
  galar: 27, // National IDs 810-898
  paldea: 31, // National IDs 899+
};

const fetchPokemonByRegion = async (id: string) => {
  const response = await axios.get<PokedexByRegionResponse>(
    `${api.pokedex.pokemon_by_region}/${id}`
  );
  return response;
};

export const useFetchPokemonByRegion = () => {
  return useQuery({
    queryKey: [api.pokedex.pokemon_by_region],
    queryFn: () => fetchPokemonByRegion(),
  });
};
