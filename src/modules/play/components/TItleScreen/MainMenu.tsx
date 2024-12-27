import { Flex, Text } from "@chakra-ui/react";
import Reveal from "@shared/components/common/Reveal";
import { useNavigate } from "react-router-dom";
import GameButton from "../GameButton";
import { MenuBtnType } from "./TitleScreen";
import { UseAudioReturnType } from "@shared/hooks/useAudio";
import useActiveBtnToggler from "@shared/hooks/useActiveBtnToggler";

type MainMenuProps = {
  setClickedBtn: React.Dispatch<React.SetStateAction<MenuBtnType | undefined>>;
} & UseAudioReturnType;

const mainMenuButtons: Record<MenuBtnType, { color: string; text: string }> = {
  play: { color: "initial", text: "Play" },
  settings: { color: "initial", text: "Settings" },
  exit: { color: "red.700", text: "Exit" },
};

const MainMenu = ({
  setClickedBtn,
  toggle: toogleMusic,
  playing,
  stop: stopMusic,
}: MainMenuProps) => {
  const navigate = useNavigate();

  const { activeOption } = useActiveBtnToggler(Object.keys(mainMenuButtons));
  return (
    <>
      <Reveal>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text
            fontWeight={700}
            fontSize={"6rem"}
            color={"#ADADAD"}
            textShadow={"2px 2px 8px rgba(0, 0, 0, 0.5)"}
          >
            Main Menu
          </Text>
          <GameButton onClick={toogleMusic}>
            Music:
            <Text as={"span"} color={playing ? "green" : "red"} pl={"0.2em"}>
              {playing ? "ON" : "OFF"}
            </Text>
          </GameButton>
        </Flex>
      </Reveal>
      <Reveal delay={0.25}>
        <Flex flexDirection={"column"} gap={10} mt={"200px"}>
          {/* <GameButton w={"480px"} onClick={() => setClickedBtn("play")}>
            Play
          </GameButton>
          <GameButton w={"480px"} onClick={() => setClickedBtn("settings")}>
            Settings
          </GameButton>
          <GameButton
            w={"480px"}
            onClick={() => {
              navigate("/");
              stopMusic();
            }}
          >
            Exit
          </GameButton> */}
          {(Object.keys(mainMenuButtons) as MenuBtnType[]).map((btn) => (
            <GameButton
              w={"480px"}
              onClick={() => {
                if (btn === "exit") {
                  navigate("/");
                  stopMusic();
                } else {
                  setClickedBtn(btn);
                }
              }}
              color={mainMenuButtons[btn].color}
              isActive={btn === activeOption}
            >
              {mainMenuButtons[btn].text}
            </GameButton>
          ))}
        </Flex>
      </Reveal>
    </>
  );
};

export default MainMenu;
