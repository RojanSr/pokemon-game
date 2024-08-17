import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameButtonProps extends ButtonProps {
  children: ReactNode;
}

const GameButton = ({ children, ...props }: GameButtonProps) => {
  return (
    <Button bgColor={"#ADADAD"} fontSize={"30px"} py={6} {...props}>
      {children}
    </Button>
  );
};

export default GameButton;
