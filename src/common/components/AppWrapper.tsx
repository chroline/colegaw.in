import React from "react";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import theme from "~/core/util/theme";

export const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={extendTheme(theme)}>
      {children}
    </ChakraProvider>
  );
};
