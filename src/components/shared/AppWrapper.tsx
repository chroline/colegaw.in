import React from "react";

import { extendTheme, ChakraProvider } from "@chakra-ui/react";

import theme from "~/util/theme";

export const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={extendTheme(theme)}>
      {children}
    </ChakraProvider>
  );
};
