import { Box } from "@chakra-ui/react";
import Navbar from "./modules/shared/components/Navbar";

const App = () => {
  return (
    <>
      <Box maxW={"1200px"} mx={"auto"}>
        <Navbar />
      </Box>
      <Box>App</Box>
    </>
  );
};

export default App;
