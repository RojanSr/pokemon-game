import { Container } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

const GlobalLoader = () => {
  return (
    <Container
      position={"fixed"}
      top={0}
      bottom={0}
      left={0}
      right={0}
      display="grid"
      placeItems={"center"}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="primary.red"
        size="xl"
      />
    </Container>
  );
};

export default GlobalLoader;
