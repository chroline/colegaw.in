import React from "react";

import { Button, HStack, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { HiExternalLink } from "react-icons/hi";

export const NavbarButtons = () => (
  <HStack>
    <Button
      as={LinkBox}
      colorScheme={"teal"}
      shadow={"xs"}
      rightIcon={<HiExternalLink />}
      display={{ base: "none", lg: "flex" }}
    >
      <LinkOverlay href={"https://projects.colegaw.in"} isExternal>
        Portfolio
      </LinkOverlay>
    </Button>
    <Button as={LinkBox} colorScheme={"amber"} shadow={"xs"} rightIcon={<HiExternalLink />}>
      <LinkOverlay href={"https://blog.colegaw.in"} isExternal>
        Read my blog
      </LinkOverlay>
    </Button>
  </HStack>
);
