import { Box, Flex, Skeleton, Stack, Text } from "@chakra-ui/react";
import { PokemonDetails } from "@pokedex/types";
import { usePokeStore } from "@shared/store/pokemonStore";
import PokeTypeBadges from "../PokeTypeBadges/PokeTypeBadges";
import Reveal from "@shared/components/common/Reveal";
import questionMarkImg from "@shared/assets/question_mark.png";

interface Props {
  name: string;
  id: number;
  types: PokemonDetails["types"];
  image?: string; // No image for some pokemon
}

export const PokeCardSkeleton = () => {
  return (
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
      transition={"0.05s ease-in-out"}
    >
      <Skeleton
        w="80px"
        h="80px"
        position="absolute"
        top="-10%"
        left="50%"
        transform="translateX(-50%)"
        borderRadius="20%"
        zIndex={2}
      />
      <Stack mt={16} alignItems="center">
        <Skeleton w="40px" h="14px" />
        <Skeleton w="100px" h="18px" />
        <Skeleton w="140px" h="22px" />
      </Stack>
    </Flex>
  );
};

const PokeCard = ({ name, image, types, id }: Props) => {
  const selectedID = usePokeStore((store) => store.value.selectedID);
  return (
    <Reveal>
      <Flex
        position="relative"
        bg={"white"}
        py={4}
        // px={"80px"}
        flexDirection={"column"}
        borderRadius={"18px"}
        boxShadow={"0 4px 8px rgba(0, 0, 0, 0.05)"}
        // maxW={"260px"}
        w={"100%"}
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
          bgImage={image || questionMarkImg}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          bgSize={image ? "cover" : "70%"}
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
