import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { PokemonDetails } from "@pokedex/types";
import { usePokeStore } from "@shared/store/pokemonStore";
import PokeTypeBadges from "../PokeTypeBadges/PokeTypeBadges";
import Reveal from "@shared/components/common/Reveal";

interface Props {
  name: string;
  image: string;
  id: number;
  types: PokemonDetails["types"];
}

const PokeCard = ({ name, image, types, id }: Props) => {
  const selectedID = usePokeStore((store) => store.value.selectedID);
  return (
    <Reveal>
      <Flex
        position="relative"
        bg={"white"}
        py={4}
        px={"80px"}
        flexDirection={"column"}
        borderRadius={"18px"}
        boxShadow={"0 4px 8px rgba(0, 0, 0, 0.05)"}
        maxW={"260px"}
        cursor={"pointer"}
        outline={selectedID === id ? "3px solid #de3b5e" : ""}
        transition={"0.05s ease-in-out"}
      >
        <Box
          w={"80px"}
          h={"80px"}
          position={"absolute"}
          top={"-28%"}
          left={"50%"}
          right={"50%"}
          transform={
            selectedID === id
              ? "translateX(-50%) scale(1.3)"
              : "translateX(-50%)"
          }
          bgImage={image}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          bgSize={"cover"}
          zIndex={2}
          transition={"0.2s ease-in-out"}
        ></Box>
        <Stack mt={6} alignItems={"center"}>
          <Text color={"text.grey"} fontWeight={"600"} fontSize={"12px"}>
            N° {id}
          </Text>

          <Text fontWeight={"700"} textTransform={"capitalize"}>
            {name}
          </Text>
          <PokeTypeBadges types={types} />
        </Stack>
      </Flex>
    </Reveal>
  );
};

export default PokeCard;
