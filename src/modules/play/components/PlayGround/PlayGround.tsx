import { useLocation } from "react-router-dom";
import { Box, Button, Grid, Image, VStack } from "@chakra-ui/react";
import { useFetchRandomPokemon } from "@play/hooks/useFetchRandomPokemon";
import { DifficultyType } from "@play/Play";
import LoadingScreen from "./LoadingScreen";
import GameButton from "../GameButton";
import { useState } from "react";
import { PokemonDetails } from "@pokedex/types";
import { DIFFICULTY_CONFIG } from "@shared/constants/game";

const PlayGround = () => {
  const location = useLocation();
  const difficultyLevel: DifficultyType = location.state.difficulty;
  const [correctOption, setCorrectOption] = useState<PokemonDetails>();
  const [guess, setGuess] = useState<number>();

  const {
    data: pokemonData,
    isLoading,
    refetch,
    isRefetching,
  } = useFetchRandomPokemon({
    difficulty: difficultyLevel,
    onSuccess: (data) => {
      const randomIndex = Math.floor(Math.random() * 4);
      setCorrectOption(data[randomIndex]);
    },
  });

  const handleNext = async () => {
    await refetch();
    setGuess(undefined);
  };

  if (!pokemonData || isLoading || isRefetching) {
    return <LoadingScreen />;
  }

  return (
    <Box
      w={"100dvw"}
      h={"100dvh"}
      bg={"#a6a6a6"}
      display={"flex"}
      justifyContent={"center"}
      pt={"212px"}
    >
      <VStack>
        <Image
          src={correctOption?.sprites.front_default}
          h={"300px"}
          objectFit={"contain"}
          filter={
            guess || DIFFICULTY_CONFIG[difficultyLevel].showImage
              ? ""
              : "brightness(0)"
          }
        />
        <Grid templateColumns={"repeat(2, 1fr)"} columnGap={8} rowGap={6}>
          {pokemonData.map((data) => {
            return (
              <GameButton
                fontSize={"1.2rem"}
                py={0}
                px={16}
                key={data.id}
                textTransform={"capitalize"}
                onClick={() => setGuess(data.id)}
                bg={
                  guess
                    ? correctOption?.id === data.id
                      ? "green"
                      : "red"
                    : "gray"
                }
                _hover={{
                  bg: guess
                    ? correctOption?.id === data.id
                      ? "green"
                      : "red"
                    : "#d9d9d9",
                }}
              >
                {data.name}
              </GameButton>
            );
          })}
        </Grid>
        <Button mt={4} variant={"ghost"} hidden={!guess} onClick={handleNext}>
          Next
        </Button>
      </VStack>
    </Box>
  );
};

export default PlayGround;
