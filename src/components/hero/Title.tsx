import { Heading } from "@chakra-ui/react";

import { HighlightText } from "../shared/HighlightText";

export const HeroTitle = () => (
  <Heading as={"h1"} fontSize={"4xl"} fontWeight={"semibold"}>
    Versatile <HighlightText color={"blue"}>software engineer</HighlightText>, intuitive{" "}
    <HighlightText color={"green"}>UI/UX designer</HighlightText>, & enterprising{" "}
    <HighlightText color={"purple"}>innovator</HighlightText>.
  </Heading>
);
