import React from "react";

import { Button, HStack, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { HiBookOpen, HiViewGrid } from "react-icons/hi";

export const NavbarButtons = () => (
  <HStack>
    <Button
      as={LinkBox}
      background={"gray.50"}
      border={"1px solid"}
      borderColor={"gray.200"}
      color={"blue.600"}
      _hover={{
        borderColor: "gray.300",
        background: "gray.100",
      }}
      _active={{ borderColor: "gray.200" }}
      rightIcon={<HiViewGrid />}
    >
      <LinkOverlay href={"https://projects.colegaw.in"} isExternal>
        Portfolio
      </LinkOverlay>
    </Button>
    <Button
      as={LinkBox}
      background={"gray.50"}
      border={"1px solid"}
      borderColor={"gray.200"}
      color={"red.600"}
      _hover={{
        borderColor: "gray.300",
        background: "gray.100",
      }}
      _active={{ borderColor: "gray.200" }}
      rightIcon={<HiBookOpen />}
      display={{ base: "none", lg: "flex" }}
    >
      <LinkOverlay href={"https://instructive.dev"} isExternal>
        Programming blog
      </LinkOverlay>
    </Button>
  </HStack>
);
