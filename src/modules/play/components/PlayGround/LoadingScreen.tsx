import { Grid, Spinner, Text, VStack } from "@chakra-ui/react";

const LoadingScreen = () => {
  console.log("loading");
  return (
    <Grid
      w={"100dvw"}
      h={"100dvh"}
      bg={"#a6a6a6"}
      placeItems={"center"}
      color={"black"}
    >
      <VStack mt={"-100px"}>
        <Spinner size={"lg"} thickness="4px" speed="1s" />
        <Text>Fetching Pokemon</Text>
      </VStack>
    </Grid>
  );
};

export default LoadingScreen;
