import { useEffect, useState } from "react";
import { Grid, GridItem, Spinner } from "@chakra-ui/react";
import PokeCard from "./components/PokeCard";
import useFetchPokemonList, {
  PokemonDetails,
} from "./hooks/useFetchPokemonList";
import PokeCardExpanded from "./components/PokeCardExpanded";
import { usePokeStore } from "../shared/store/pokemonStore";

const Pokedex = () => {
  const { data } = useFetchPokemonList();
  const [selected, setSelected] = useState<PokemonDetails>();
  const setSelectedID = usePokeStore((store) => store.setSelectedID);

  const handleClick = (pokemon: PokemonDetails) => {
    setSelected(pokemon);
    setSelectedID(pokemon.id);
  };

  useEffect(() => {
    if (data && data.length) {
      setSelected(data[0]);
      setSelectedID(data[0].id);
    }
  }, [data, setSelectedID]);

  if (!data) {
    return <Spinner />;
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
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            "2xl": "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          columnGap={6}
          rowGap={12}
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
      </GridItem>

      <GridItem>
        <PokeCardExpanded list={selected} />
      </GridItem>
    </Grid>
  );
};

export default Pokedex;
