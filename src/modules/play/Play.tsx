import { Box } from "@chakra-ui/react";
import useAudio from "@shared/hooks/useAudio";
import IChooseYouMp3 from "./audio/bgMusic/i_choose_you.mp3";
import ZinniaBattleMp3 from "./audio/bgMusic/zinnia_battle.mp3";
import { useState } from "react";
import FullScreenBackground from "./components/FullScreenBackground";
import GengarBg from "./assets/gengar-cool.jpg";
import MainMenu from "./MainMenu";
import ChooseDifficulty from "./ChooseDifficulty";

export type DifficultyType = "easy" | "medium" | "hard" | "hardcore";
export type MenuBtnType = "play" | "settings" | "exit";

const Play = () => {
  const [clickedBtn, setClickedBtn] = useState<MenuBtnType | undefined>();
  const { playing, toggle, stop } = useAudio([IChooseYouMp3, ZinniaBattleMp3], {
    loop: true,
    shuffle: true,
  });
  return (
    <Box fontFamily={"Nippo, Poppins"} fontWeight={400} p={10}>
      <FullScreenBackground img={GengarBg} />
      {clickedBtn !== "play" && (
        <MainMenu
          setClickedBtn={setClickedBtn}
          playing={playing}
          toggle={toggle}
          stop={stop}
        />
      )}
      {clickedBtn === "play" && (
        <ChooseDifficulty setClickedBtn={setClickedBtn} />
      )}
    </Box>
  );
};

export default Play;
