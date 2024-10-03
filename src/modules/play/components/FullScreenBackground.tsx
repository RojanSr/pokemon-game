import { Box } from "@chakra-ui/react";

const FullScreenBackground = ({
  img,
  brightness,
}: {
  img: string;
  brightness?: number;
}) => {
  const validatedBrightness =
    typeof brightness === "number" && brightness >= 0 && brightness <= 100
      ? brightness
      : 60; // default value or handle error as needed

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
      filter={`brightness(${validatedBrightness}%)`}
    ></Box>
  );
};

export default FullScreenBackground;
