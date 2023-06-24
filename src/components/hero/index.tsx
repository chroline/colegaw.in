import { Box, Flex, HStack, Stack, VStack, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from "../shared/Logo";
import { NameLogo } from "../shared/NameLogo";
import { Socials } from "../shared/Socials";
import { HeroSubtitles } from "./Subtitles";
import { HeroTitle } from "./Title";
import { HeroSlides } from "~/components/hero/Slides";
import theme from "~/util/theme";

export default function Hero(): JSX.Element {
  const isLG = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          width: "150%",
          height: isLG ? "150%" : "50%",
          //background: theme.colors.blueGray[300],
          maskImage: `radial-gradient(100% 100% at top ${isLG ? "right" : "center"},white,transparent)`,
        }}
      >
        <Box
          as="svg"
          sx={{
            width: "100%",
            height: "100%",
            stroke: theme.colors.gray[200],
          }}
        >
          <defs>
            <pattern
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={isLG ? "100" : "80"}
              height={isLG ? "100" : "80"}
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"></rect>
        </Box>
      </Box>
      <Flex direction={"row"} justify={"center"} pos={"relative"} w={"full"} pt={{ base: 0, sm: 16 }}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 0, lg: 16 }}
          align={"center"}
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
