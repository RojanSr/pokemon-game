import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode, useEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa";

interface GameButtonProps extends ButtonProps {
  children: ReactNode;
  isActive?: boolean;
}

const GameButton = ({
  children,
  isActive = false,
  ...props
}: GameButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  function clickActiveButton(e: KeyboardEvent) {
    if (!isActive) return;
    if (e.key === "Enter") {
      buttonRef.current?.click();
    }
  }

  useEffect(() => {
    if (isActive) {
      document.addEventListener("keypress", clickActiveButton);
      return () => {
        document.removeEventListener("keypress", clickActiveButton);
      };
    }
  }, [isActive, buttonRef]);

  return (
    <Button
      ref={buttonRef}
      bgColor={isActive ? "#faf5ef" : "#ADADAD"}
      _hover={{
        bgColor: "#faf5ef",
      }}
      position={"relative"}
      fontSize={"30px"}
      py={6}
      transform={isActive ? "scale(1.03)" : ""}
      transition={"transform 0.1s ease-in-out"}
      {...props}
    >
      {isActive && (
        <FaPlay
          style={{
            position: "absolute",
            left: 40,
            color: "#061833",
          }}
        />
      )}
      {children}
    </Button>
  );
};

export default GameButton;
