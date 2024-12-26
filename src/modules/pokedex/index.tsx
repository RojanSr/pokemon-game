import { useEffect, useState } from "react";
import { Box, Center, Grid, GridItem, Spinner } from "@chakra-ui/react";
import useFetchPokemonList from "./hooks/useFetchPokemonList";
import PokeCard from "./components/PokeCard/PokeCard";
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

  const setSelectedID = usePokeStore((store) => store.setter.setSelectedID);

  const { data, isFetching } = useFetchPokemonList({
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
      <Grid
        gap={4}
        templateColumns={{
          base: "1fr",
          md: "3fr 1fr",
          lg: "3fr 1fr",
          "2xl": "3fr 1fr",
        }}
      >
        <GridItem>
          <PokeSearch setSearchQuery={setSearchQuery} />
          {isFetching ? (
            <Center mt={10}>
              <Spinner size={"lg"} thickness="4px" color="primary.red" />
            </Center>
          ) : (
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                "2xl": "repeat(4, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              columnGap={6}
              rowGap={12}
              mt={10}
            >
              {data?.results?.map((pokemon) => {
                return (
                  <GridItem
                    key={pokemon.id}
                    onClick={() => handleClick(pokemon)}
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
          )}
        </GridItem>

        <GridItem>
          <PokeCardExpanded list={selected} />
        </GridItem>
      </Grid>
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
