import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";

import { HighlightText } from "~/common/components/HighlightText";
import { Logo } from "~/common/components/Logo";
import { NameLogo } from "~/common/components/NameLogo";
import { Socials } from "~/common/components/Socials";

export function HeroContent() {
  return (
    <VStack
      spacing={12}
      align={"start"}
      maxW={{ base: "full", sm: "xl" }}
      w={"full"}
      pos={"relative"}
      zIndex={1}
      py={12}
      px={{ base: 6, lg: 0 }}
    >
      <HStack alignSelf={{ base: "center", lg: "unset" }} align={"center"} spacing={6}>
        <Logo size={24} />
        <Box display={{ base: "none", lg: "block" }}>
          <NameLogo size={{ base: 8, sm: 12 }} />
        </Box>
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
  );
}
