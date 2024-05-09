import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./services/queryClient/index";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </BrowserRouter>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;
