import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Playground from "./components/Playground";
import TitleScreen from "./components/TItleScreen/TitleScreen";

export type DifficultyType = "easy" | "medium" | "hard" | "hardcore";
const Play = () => {
  const [difficulty, setDifficulty] = useState<DifficultyType>();
  return (
    <Box fontFamily={"Nippo, Poppins"} fontWeight={400} p={10}>
      {!difficulty && <TitleScreen setDifficulty={setDifficulty} />}

      {/* Start the game when difficulty is set */}
      {!!difficulty && <Playground />}
    </Box>
  );
};

export default Play;
