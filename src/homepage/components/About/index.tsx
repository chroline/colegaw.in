import { Text, VStack } from "@chakra-ui/react";

import { AboutContent } from "~/homepage/components/About/Content";
import { AboutTitle } from "~/homepage/components/About/Title";

export default function About() {
  return (
    <VStack py={20} px={6} spacing={8} maxW={"4xl"} w={"full"}>
      <VStack align={"center"} textAlign={"center"}>
        <Text
          fontSize={{ base: "sm", md: "md" }}
          textTransform={"uppercase"}
          fontWeight={"semibold"}
          color={"blue.500"}
        >
          A little introduction to Cole
        </Text>
        <AboutTitle />
      </VStack>
      <AboutContent />
    </VStack>
  );
}
