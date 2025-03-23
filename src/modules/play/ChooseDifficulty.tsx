import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import GameButton from "./components/GameButton";
import Reveal from "@shared/components/common/Reveal";
import { DifficultyType, MenuBtnType } from "@play/Play";
import { useNavigate } from "react-router-dom";
import { routes } from "@shared/routes/constants";
import useActiveBtnToggler from "@shared/hooks/useActiveBtnToggler";
import ActivePokeballSVG from "@shared/assets/active/pokeball.svg";
import { DIFFICULTY_DESCRIPTION } from "@shared/constants/game";

type ChooseDifficultyProps = {
  setClickedBtn: React.Dispatch<React.SetStateAction<MenuBtnType | undefined>>;
};

type AllButtons = DifficultyType | "menu";

const buttons: Record<AllButtons, { color: string; text: string }> = {
  easy: { color: "green.700", text: "Easy" },
  medium: { color: "yellow.700", text: "Medium" },
  hard: { color: "orange.700", text: "Hard" },
  hardcore: { color: "red.800", text: "Hardcore" },
  menu: { color: "initial", text: "Back To Menu" },
};

const PreviewDifficulty = ({ difficulty }: { difficulty: DifficultyType }) => {
  return (
    <Box bg={"rgba(0, 0, 0, 0.3)"} px={8} py={4} rounded={"3xl"} minW={"600px"}>
      <Text
        color={"white.ghost_hover"}
        fontSize={"3rem"}
        fontWeight={"semibold"}
      >
        {buttons[difficulty].text} Mode:-
      </Text>

      <UnorderedList
        color={"white.ghost_hover"}
        fontSize={"1.6rem"}
        fontWeight={"500"}
        mt={"30px"}
        listStyleType={"none"}
      >
        {DIFFICULTY_DESCRIPTION[difficulty].map((desc) => (
          <ListItem
            display={"flex"}
            alignItems={"center"}
            gap={"12px"}
            mt={"0.3em"}
          >
            <Box
              display={"inline-block"}
              height={"22px"}
              width={"22px"}
              bgImage={ActivePokeballSVG}
              bgSize={"cover"}
            ></Box>
            <Text>{desc}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

const ChooseDifficulty = ({ setClickedBtn }: ChooseDifficultyProps) => {
  const { activeOption } = useActiveBtnToggler(Object.keys(buttons));
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
          Choose Difficulty
        </Text>
      </Reveal>
      <Reveal delay={0.25}>
        <Flex mt={"200px"} justifyContent={"space-between"}>
          <Flex flexDirection={"column"} gap={10}>
            {(Object.keys(buttons) as AllButtons[]).map((key) => (
              <GameButton
                key={key}
                w={"480px"}
                color={buttons[key].color}
                onClick={() => {
                  if (key === "menu") {
                    setClickedBtn(undefined);
                  } else {
                    navigate(routes.playground, {
                      state: {
                        difficulty: key,
                      },
                    });
                  }
                }}
                isActive={key === activeOption}
              >
                {buttons[key].text}
              </GameButton>
            ))}
          </Flex>
          {activeOption !== "menu" && (
            <PreviewDifficulty difficulty={activeOption as DifficultyType} />
          )}
        </Flex>
      </Reveal>
    </>
  );
};

export default ChooseDifficulty;
