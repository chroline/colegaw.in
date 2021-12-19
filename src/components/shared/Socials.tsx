import React from "react";

import { Box, LinkBox, LinkOverlay } from "@chakra-ui/react";
import NextImage from "next/image";

import CheckOutMyLynk from "../../../public/img/check out my lynk.svg";

export const Socials = () => {
  return (
    <LinkBox>
      <LinkOverlay href={"https://lynk.colegaw.in"} isExternal>
        <Box w={72}>
          <NextImage src={CheckOutMyLynk} alt={"check out my lynk"} />
        </Box>
      </LinkOverlay>
    </LinkBox>
  );
};
