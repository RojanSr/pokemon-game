import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { theme } from "./modules/shared/theme/index.ts";
import { router } from "./modules/shared/routes/routes.tsx";
import "./styles.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraBaseProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraBaseProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
