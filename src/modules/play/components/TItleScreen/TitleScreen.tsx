import { useState } from "react";
import MainMenu from "./MainMenu";
import ChooseDifficulty from "./ChooseDifficulty";
import { DifficultyType } from "@play/index";
import FullScreenBackground from "../FullScreenBackground";
import GengarBg from "../../assets/gengar-cool.jpg";

export type MenuBtnType = "play" | "settings";

const TitleScreen = ({
  setDifficulty,
}: {
  setDifficulty: React.Dispatch<
    React.SetStateAction<DifficultyType | undefined>
  >;
}) => {
  const [clickedBtn, setClickedBtn] = useState<MenuBtnType | undefined>();
  return (
    <>
      <FullScreenBackground img={GengarBg} />
      {clickedBtn !== "play" && <MainMenu setClickedBtn={setClickedBtn} />}
      {clickedBtn === "play" && (
        <ChooseDifficulty
          setClickedBtn={setClickedBtn}
          setDifficulty={setDifficulty}
        />
      )}
    </>
  );
};

export default TitleScreen;
