import { Button, Heading, LinkBox, LinkOverlay, Stack, Text, VStack } from "@chakra-ui/react";
import { HiExternalLink } from "react-icons/hi";

import { HighlightText } from "../shared/HighlightText";

export default function BrandgineerInfo() {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justify={"space-between"}
      align={{ base: "stretch", md: "center" }}
      py={24}
      px={6}
      spacing={6}
      maxW={"4xl"}
      w={"full"}
    >
      <VStack align={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "left" }}>
        <Text
          fontSize={{ base: "sm", md: "md" }}
          textTransform={"uppercase"}
          fontWeight={"semibold"}
          color={"gray.500"}
        >
          meaningful, passionate, and all-encompassing.
        </Text>
        <Heading as={"h1"} fontSize={{ base: "3xl", sm: "4xl" }}>
          What is a &ldquo;
          <HighlightText textColor={"purple.500"} highlightColor={"purple.200"}>
            brand
          </HighlightText>
          <HighlightText textColor={"green.500"} highlightColor={"green.200"}>
            -gineer
          </HighlightText>
          &rdquo;?
        </Heading>
      </VStack>
      <Button
        as={LinkBox}
        size={"lg"}
        colorScheme={"orange"}
        shadow={"base"}
        sx={{ "&:hover": { shadow: "md" } }}
        rightIcon={<HiExternalLink />}
      >
        <LinkOverlay href={"https://by.colegaw.in/brandgineering"} isExternal>
          Read more
        </LinkOverlay>
      </Button>
    </Stack>
  );
}
