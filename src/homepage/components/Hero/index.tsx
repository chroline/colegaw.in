import { Box, Flex, Stack } from "@chakra-ui/react";

import { HeroImage } from "~/homepage/components/Hero/Image";

import { HeroContent } from "./Content";
import { HeroDecoration } from "./Decoration";

export function Hero() {
  return (
    <>
      <HeroDecoration />
      <Flex direction={"row"} justify={"center"} pos={"relative"} w={"full"} pt={{ base: 0, sm: 16 }}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          align={"center"}
          w={"full"}
          maxW={{ base: "full", lg: "4xl", xl: "5xl" }}
          justifyContent={"space-between"}
        >
          <HeroContent />
          <Box w={{ base: "2xs", sm: "xs" }} h={{ base: "sm", sm: "md" }}>
            <HeroImage />
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
