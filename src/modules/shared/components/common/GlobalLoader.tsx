import { Container } from "@chakra-ui/layout";
import { SpinnerProps } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";

const GlobalLoader = (props: SpinnerProps) => {
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
        {...props}
      />
    </Container>
  );
};

export default GlobalLoader;
