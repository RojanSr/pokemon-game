import { Fragment, useMemo } from "react";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Skeleton,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { IoMdVolumeHigh } from "react-icons/io";
import useFetchPokemonDetails from "../../hooks/useFetchExtendedDetails";
import PokeStats from "../PokeStats";
import TypeBadge from "../PokeTypeBadges/TypeBadge";
import { api } from "@shared/api";
import { PokemonDetails } from "@pokedex/types";
import { noOfBadgesToShow } from "@shared/constants";
import hoverShowTypes from "@pokedex/utils/hoverShowTypes";
import CapsuleText from "@shared/components/common/CapsuleText";
import questionMarkImage from "@shared/assets/question_mark.png";

interface Props {
  list: PokemonDetails | undefined;
}

const PokeCardExpandedSkeleton = () => {
  return (
    <Box position={"sticky"} top={10}>
      <Box
        bg={"white"}
        p={4}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        borderRadius={"18px"}
        boxShadow={"0 4px 8px rgba(0, 0, 0, 0.05)"}
        w={"300px"}
        position={"relative"}
      >
        <Skeleton
          position={"absolute"}
          left={"50%"}
          right={"50%"}
          transform={"translateX(-50%)"}
          w={"64px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          h={"64px"}
        />
        <Stack mt={"90px"} align={"center"}>
          <Skeleton w={"26px"} h={"14px"} />
          <Skeleton w={"140px"} h={"24px"} />
          <Skeleton w={"100px"} h={"18px"} />
        </Stack>

        <Skeleton w={"80px"} h={"20px"} my={6} />

        <Stack align={"center"}>
          <Skeleton w={"200px"} h={"14px"} />
          <Skeleton w={"200px"} h={"14px"} />
          <Skeleton w={"180px"} h={"14px"} />
        </Stack>

        <Skeleton w={"80px"} h={"20px"} my={6} />

        <Stack align={"center"}>
          <Skeleton w={"200px"} h={"14px"} />
          <Skeleton w={"200px"} h={"14px"} />
          <Skeleton w={"180px"} h={"14px"} />
        </Stack>

        <Skeleton w={"80px"} h={"20px"} my={6} />

        <Stack align={"center"}>
          <Skeleton w={"200px"} h={"14px"} />
          <Skeleton w={"180px"} h={"14px"} />
        </Stack>
      </Box>
    </Box>
  );
};

const PokeCardExpanded = ({ list }: Props) => {
  const queryClient = useQueryClient();
  const [genera, setGenera] = useState<string>();

  const pokeName = useMemo(() => {
    return list?.name;
  }, [list]);

  const { data, isLoading, isError } = useFetchPokemonDetails(pokeName || "");

  const playSound = () => {
    if (list?.cries?.latest) {
      const audio = new Audio(list.cries.latest);
      audio.play();
    } else if (list?.cries?.legacy) {
      const audio = new Audio(list.cries.latest);
      audio.play();
    }
  };

  useEffect(() => {
    if (data) {
      setGenera(
        data?.genera?.find((item) => item.language.name === "en")?.genus || ""
      );
    }
  }, [data]);

  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: [api.pokedex.pokemon_extended_data],
    });
  }, [list, list?.name, queryClient]);

  if (isLoading || !list) {
    return <PokeCardExpandedSkeleton />;
  }

  if (isError) {
    return (
      <Box
        bg={"white"}
        p={4}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent={"center"}
        borderRadius={"18px"}
        boxShadow={"0 4px 8px rgba(0, 0, 0, 0.05)"}
        // w={"300px"}
        w={"100%"}
        h={"700px"}
        position={"relative"}
      >
        <Flex transform={"translateY(-30px)"}>
          <Image
            src={questionMarkImage}
            w={"80px"}
            h={"100px"}
            transform={"rotate(-40deg)"}
          />
          <Image
            src={questionMarkImage}
            w={"80px"}
            h={"100px"}
            transform={"translateY(-30px)"}
          />
          <Image
            src={questionMarkImage}
            w={"80px"}
            h={"100px"}
            transform={"rotate(40deg)"}
          />
        </Flex>
        <Text fontWeight={"semibold"}>No Record Found</Text>
      </Box>
    );
  }

  return (
    <Box
      bg={"white"}
      p={4}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      borderRadius={"18px"}
      boxShadow={
        data?.is_legendary
          ? "0 0px 10px rgba(255, 215, 0, 0.9)"
          : "0 4px 8px rgba(0, 0, 0, 0.05)"
      }
      w={"300px"}
      position={"relative"}
    >
      <Center
        w={"30px"}
        h={"30px"}
        position={"absolute"}
        top={"25px"}
        right={"25px"}
        bg={"#f4f6f9"}
        borderRadius={"8px"}
        cursor={"pointer"}
        onClick={playSound}
        _hover={{
          bg: "#f9f9f9",
        }}
      >
        <IoMdVolumeHigh />
      </Center>
      <Box
        position={"absolute"}
        left={"50%"}
        right={"50%"}
        transform={"translateX(-50%)"}
        w={"140px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        h={"50px"}
      >
        <Image
          src={list.sprites.other.showdown.front_default}
          objectFit={"contain"}
        />
      </Box>
      <Text
        color={"text.grey"}
        fontWeight={"700"}
        fontSize={"14px"}
        mt={"80px"}
      >
        #{list.id}
      </Text>
      <Text
        color={"text.dark"}
        fontSize={"18px"}
        fontWeight={"700"}
        textTransform={"capitalize"}
      >
        {list.name}
      </Text>
      <Text textAlign={"center"} color={"text.grey"} fontSize={"12px"} mb={2}>
        {genera}
      </Text>
      <Flex gap={2}>
        {list.types.map((el, index) => {
          // Render Number of Badges
          if (index < noOfBadgesToShow) {
            return (
              <Fragment key={el.slot.toString()}>
                <TypeBadge type={el} />
              </Fragment>
            );
          }
        })}
        {noOfBadgesToShow < list.types.length && noOfBadgesToShow > 0 && (
          <Tooltip label={hoverShowTypes(list.types, noOfBadgesToShow)}>
            <Center
              bg={"rgba(0, 0, 0, 0.2)"}
              px={2}
              borderRadius={"8px"}
              fontSize={"14px"}
              fontWeight={"600"}
            >
              +{list.types.length - 1}
            </Center>
          </Tooltip>
        )}
      </Flex>

      {/* Description */}

      <Text letterSpacing={"1.2px"} fontWeight={"700"} fontSize={"14px"} my={2}>
        POKEDEX ENTRY
      </Text>
      <Text textAlign={"center"} fontSize={"12px"}>
        {
          data?.flavor_text_entries?.find((item) => item.language.name === "en")
            ?.flavor_text
        }
      </Text>

      {/* Abilities */}
      <Text letterSpacing={"1.2px"} fontWeight={"700"} fontSize={"14px"} my={2}>
        ABILITIES
      </Text>
      <Flex gap={2} flexWrap={"wrap"} justifyContent={"center"}>
        {list.abilities.map((ability, index) => {
          return (
            <CapsuleText
              key={ability.slot}
              text={ability.ability.name}
              outline={index === 0 ? "#a9aecd" : "#8a4444"}
            />
          );
        })}
      </Flex>

      <Grid templateColumns={"repeat(2, 1fr)"} gap={4} my={4}>
        <GridItem>
          <CapsuleText
            text={`${(list.height / 10).toString()}m`}
            headerText="height"
          />
        </GridItem>
        <GridItem>
          <CapsuleText
            text={`${((list.weight || 0) / 10).toString()}Kg`}
            headerText="weight"
          />
        </GridItem>
        <GridItem>
          <CapsuleText
            text={list.base_experience?.toString()}
            headerText="base exp"
          />
        </GridItem>
      </Grid>

      <Text letterSpacing={"1.2px"} fontWeight={"700"} fontSize={"14px"} my={2}>
        STATS
      </Text>
      <PokeStats stats={list.stats} />
    </Box>
  );
};

export default PokeCardExpanded;
