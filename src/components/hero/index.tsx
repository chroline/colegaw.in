import React from "react";

import { Box, Flex, Stack, useBreakpointValue, VStack } from "@chakra-ui/react";

import { Logo } from "../shared/Logo";
import { Socials } from "../shared/Socials";
import { HeroBlogCTA } from "./BlogCTA";
import { HeroDecoration } from "./Decoration";
import { HeroSubtitles } from "./Subtitles";
import { HeroTitle } from "./Title";
import { HeroSlides } from "~/components/hero/Slides";

export default function () {
  const isLG = useBreakpointValue({ base: false, lg: true }, "xl");

  return (
    <Flex direction={"row"} justify={"center"} pos={"relative"} w={"full"} py={{ base: 0, md: 8 }}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: 0, lg: 16, xl: 32 }}
        align={"center"}
        w={{ base: "full", lg: "unset" }}
      >
        <VStack
          spacing={12}
          align={"start"}
          maxW={{ base: "full", sm: "xl" }}
          w={"full"}
          pos={"relative"}
          zIndex={1}
          p={12}
          px={6}
        >
          {isLG && (
            <Box py={{ base: 8, sm: 0 }}>
              <Logo size={{ base: 20, sm: 24, md: 28 }} />
            </Box>
          )}
          <VStack spacing={6} w={"full"} pt={isLG ? 0 : 12}>
            <VStack spacing={6} w={"full"}>
              {!isLG && <HeroBlogCTA />}
              <HeroTitle />
              <HeroSubtitles />
              {isLG && <HeroBlogCTA />}
            </VStack>
            {/* <HeroMailingListCTA /> */}
            {isLG && <Socials />}
          </VStack>
        </VStack>
        <HeroSlides />
        {!isLG && (
          <Box py={12}>
            <Socials />
          </Box>
        )}
      </Stack>
      <HeroDecoration />
    </Flex>
  );
}
