import { Heading } from "@chakra-ui/react";

import { HighlightText } from "~/common/components/HighlightText";

export const AboutTitle = () => (
  <Heading as={"h1"} fontSize={{ base: "3xl", sm: "4xl" }}>
    I love to <HighlightText color={"indigo"}>build</HighlightText>,{" "}
    <HighlightText color={"emerald"}>design</HighlightText>, and <HighlightText color={"amber"}>create</HighlightText>.
  </Heading>
);
