import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box mx={"auto"} px={"20px"} maxW={"1500px"}>
      <Navbar />
      {children}
    </Box>
  );
};

export default Layout;
