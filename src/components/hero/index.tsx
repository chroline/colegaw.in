import { Box, Flex, HStack, Stack, VStack, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from "../shared/Logo";
import { NameLogo } from "../shared/NameLogo";
import { Socials } from "../shared/Socials";
import { HeroDecoration } from "./Decoration";
import { HeroSubtitles } from "./Subtitles";
import { HeroTitle } from "./Title";
import { HeroSlides } from "~/components/hero/Slides";

export default function Hero(): JSX.Element {
  const isLG = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <HeroDecoration />
      <Flex direction={"row"} justify={"center"} pos={"relative"} w={"full"} pt={{ base: 0, sm: 16 }}>
        <Stack
          display={"flex"}
          flexDirection={{ base: "column", lg: "row" }}
          alignItems={"center"}
          w={{ base: "full", lg: "unset" }}
        >
          <VStack
            spacing={12}
            align={"start"}
            maxW={{ base: "full", sm: "2xl" }}
            w={"full"}
            pos={"relative"}
            zIndex={1}
            py={12}
            px={{ base: 6, sm: 12 }}
          >
            <HStack alignSelf={{ base: "center", lg: "unset" }} align={"center"} spacing={6}>
              <Logo size={{ base: 24, sm: 24 }} />
              {isLG && <NameLogo size={{ base: 8, sm: 12 }} />}
            </HStack>
            <VStack spacing={6} w={"full"}>
              <VStack spacing={6} w={"full"}>
                <HeroTitle />
                <HeroSubtitles />
              </VStack>
              <Box pt={2}>
                <Socials />
              </Box>
            </VStack>
          </VStack>
          <HeroSlides />
        </Stack>
      </Flex>
    </>
  );
}
