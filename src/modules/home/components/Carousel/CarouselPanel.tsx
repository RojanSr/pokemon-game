import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ToggleEffect from "@shared/components/common/ToggleEffect";
import { Slide } from "@home/types";

interface CarouselPanelProps {
  panel: Slide;
  activeSlideIndex: number;
  index: number;
}

const CarouselPanel = ({
  panel,
  activeSlideIndex,
  index,
}: CarouselPanelProps) => {
  return (
    <Grid
      width={"100%"}
      gridTemplateColumns={{ base: "1fr 1fr", lg: "1fr 1fr" }}
      opacity={activeSlideIndex === index ? 1 : 0}
      transform={
        activeSlideIndex === index ? "translateY(0)" : "translateY(-1000px)"
      }
      zIndex={activeSlideIndex ? 9 : 0}
      transition={"opacity 0.6s ease-in-out"}
      position={"absolute"}
    >
      <GridItem pt={{ base: "20px", md: "60px", lg: "130px" }}>
        <Text
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl", xl: "5xl" }}
          fontWeight={"semibold"}
          letterSpacing={"1.06px"}
        >
          {panel.title}
        </Text>
        <Text
          fontSize={"14px"}
          maxW={{ base: "220px", md: "300px", lg: "340px", xl: "500px" }}
        >
          {panel.subText}
        </Text>
        <ToggleEffect hidden={!panel.btn}>
          <Link to={panel.btn.to}>
            <Button
              my={6}
              bg={"text.dark"}
              _hover={{ bg: "black", color: "white", opacity: 0.8 }}
              color={"white"}
              border={"none"}
              borderRadius={"3xl"}
              px={8}
            >
              {panel.btn.name}
            </Button>
          </Link>
        </ToggleEffect>
      </GridItem>

      <GridItem display={"flex"} justifyContent={"center"}>
        <Box height={{ base: "auto", lg: "540px" }}>
          <Image
            src={panel.imageSrc}
            objectFit={"contain"}
            width={"100%"}
            height={"100%"}
          />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default CarouselPanel;
