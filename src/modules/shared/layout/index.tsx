import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box maxW={"1200px"} mx={"auto"}>
      <Navbar />
      {children}
    </Box>
  );
};

export default Layout;
