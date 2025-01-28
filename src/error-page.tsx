import { Box, Image, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";
import confusedPsyduck from "@shared/assets/psyduck_confuse.gif";

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
      color={"black"}
      bg={"white"}
    >
      <Image
        src={confusedPsyduck}
        height={"220px"}
        aspectRatio={"1:1"}
        mb={"20px"}
      />
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
