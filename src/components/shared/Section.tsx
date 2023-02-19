import React from "react";

import { Flex } from "@chakra-ui/layout";

export const Section: React.FC<{ background?: string; borderColor?: string; children: React.ReactNode }> = ({
  children,
  background,
  borderColor,
}) => (
  <Flex
    as={"section"}
    direction={"column"}
    justify={"start"}
    align={"center"}
    overflow={"hidden"}
    background={background}
    borderTop={borderColor && "1px solid"}
    borderColor={borderColor}
  >
    {children}
  </Flex>
);
