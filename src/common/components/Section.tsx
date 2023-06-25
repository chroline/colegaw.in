import React from "react";

import { Flex } from "@chakra-ui/layout";

export const Section: React.FC<{ borderColor?: string; children: React.ReactNode }> = ({ children, borderColor }) => (
  <Flex
    as={"section"}
    direction={"column"}
    justify={"start"}
    align={"center"}
    position={"relative"}
    overflow={"visible"}
    borderTop={borderColor && "1px solid"}
    borderColor={borderColor}
  >
    {children}
  </Flex>
);
