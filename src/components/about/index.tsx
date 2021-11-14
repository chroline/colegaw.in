import React from "react";

import { Text, VStack } from "@chakra-ui/react";

import { AboutContent } from "~/components/about/Content";
import { AboutTitle } from "~/components/about/Title";

export const About = () => (
  <VStack py={24} px={6} spacing={8} maxW={"4xl"} w={"full"}>
    <VStack align={"center"} textAlign={"center"}>
      <Text
        fontSize={{ base: "sm", md: "md" }}
        textTransform={"uppercase"}
        fontWeight={"semibold"}
        color={"blue.500"}
      >
        A little about me
      </Text>
      <AboutTitle />
    </VStack>
    <AboutContent />
  </VStack>
);
