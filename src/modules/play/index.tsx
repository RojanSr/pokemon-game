import { Box } from "@chakra-ui/react";
import TitleScreen from "./components/TItleScreen/TitleScreen";
import useAudio from "@shared/hooks/useAudio";
import MenuBGM from "./audio/menu.mp3";

export type DifficultyType = "easy" | "medium" | "hard" | "hardcore";
const Play = () => {
  const { playing, toggle, stop } = useAudio(MenuBGM, { loop: true });
  return (
    <Box fontFamily={"Nippo, Poppins"} fontWeight={400} p={10}>
      <TitleScreen playing={playing} toggle={toggle} stop={stop} />
    </Box>
  );
};

export default Play;
