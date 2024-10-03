import { Flex, Text } from "@chakra-ui/react";
import GameButton from "../GameButton";
import Reveal from "@shared/components/common/Reveal";
import { DifficultyType } from "@play/index";
import { MenuBtnType } from "./TitleScreen";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@shared/routes/constants";

type ChooseDifficultyProps = {
  setClickedBtn: React.Dispatch<React.SetStateAction<MenuBtnType | undefined>>;
};

const difficultyBtn: Record<DifficultyType, { color: string; text: string }> = {
  easy: { color: "green.700", text: "Easy" },
  medium: { color: "yellow.700", text: "Medium" },
  hard: { color: "orange.700", text: "Hard" },
  hardcore: { color: "red.800", text: "Hardcore" },
};

const ChooseDifficulty = ({ setClickedBtn }: ChooseDifficultyProps) => {
  const [difficulty, setDifficulty] = useState<DifficultyType>();

  const navigate = useNavigate();

  if (difficulty) {
    navigate(routes.playground, {
      state: {
        difficulty,
      },
    });
  }

  return (
    <>
      <Reveal>
        <Text
          fontWeight={700}
          fontSize={"6rem"}
          color={"#ADADAD"}
          textShadow={"2px 2px 8px rgba(0, 0, 0, 0.5)"}
        >
          Choose Difficulty
        </Text>
      </Reveal>
      <Reveal delay={0.25}>
        <Flex flexDirection={"column"} gap={10} mt={"200px"}>
          {(Object.keys(difficultyBtn) as DifficultyType[]).map((key) => (
            <GameButton
              key={key}
              w={"480px"}
              color={difficultyBtn[key].color}
              onClick={() => setDifficulty(key)}
            >
              {difficultyBtn[key].text}
            </GameButton>
          ))}
          <GameButton w={"480px"} onClick={() => setClickedBtn(undefined)}>
            Main Menu
          </GameButton>
        </Flex>
      </Reveal>
    </>
  );
};

export default ChooseDifficulty;
