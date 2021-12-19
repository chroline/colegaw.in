import React from "react";

import { HStack, IconButton, Link, LinkBox, LinkOverlay, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HiExternalLink, HiOutlineMenu } from "react-icons/hi";

function _LGNavbarLinks() {
  return (
    <HStack spacing={6} fontSize={"lg"} fontWeight={"medium"} color={"gray.700"}>
      <Link href={"#"}>About me</Link>
      <Link href={"https://by.colegaw.in/brandgineering"} isExternal>
        Brand-gineering
      </Link>
      <Link href={"https://gitlab.com/chroline"} isExternal sx={{ display: "flex", alignItems: "center" }}>
        Professional work
        <span style={{ marginLeft: "5px" }}>
          <HiExternalLink />
        </span>
      </Link>
    </HStack>
  );
}

function _SMNavbarLinks() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<HiOutlineMenu size={"1.5rem"} />}
        color={"gray.500"}
        variant="ghost"
        aria-label={"menu"}
      />
      <MenuList>
        <LinkBox>
          <MenuItem>
            <LinkOverlay>About me</LinkOverlay>
          </MenuItem>
        </LinkBox>
        <LinkBox>
          <MenuItem>
            <LinkOverlay href={"https://by.colegaw.in/brandgineering"} isExternal>
              Brand-gineering
            </LinkOverlay>
          </MenuItem>
        </LinkBox>
        <LinkBox>
          <MenuItem>
            <LinkOverlay href={"https://gitlab.com/chroline"} isExternal sx={{ display: "flex", alignItems: "center" }}>
              Professional work
              <span style={{ marginLeft: "5px" }}>
                <HiExternalLink />
              </span>
            </LinkOverlay>
          </MenuItem>
        </LinkBox>
        <LinkBox>
          <MenuItem display={{ base: "unset", sm: "none" }}>
            <LinkOverlay href={"https://projects.colegaw.in"} isExternal sx={{ display: "flex", alignItems: "center" }}>
              Portfolio
              <span style={{ marginLeft: "5px" }}>
                <HiExternalLink />
              </span>
            </LinkOverlay>
          </MenuItem>
        </LinkBox>
        <LinkBox>
          <MenuItem>
            <LinkOverlay href={"https://blog.colegaw.in"} isExternal sx={{ display: "flex", alignItems: "center" }}>
              Read my blog
              <span style={{ marginLeft: "5px" }}>
                <HiExternalLink />
              </span>
            </LinkOverlay>
          </MenuItem>
        </LinkBox>
      </MenuList>
    </Menu>
  );
}

export const NavbarLinks = {
  LG: _LGNavbarLinks,
  SM: _SMNavbarLinks,
};
