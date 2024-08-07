import { Center, Flex, Text } from "@chakra-ui/react";
import { PokemonDetails } from "@pokedex/types";
import abbreviateStat from "@pokedex/utils/abbreviateStat";
import getStatColor from "@pokedex/utils/getStatsColor";
import { StatNames } from "@shared/constants";

const StatIcon = ({
  stat_name,
  base_stat,
}: {
  stat_name: StatNames;
  base_stat: number;
}) => {
  return (
    <Flex
      p={1}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={1}
      bg={stat_name === "tot" ? "#8badff" : "#f4f6f9"}
      borderRadius={"18px"}
      fontWeight={"700"}
    >
      <Center
        borderRadius={"50%"}
        w={"25px"}
        h={"25px"}
        fontSize={"10px"}
        color={"white"}
        bgColor={getStatColor(stat_name)}
      >
        {abbreviateStat(stat_name)}
      </Center>
      <Text fontSize={"12px"}>{base_stat}</Text>
    </Flex>
  );
};
const PokeStats = ({ stats }: { stats: PokemonDetails["stats"] }) => {
  const total = stats.reduce((acc, stat) => acc + stat.base_stat, 0);
  return (
    <Flex gap={"6px"} flexWrap={"wrap"}>
      {stats?.map((stat) => {
        return (
          <StatIcon
            key={stat.stat.url}
            stat_name={stat.stat.name}
            base_stat={stat.base_stat}
          />
        );
      })}
      <StatIcon stat_name="tot" base_stat={total} />
    </Flex>
  );
};

export default PokeStats;
