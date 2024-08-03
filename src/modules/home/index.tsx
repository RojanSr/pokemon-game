import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Charizard3D from "./assets/charizard3d.png";
import ToggleEffect from "../shared/components/common/ToggleEffect";

const Home = () => {
  return (
    <>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        h={"100vh"}
        overflow={"hidden"}
        zIndex={-1}
        // display={{ base: "none", lg: "block" }}
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
      <Grid gridTemplateColumns={{ base: "1fr 1fr", lg: "1fr 1fr" }}>
        <GridItem pt={{ base: "20px", md: "60px", lg: "130px" }}>
          <Text
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl", xl: "5xl" }}
            fontWeight={"semibold"}
            letterSpacing={"1.06px"}
          >
            Gotta Catch 'Em All!
          </Text>
          <Text
            fontSize={"14px"}
            maxW={{ base: "220px", md: "300px", lg: "340px", xl: "500px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sequi
            quidem vitae cumque. Impedit officia quos quibusdam nobis incidunt,
            cumque.
          </Text>
          <ToggleEffect>
            <Button
              my={6}
              bg={"text.dark"}
              _hover={{ bg: "black", color: "white", opacity: 0.8 }}
              color={"white"}
              border={"none"}
              borderRadius={"3xl"}
              px={8}
            >
              Play!
            </Button>
          </ToggleEffect>
        </GridItem>

        <GridItem display={"flex"} justifyContent={"center"}>
          <Box height={{ base: "auto", lg: "540px" }}>
            <Image
              src={Charizard3D}
              objectFit={"contain"}
              width={"100%"}
              height={"100%"}
            />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
