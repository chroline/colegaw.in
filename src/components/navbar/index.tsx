import React from "react";

import { Flex } from "@chakra-ui/layout";
import { Box, IconButton, Menu, MenuButton, useBreakpointValue } from "@chakra-ui/react";
import { HiOutlineMenu } from "react-icons/hi";
import { useWindowScroll } from "react-use";

import { NavbarButtons } from "~/components/navbar/Buttons";
import { NavbarLinks } from "~/components/navbar/Links";
import { NameLogo } from "~/components/shared/NameLogo";

export const Navbar = () => {
  const isLG = useBreakpointValue({ base: false, lg: true });
  const { y: scroll } = useWindowScroll();

  return (
    <Flex
      as={"nav"}
      w={"full"}
      h={20}
      align={"center"}
      justify={"center"}
      px={6}
      zIndex={9}
      position={"fixed"}
      boxShadow={scroll > 0 ? "sm" : "unset"}
      sx={{ background: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(10px)" }}
    >
      <Flex maxW={"7xl"} w={"full"} align={"center"} justify={"space-between"}>
        {!isLG && (
          <Box>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HiOutlineMenu size={"1.5rem"} />}
                color={"gray.500"}
                variant="ghost"
                aria-label={"menu"}
              />
              <NavbarLinks />
            </Menu>
          </Box>
        )}
        <Box
          position={{ base: "absolute", lg: "unset" }}
          left={{ base: "50%", lg: 0 }}
          transform={{ base: "translateX(-50%)", lg: "none" }}
        >
          <NameLogo size={10} />
        </Box>
        {isLG && <NavbarLinks />}
        <Box display={{ base: "none", sm: "unset" }}>
          <NavbarButtons />
        </Box>
      </Flex>
    </Flex>
  );
};
