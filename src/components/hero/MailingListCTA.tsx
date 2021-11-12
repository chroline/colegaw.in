import React from "react";

import { VStack, Stack, Input, Text, Tooltip, Box, Button } from "@chakra-ui/react";

export const HeroMailingListCTA = () => (
  <VStack spacing={2} align={"start"} w={"full"}>
    <Text fontWeight={"medium"} fontSize={{ base: "normal", sm: "lg" }}>
      Interested in hearing what I'm up to?
    </Text>
    <Stack direction={{ base: "column", sm: "row" }} w={"full"}>
      <Input size={"lg"} placeholder={"Email address..."} w={"full"} shadow={"sm"} />
      <Tooltip label={"Coming soon!"}>
        <Box flexShrink={0} w={{ base: "full", sm: "unset" }}>
          <Button size={"lg"} w={"full"} colorScheme={"red"} shadow={"sm"} disabled>
            Join mailing list
          </Button>
        </Box>
      </Tooltip>
    </Stack>
  </VStack>
);
