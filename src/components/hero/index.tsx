import React from "react";

import { Box, Flex, Stack, useBreakpointValue, VStack } from "@chakra-ui/react";

import { Logo } from "../shared/Logo";
import { Socials } from "../shared/Socials";
import { HeroBlogCTA } from "./BlogCTA";
import { HeroDecoration } from "./Decoration";
import { HeroSubtitles } from "./Subtitles";
import { HeroTitle } from "./Title";
import { HeroSlides } from "~/components/hero/Slides";

export const Hero = () => {
  const isLG = useBreakpointValue({ base: false, lg: true }, "base");

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
            <Box display={{ base: "none", lg: "block" }}>
              <Logo size={28} />
            </Box>
          )}
          <VStack spacing={6} w={"full"} pt={isLG ? 0 : 12}>
            <VStack spacing={6} w={"full"}>
              {!isLG && (
                <Box w={"full"} display={{ base: "block", lg: "none" }}>
                  <HeroBlogCTA />
                </Box>
              )}
              <HeroTitle />
              <HeroSubtitles />
              {isLG && (
                <Box w={"full"} display={{ base: "none", lg: "block" }}>
                  <HeroBlogCTA />
                </Box>
              )}
            </VStack>
            {/* <HeroMailingListCTA /> */}
            {isLG && (
              <Box display={{ base: "none", lg: "block" }}>
                <Socials />
              </Box>
            )}
          </VStack>
        </VStack>
        <HeroSlides />
        {!isLG && (
          <Box py={12} display={{ base: "block", lg: "none" }}>
            <Socials />
          </Box>
        )}
      </Stack>
      {isLG && <HeroDecoration />}
    </Flex>
  );
};
