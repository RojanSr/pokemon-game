import { useEffect, useState } from "react";
import { Center, Grid, GridItem, Spinner } from "@chakra-ui/react";
import useFetchPokemonList from "./hooks/useFetchPokemonList";
import { usePokeStore } from "../shared/store/pokemonStore";
import PokeCard from "./components/PokeCard/PokeCard";
import PokeCardExpanded from "./components/PokeCard/PokeCardExpanded";
import PokeSearch, { PokemonSearchField } from "./components/Search/PokeSearch";
import { PokemonDetails } from "./types";
import GlobalLoader from "../shared/components/common/GlobalLoader";
import { useQueryClient } from "@tanstack/react-query";
import { api } from "../shared/api";

const Pokedex = () => {
  const queryClient = useQueryClient();

  const [selected, setSelected] = useState<PokemonDetails>();
  const [searchQuery, setSearchQuery] = useState<PokemonSearchField>();

  const setSelectedID = usePokeStore((store) => store.setSelectedID);

  const { data, isFetching } = useFetchPokemonList({
    searchQuery: searchQuery?.pokemon_name,
  });
  const handleClick = (pokemon: PokemonDetails) => {
    setSelected(pokemon);
    setSelectedID(pokemon.id);
  };

  useEffect(() => {
    if (searchQuery) {
      queryClient.invalidateQueries({
        queryKey: [api.pokemon_list, api.pokemon_data],
      });
    }
  }, [searchQuery, queryClient]);

  useEffect(() => {
    if (data && data.length) {
      setSelected(data[0]);
      setSelectedID(data[0].id);
    }
  }, [data, setSelectedID]);

  if (!data) {
    return <GlobalLoader />;
  }
  return (
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
              "2xl": "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            columnGap={6}
            rowGap={12}
            mt={10}
          >
            {data?.map((pokemon) => {
              return (
                <GridItem key={pokemon.id} onClick={() => handleClick(pokemon)}>
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
  );
};

export default Pokedex;
