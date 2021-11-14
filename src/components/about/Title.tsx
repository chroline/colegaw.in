import React from "react";

import { Heading } from "@chakra-ui/react";

import { HighlightText } from "~/components/shared/HighlightText";

export const AboutTitle = () => (
  <Heading as={"h1"} fontSize={{ base: "3xl", sm: "4xl" }}>
    I love to{" "}
    <HighlightText textColor={"indigo.500"} highlightColor={"indigo.200"}>
      build
    </HighlightText>
    ,{" "}
    <HighlightText textColor={"emerald.500"} highlightColor={"emerald.200"}>
      design
    </HighlightText>
    , and{" "}
    <HighlightText textColor={"amber.500"} highlightColor={"amber.200"}>
      create
    </HighlightText>
    .
  </Heading>
);
