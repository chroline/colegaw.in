import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import NextImage from "next/image";

import Signature from "../../../public/img/signature.svg";
import { AboutContent } from "~/components/about/Content";
import { AboutTitle } from "~/components/about/Title";

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
      <Flex justify={{ base: "center", md: "flex-end" }} w={"full"}>
        <Box w={72} pt={6}>
          <NextImage src={Signature} alt={"Cole Gawin"} />
        </Box>
      </Flex>
    </VStack>
  );
}
