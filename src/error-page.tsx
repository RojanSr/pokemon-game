import { Box, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";
import errorAnimation from "@shared/assets/lottie/lottieErrorAnimation.json";
import LottieAnimation from "@shared/components/LottieAnimation";

export default function ErrorPage() {
  const error = useRouteError();

  // Type assertion to handle the unknown type
  const errorMessage =
    (error as { statusText?: string; message?: string })?.statusText ||
    (error as { message?: string })?.message;

  console.error(error);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100vw"}
      h={"100vh"}
      transform={"translateY(-10%)"}
    >
      <Box w={"200px"} h={"200px"} mb={"50px"}>
        <LottieAnimation animationJSON={errorAnimation} />
      </Box>
      <Text fontSize={"22px"} fontWeight={"600"}>
        Oops!
      </Text>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text>
        <Text as={"i"}>{errorMessage || "An unknown error occurred."}</Text>
      </Text>
    </Box>
  );
}
