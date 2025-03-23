import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import useFetchPokemonList from "./hooks/useFetchPokemonList";
import PokeCard, { PokeCardSkeleton } from "./components/PokeCard/PokeCard";
import PokeCardExpanded from "./components/PokeCard/PokeCardExpanded";
import PokeSearch, { PokemonSearchField } from "./components/Search/PokeSearch";
import { PokemonDetails } from "./types";
import { useQueryClient } from "@tanstack/react-query";
import { usePokeStore } from "@shared/store/pokemonStore";
import { PaginationOptions } from "@shared/types/global";
import { defaultPagination } from "@shared/constants";
import { api } from "@shared/api";
import Pagination from "@shared/components/common/Pagination";

const Pokedex = () => {
  const queryClient = useQueryClient();

  const [selected, setSelected] = useState<PokemonDetails>();
  const [searchQuery, setSearchQuery] = useState<PokemonSearchField>();
  const [pagination, setPagination] =
    useState<PaginationOptions>(defaultPagination);

  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });

  const setSelectedID = usePokeStore((store) => store.setter.setSelectedID);

  const { data, isLoading } = useFetchPokemonList({
    searchQuery: searchQuery?.pokemon_name,
    pagination: pagination,
  });
  const handleClick = (pokemon: PokemonDetails) => {
    setSelected(pokemon);
    setSelectedID(pokemon.id);
  };

  useEffect(() => {
    if (searchQuery) {
      queryClient.invalidateQueries({
        queryKey: [api.pokedex.pokemon_data],
      });
    }
  }, [searchQuery, queryClient]);

  useEffect(() => {
    if (data?.results && data.results.length) {
      setSelected(data.results[0]);
      setSelectedID(data.results[0].id);
    }
  }, [data, setSelectedID]);

  return (
    <>
      <Flex
        gap={4}
        overflow="hidden"
        w={"100%"}
        flexWrap={isMobile ? "wrap" : "nowrap"}
        justifyContent={"center"}
      >
        <Box maxW={"100%"}>
          <PokeCardExpanded list={selected} />
        </Box>
        <Box flex={1} maxW={"100%"}>
          <PokeSearch setSearchQuery={setSearchQuery} />
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            columnGap={6}
            rowGap={12}
            mt={10}
          >
            {isLoading
              ? Array.from({ length: pagination.limit }).map((_, index) => (
                  <GridItem key={index}>
                    <PokeCardSkeleton />
                  </GridItem>
                ))
              : data?.results?.map((pokemon) => {
                  return (
                    <GridItem
                      key={pokemon.id}
                      onClick={() => handleClick(pokemon)}
                      mx={6}
                    >
                      <PokeCard
                        name={pokemon.name || ""}
                        image={pokemon.sprites.front_default}
                        id={pokemon.id}
                        types={pokemon.types}
                      />
                    </GridItem>
                  );
                })}
          </Grid>
        </Box>
      </Flex>
      <Box my={8}>
        <Pagination
          offset={pagination.offset}
          count={data?.count || 0}
          limit={pagination.limit}
          onLimitChange={(limit) =>
            setPagination(() => ({ limit: limit, offset: 0 }))
          }
          onPageChange={(offset) =>
            setPagination((prev) => ({ ...prev, offset: offset }))
          }
        />
      </Box>
    </>
  );
};

export default Pokedex;
