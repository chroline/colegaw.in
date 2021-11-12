import React from "react";

import { Box, Flex, HStack, Stack, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import { Logo } from "../shared/Logo";
import { Socials } from "../shared/Socials";
import { HeroBlogCTA } from "./BlogCTA";
import { HeroDecoration } from "./Decoration";
import { HeroSubtitles } from "./Subtitles";
import { HeroTitle } from "./Title";

const HeroSlides = dynamic(async () => (await import("./Slides")).HeroSlides);

export const Hero = () => {
  const showSocialsAboveSlides = useBreakpointValue({ base: false, lg: true }, "xl");

  return (
    <Flex direction={"row"} justify={"center"} pos={"relative"} w={"full"}>
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
          px={{ base: 6, sm: 12 }}
        >
          <HStack alignSelf={{ base: "center", lg: "unset" }} py={{ base: 8, sm: 0 }} spacing={6}>
            <Logo size={{ base: 20, sm: 24, md: 28 }} />
            {!showSocialsAboveSlides && (
              <Text fontSize={{ base: "3xl" }} fontWeight={"bold"} color={"black"} lineHeight={"shorter"}>
                Cole
                <br />
                Gawin
              </Text>
            )}
          </HStack>
          <VStack spacing={6} w={"full"}>
            <VStack spacing={6} w={"full"}>
              <HeroBlogCTA />
              <HeroTitle />
              <HeroSubtitles />
            </VStack>
            {/* <HeroMailingListCTA /> */}
            {showSocialsAboveSlides && <Socials />}
          </VStack>
        </VStack>
        <HeroSlides />
        {!showSocialsAboveSlides && (
          <Box py={12}>
            <Socials />
          </Box>
        )}
      </Stack>
      <HeroDecoration />
    </Flex>
  );
};
