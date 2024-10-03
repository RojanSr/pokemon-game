import { Box } from "@chakra-ui/react";
import TitleScreen from "./components/TItleScreen/TitleScreen";

export type DifficultyType = "easy" | "medium" | "hard" | "hardcore";
const Play = () => {
  return (
    <Box fontFamily={"Nippo, Poppins"} fontWeight={400} p={10}>
      <TitleScreen />
    </Box>
  );
};

export default Play;
