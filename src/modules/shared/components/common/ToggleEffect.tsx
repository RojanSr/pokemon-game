import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ToggleEffectProps extends BoxProps {
  children: ReactNode;
}

const ToggleEffect = ({ children, ...otherProps }: ToggleEffectProps) => {
  return (
    <Box
      display={"inline-block"}
      _hover={{ transform: "scale(1.03)" }}
      _active={{ transform: "scale(0.9)" }}
      transition={"ease-in-out 0.2s"}
      {...otherProps}
    >
      {children}
    </Box>
  );
};

export default ToggleEffect;
