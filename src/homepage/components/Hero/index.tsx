import { Box, Flex, HStack, Heading, Stack, Text, VStack, useBreakpointValue } from "@chakra-ui/react";

import { HighlightText } from "../../../common/components/HighlightText";
import { Logo } from "../../../common/components/Logo";
import { NameLogo } from "../../../common/components/NameLogo";
import { Socials } from "../../../common/components/Socials";
import { HeroDecoration } from "./Decoration";
import { HeroImage } from "~/homepage/components/Hero/Image";

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
                <Heading as={"h1"} fontSize={"4xl"} fontWeight={"semibold"}>
                  Versatile <HighlightText color={"blue"}>software engineer</HighlightText>, intuitive{" "}
                  <HighlightText color={"green"}>UI/UX designer</HighlightText>, & enterprising{" "}
                  <HighlightText color={"purple"}>innovator</HighlightText>.
                </Heading>
                <Text opacity={0.65} fontSize={{ base: "xl", sm: "2xl" }}>
                  I work on innovative products to deliver quality experiences to meaningful audiences.
                </Text>
              </VStack>
              <Box pt={2}>
                <Socials />
              </Box>
            </VStack>
          </VStack>
          <HeroImage />
        </Stack>
      </Flex>
    </>
  );
}
