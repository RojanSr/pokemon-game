import { useState } from "react";
import MainMenu from "./MainMenu";
import ChooseDifficulty from "./ChooseDifficulty";
import FullScreenBackground from "../FullScreenBackground";
import GengarBg from "../../assets/gengar-cool.jpg";
import { UseAudioReturnType } from "@shared/hooks/useAudio";

export type MenuBtnType = "play" | "settings" | "exit";

const TitleScreen = (props: UseAudioReturnType) => {
  const [clickedBtn, setClickedBtn] = useState<MenuBtnType | undefined>();
  return (
    <>
      <FullScreenBackground img={GengarBg} />
      {clickedBtn !== "play" && (
        <MainMenu setClickedBtn={setClickedBtn} {...props} />
      )}
      {clickedBtn === "play" && (
        <ChooseDifficulty setClickedBtn={setClickedBtn} />
      )}
    </>
  );
};

export default TitleScreen;
