import { Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";

import _AboutSummary from "~/data/content/about-summary.mdx";

import { HighlightText } from "~/common/components/HighlightText";
import { MarkdownStyle } from "~/common/components/MarkdownStyle";

export function AboutText() {
  const headlineTextColor = useColorModeValue("blue.500", "blue.400");
  const textOpacity = useColorModeValue(0.7, 1);

  return (
    <VStack spacing={8} align={"start"} w={"full"} px={{ base: 6, sm: 12, lg: 20 }}>
      <VStack align={"start"}>
        <Text
          fontSize={{ base: "sm", md: "md" }}
          textTransform={"uppercase"}
          fontWeight={"semibold"}
          color={headlineTextColor}
        >
          A little introduction to Cole
        </Text>
        <Heading as={"h1"} fontSize={"3xl"}>
          I love to <HighlightText color={"indigo"}>build</HighlightText>,{" "}
          <HighlightText color={"emerald"}>design</HighlightText>, and{" "}
          <HighlightText color={"amber"}>create</HighlightText>.
        </Heading>
      </VStack>
      <MarkdownStyle
        sx={{
          p: {
            "&:nth-of-type(1)": { fontSize: "lg", opacity: textOpacity },
          },
        }}
      >
        <_AboutSummary />
      </MarkdownStyle>
    </VStack>
  );
}
