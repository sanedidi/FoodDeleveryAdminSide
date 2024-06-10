import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./services/queryClient/index";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/saga-blue/theme.css";

const theme = createTheme();
const value = {
  appendTo: "self",
};

function App() {
  return (
    <PrimeReactProvider value={value}>
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <Suspense fallback={<></>}>
            <BrowserRouter>
              <QueryClientProvider client={queryClient}>
                <Router />
              </QueryClientProvider>
            </BrowserRouter>
          </Suspense>
        </ChakraProvider>
      </ThemeProvider>
    </PrimeReactProvider>
  );
}

export default App;
