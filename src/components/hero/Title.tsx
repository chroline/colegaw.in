import { Heading } from "@chakra-ui/react";

import { HighlightText } from "../shared/HighlightText";

export const HeroTitle = () => (
  <Heading as={"h1"} fontSize={"4xl"} fontWeight={"semibold"}>
    Full-stack{" "}
    <HighlightText textColor={"blue.500"} highlightColor={"blue.200"}>
      software engineer
    </HighlightText>
    , intuitive{" "}
    <HighlightText textColor={"green.500"} highlightColor={"green.200"}>
      UI/UX designer
    </HighlightText>
    , and enterprising{" "}
    <HighlightText textColor={"purple.500"} highlightColor={"purple.200"}>
      innovator
    </HighlightText>
    .
  </Heading>
);
