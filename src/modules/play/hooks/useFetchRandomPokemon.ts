import { DifficultyType } from "@play/Play";
import { fetchPokemon } from "@pokedex/hooks/useFetchPokemon";
import { PokemonDetails } from "@pokedex/types";
import { PokeRegions } from "@shared/constants";
import { DIFFICULTY_CONFIG, REGION_POKEDEX_MAP } from "@shared/constants/game";
import { useQuery } from "@tanstack/react-query";

const getRandomIdsFromSelectedRegion = (
  selectedRegions: PokeRegions[]
): string[] => {
  const randomIds: string[] = [];

  while (randomIds.length !== 4) {
    const availableIds: number[] = selectedRegions.flatMap((region) => {
      const { from, to } = REGION_POKEDEX_MAP[region];
      return Array.from({ length: to - from + 1 }, (_, i) => from + i);
    });

    if (availableIds.length === 0) {
      throw new Error("No valid Pokémon IDs found for selected regions.");
    }

    const randomIndex = Math.floor(Math.random() * availableIds.length);

    const randomId = availableIds[randomIndex].toString();

    if (!randomIds.includes(randomId))
      randomIds.push(availableIds[randomIndex].toString());
  }

  return randomIds;
};

const fetchPokemonOptions = async ({
  randomIds,
  onSuccess,
}: {
  randomIds: string[];
  onSuccess: (data: PokemonDetails[]) => void;
}) => {
  const results = await Promise.all(randomIds.map((id) => fetchPokemon(id)));
  const modifiedResults = results.map((item) => item.data);
  onSuccess(modifiedResults);
  return modifiedResults;
};

export const useFetchRandomPokemon = ({
  difficulty,
  onSuccess,
}: {
  difficulty: DifficultyType;
  onSuccess: (data: PokemonDetails[]) => void;
}) => {
  const selectedRegions = DIFFICULTY_CONFIG[difficulty].regions;
  const randomIdsFromSelectedRegion =
    getRandomIdsFromSelectedRegion(selectedRegions);

  return useQuery({
    queryKey: [],
    queryFn: () =>
      fetchPokemonOptions({
        randomIds: randomIdsFromSelectedRegion,
        onSuccess,
      }),
    select: (data) => data,
    staleTime: 0,
    gcTime: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
};
