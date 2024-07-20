import { Box, BoxProps, Flex, Text } from "@chakra-ui/react";

interface Props extends BoxProps {
  text: string;
  headerText?: string;
  outline?: string;
}

const CapsuleText = ({ text, outline, headerText, ...props }: Props) => {
  if (!text) return;
  return (
    <Flex flexDir={"column"} alignItems={"center"}>
      <Text
        letterSpacing={"1.2px"}
        fontWeight={"700"}
        fontSize={"14px"}
        textTransform={"uppercase"}
        hidden={!headerText}
      >
        {headerText}
      </Text>
      <Box
        bg={"#f4f6f9"}
        border={outline ? `1px solid ${outline}` : "none"}
        borderRadius={"22px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        px={6}
        py={1}
        minW={"100px"}
        {...props}
      >
        <Text
          fontWeight={600}
          fontSize={"12px"}
          color={"text.dark"}
          textTransform={"capitalize"}
        >
          {text}
        </Text>
      </Box>
    </Flex>
  );
};

export default CapsuleText;
