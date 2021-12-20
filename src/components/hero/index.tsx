import React from "react";

import { Box, Flex, Stack, useBreakpointValue, VStack } from "@chakra-ui/react";

import { Logo } from "../shared/Logo";
import { Socials } from "../shared/Socials";
import { HeroBlogCTA } from "./BlogCTA";
import { HeroDecoration } from "./Decoration";
import { HeroSubtitles } from "./Subtitles";
import { HeroTitle } from "./Title";
import { HeroSlides } from "~/components/hero/Slides";
import useIsLoading from "~/util/useIsLoading";

export default function () {
  const isLG = useBreakpointValue({ base: false, lg: true });

  const isLoading = useIsLoading();

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
          {(isLoading || isLG) && (
            <Box py={{ base: 8, sm: 0 }} mb={{ base: -12, lg: 0 }}>
              <Logo size={{ base: 0, lg: 28 }} />
            </Box>
          )}
          <VStack spacing={6} w={"full"} pt={{ base: 12, lg: 0 }}>
            <Stack direction={{ base: "column-reverse", lg: "column" }} spacing={6} w={"full"}>
              <VStack spacing={6} w={"full"}>
                <HeroTitle />
                <HeroSubtitles />
              </VStack>
              <HeroBlogCTA />
            </Stack>
            {(isLoading || isLG) && (
              <Box display={{ base: "none", lg: "unset" }}>
                <Socials />
              </Box>
            )}
          </VStack>
        </VStack>
        <HeroSlides />
        {(isLoading || !isLG) && (
          <Box py={12} display={{ base: "unset", lg: "none" }}>
            <Socials />
          </Box>
        )}
      </Stack>
      <HeroDecoration />
    </Flex>
  );
}
