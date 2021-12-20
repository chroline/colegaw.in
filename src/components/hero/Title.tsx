import React from "react";

import { Heading } from "@chakra-ui/react";

import { HighlightText } from "../shared/HighlightText";

export const HeroTitle = () => (
  <Heading as={"h1"} fontSize={"4xl"} fontWeight={"extrabold"} color={"black"}>
    Hey 👋, I&apos;m{" "}
    <HighlightText textColor={"blue.500"} highlightColor={"blue.200"}>
      Cole Gawin
    </HighlightText>
    , freelance{" "}
    <HighlightText textColor={"purple.500"} highlightColor={"purple.200"}>
      brand
    </HighlightText>
    <HighlightText textColor={"green.500"} highlightColor={"green.200"}>
      -gineer
    </HighlightText>
    .
  </Heading>
);
