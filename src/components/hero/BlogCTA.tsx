import React from "react";

import { Badge, Box, Flex, Stack, Text } from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";

export const HeroBlogCTA = () => (
  <Box as={"a"} href={"https://blog.colegaw.in"} target={"_blank"} w={"full"}>
    <Stack direction={{ base: "column", md: "row" }} justify={"start"} w={"full"} spacing={4} isTruncated>
      <Box>
        <Badge colorScheme={"orange"} fontSize={"normal"} px={2} borderRadius={"md"} textDecoration={"none !important"}>
          ON THE BLOG
        </Badge>
      </Box>
      <Flex overflow={"hidden"} align={"center"}>
        <Text color={"orange.500"} fontWeight={"semibold"} isTruncated>
          Why the New Firebase Web v9 Modular SDK is a Game-Changer
        </Text>
        <Text
          as={"span"}
          w={5}
          color={"orange.500"}
          display={"inline-block"}
          flexShrink={0}
          sx={{ svg: { w: "full", h: "full" } }}
        >
          <HiChevronRight />
        </Text>
      </Flex>
    </Stack>
  </Box>
);
