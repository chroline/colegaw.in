import React from "react";

import { Button, Heading, LinkBox, LinkOverlay, Stack, Text, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { HiExternalLink } from "react-icons/hi";

const ProjectsSlides = dynamic(async () => (await import("./Slides")).ProjectsSlides);

export default function () {
  return (
    <VStack justify={"space-around"} align={"center"} spacing={12} py={24} w={"full"}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify={"space-between"}
        spacing={6}
        maxW={"5xl"}
        w={"full"}
        px={6}
      >
        <VStack align={"start"} color={"white"}>
          <Heading as={"h1"} fontSize={{ base: "3xl", sm: "4xl" }}>
            Projects
          </Heading>
          <Text fontSize={"lg"} fontWeight={"medium"}>
            A select list of things I've made and am currently working on.
          </Text>
        </VStack>
        <Button
          as={LinkBox}
          size={"lg"}
          colorScheme={"gray"}
          shadow={"base"}
          sx={{ ":hover": { shadow: "md" } }}
          rightIcon={<HiExternalLink />}
        >
          <LinkOverlay href={"https://projects.colegaw.in"} isExternal>
            See full portfolio
          </LinkOverlay>
        </Button>
      </Stack>
      <ProjectsSlides />
    </VStack>
  );
}
