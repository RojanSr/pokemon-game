import { Box, Flex, Text } from "@chakra-ui/react";
import MenuBG from "./components/MenuBG";
import GameButton from "./components/GameButton";
import Reveal from "@shared/components/common/Reveal";

const Play = () => {
  return (
    <Box fontFamily={"Nippo"} fontWeight={400} p={10}>
      <MenuBG />
      <Reveal>
        <Text
          fontWeight={700}
          fontSize={"6rem"}
          color={"#ADADAD"}
          textShadow={"2px 2px 8px rgba(0, 0, 0, 0.5)"}
        >
          Main Menu
        </Text>
        <Flex flexDirection={"column"} gap={10} mt={"200px"}>
          <GameButton w={"480px"}>Play</GameButton>
          <GameButton w={"480px"}>Settings</GameButton>
          <GameButton w={"480px"}>Exit</GameButton>
        </Flex>
      </Reveal>
    </Box>
  );
};

export default Play;
