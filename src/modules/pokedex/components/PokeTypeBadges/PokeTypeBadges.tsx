import { Center, Flex, Tooltip } from "@chakra-ui/react";
import { PokemonDetails } from "../../types";
import { noOfBadgesToShow } from "../../../shared/constants";
import { Fragment } from "react";
import hoverShowTypes from "../../utils/hoverShowTypes";
import TypeBadge from "./TypeBadge";

type PokeTypeBadgesProps = {
  types: PokemonDetails["types"];
};

const PokeTypeBadges = ({ types }: PokeTypeBadgesProps) => {
  return (
    <Flex gap={2}>
      {types.map((el, index) => {
        // Render Number of Badges
        if (index < noOfBadgesToShow) {
          return (
            <Fragment key={el.slot.toString()}>
              <TypeBadge type={el} />
            </Fragment>
          );
        }
      })}

      {/* If badge exceeds limit length render +remaining length */}
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
  );
};

export default PokeTypeBadges;
