import { Box } from "@chakra-ui/react";
import GengarCoolJPG from "../assets/gengar-cool.jpg";

const MenuBG = () => {
  return (
    <Box
      zIndex={-1}
      bgImage={GengarCoolJPG}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      position={"absolute"}
      inset={0}
      w={"100dvw"}
      h={"100dvh"}
      filter={"brightness(60%)"}
    ></Box>
  );
};

export default MenuBG;
