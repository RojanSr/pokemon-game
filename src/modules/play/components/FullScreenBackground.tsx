import { Box } from "@chakra-ui/react";

const FullScreenBackground = ({ img }: { img: string }) => {
  return (
    <Box
      zIndex={-1}
      bgImage={img}
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

export default FullScreenBackground;
