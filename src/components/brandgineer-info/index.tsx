import React from "react";

import { Box, Button, Heading, Stack, Text, Tooltip, VStack } from "@chakra-ui/react";
import { HiArrowRight } from "react-icons/hi";

import { HighlightText } from "../shared/HighlightText";

export const BrandgineerInfo = () => (
  <Stack
    direction={{ base: "column", md: "row" }}
    justify={"space-between"}
    align={{ base: "stretch", md: "center" }}
    py={24}
    px={6}
    spacing={6}
    maxW={"4xl"}
    w={"full"}
  >
    <VStack align={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "left" }}>
      <Text fontSize={{ base: "sm", md: "md" }} textTransform={"uppercase"} fontWeight={"semibold"} color={"gray.500"}>
        More than an engineer — more than a designer.
      </Text>
      <Heading as={"h1"} fontSize={{ base: "3xl", sm: "4xl" }}>
        What is a "
        <HighlightText textColor={"purple.500"} highlightColor={"purple.200"}>
          brand
        </HighlightText>
        <HighlightText textColor={"green.500"} highlightColor={"green.200"}>
          -gineer
        </HighlightText>
        "?
      </Heading>
    </VStack>
    <Tooltip label={"Coming soon!"}>
      <Button as={Box} size={"lg"} colorScheme={"orange"} rightIcon={<HiArrowRight />} disabled>
        Read more
      </Button>
    </Tooltip>
  </Stack>
);
