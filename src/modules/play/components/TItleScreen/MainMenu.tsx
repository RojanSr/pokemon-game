import { Flex, Text } from "@chakra-ui/react";
import Reveal from "@shared/components/common/Reveal";
import { useNavigate } from "react-router-dom";
import GameButton from "../GameButton";
import { MenuBtnType } from "./TitleScreen";

type MainMenuProps = {
  setClickedBtn: React.Dispatch<React.SetStateAction<MenuBtnType | undefined>>;
};

const MainMenu = ({ setClickedBtn }: MainMenuProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Reveal>
        <Text
          fontWeight={700}
          fontSize={"6rem"}
          color={"#ADADAD"}
          textShadow={"2px 2px 8px rgba(0, 0, 0, 0.5)"}
        >
          Main Menu
        </Text>
      </Reveal>
      <Reveal delay={0.25}>
        <Flex flexDirection={"column"} gap={10} mt={"200px"}>
          <GameButton w={"480px"} onClick={() => setClickedBtn("play")}>
            Play
          </GameButton>
          <GameButton w={"480px"} onClick={() => setClickedBtn("settings")}>
            Settings
          </GameButton>
          <GameButton w={"480px"} onClick={() => navigate("/")}>
            Exit
          </GameButton>
        </Flex>
      </Reveal>
    </>
  );
};

export default MainMenu;
