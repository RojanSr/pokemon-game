import { Box } from "@chakra-ui/react";
import Navbar from "@shared/components/Navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box mx={"auto"} px={"20px"} maxW={"1500px"} color={"black"}>
      <Navbar />
      {children}
    </Box>
  );
};

export default Layout;
