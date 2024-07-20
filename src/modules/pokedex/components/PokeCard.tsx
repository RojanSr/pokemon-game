import { Fragment } from "react";
import { Box, Center, Flex, Stack, Text, Tooltip } from "@chakra-ui/react";
import { PokemonDetails } from "../hooks/useFetchPokemonList";
import PokeTypeBadge from "../../shared/components/PokeTypeBadge";
import hoverShowTypes from "../utils/hoverShowTypes";
import { noOfBadgesToShow } from "../../shared/constants";
import { usePokeStore } from "../../shared/store/pokemonStore";

interface Props {
  name: string;
  image: string;
  id: number;
  types: PokemonDetails["types"];
}

const PokeCard = ({ name, image, types, id }: Props) => {
  const selectedID = usePokeStore((store) => store.pokeState.selectedID);
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
      outline={selectedID === id ? "3px solid lightgreen" : ""}
      transition={"0.05s ease-in-out"}
    >
      <Box
        w={"80px"}
        h={"80px"}
        position={"absolute"}
        top={"-25%"}
        left={"50%"}
        right={"50%"}
        transform={"translateX(-50%)"}
        bgImage={image}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        bgSize={"cover"}
        zIndex={2}
      ></Box>
      <Stack mt={6} alignItems={"center"}>
        <Text color={"text.grey"} fontWeight={"600"} fontSize={"12px"}>
          N° {id}
        </Text>

        <Text fontWeight={"700"} textTransform={"capitalize"}>
          {name}
        </Text>
        <Flex gap={2}>
          {types.map((el, index) => {
            // Render Number of Badges
            if (index < noOfBadgesToShow) {
              return (
                <Fragment key={el.slot.toString()}>
                  <PokeTypeBadge type={el} />
                </Fragment>
              );
            }
          })}
          {noOfBadgesToShow < types.length && noOfBadgesToShow > 0 && (
            <Tooltip label={hoverShowTypes(types, noOfBadgesToShow)}>
              <Center
                bg={"rgba(0, 0, 0, 0.2)"}
                px={2}
                borderRadius={"8px"}
                fontSize={"14px"}
                fontWeight={"600"}
              >
                +{types.length - 1}
              </Center>
            </Tooltip>
          )}
        </Flex>
      </Stack>
    </Flex>
  );
};

export default PokeCard;
