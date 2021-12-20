import React from "react";

import { Box, LinkBox, LinkOverlay } from "@chakra-ui/react";
import NextImage from "next/image";

import _CheckOutMyLynk from "../../../public/img/check out my lynk.svg";

export function CheckOutMyLynk() {
  return (
    <LinkBox>
      <LinkOverlay href={"https://lynk.colegaw.in"} isExternal>
        <Box w={72}>
          <NextImage src={_CheckOutMyLynk} alt={"check out my lynk"} priority />
        </Box>
      </LinkOverlay>
    </LinkBox>
  );
}
