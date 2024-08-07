import { Box, Text } from "@chakra-ui/react";
import { PokemonDetails } from "@pokedex/types";
import getBadgeColor from "@shared/utils/getBadgeColor";

interface TypeBadgeProps {
  type: PokemonDetails["types"][0];
}

const TypeBadge = ({ type }: TypeBadgeProps) => {
  return (
    <Box
      display={"flex"}
      py={1}
      px={4}
      borderRadius={"6px"}
      fontSize={"12px"}
      fontWeight={"600"}
      textTransform={"capitalize"}
      color={"text.dark"}
      bgColor={getBadgeColor(type.type.name)}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text>{type.type.name}</Text>
    </Box>
  );
};

export default TypeBadge;
