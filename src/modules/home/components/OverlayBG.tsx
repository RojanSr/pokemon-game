import { Box } from "@chakra-ui/react";

const OverlayBG = () => {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      h={"100vh"}
      overflow={"hidden"}
      zIndex={-1}
    >
      <Box
        position="absolute"
        top="-30%"
        right={"-45%"}
        width="100vw"
        height="150vh"
        bg="#b8c370"
        transform={"rotate(8deg)"}
        zIndex={-9}
      />
    </Box>
  );
};

export default OverlayBG;
