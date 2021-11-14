import React from "react";

import {
  HStack,
  Link,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HiChevronDown, HiExternalLink } from "react-icons/hi";

const _LGNavbarLinks = () => (
  <HStack spacing={6} fontSize={"lg"} fontWeight={"medium"} color={"gray.700"}>
    <Link href={"#"}>About me</Link>
    <Link href={"#"} sx={{ display: "flex", alignItems: "center" }}>
      Brand-gineering
      <span style={{ marginLeft: "5px" }}>
        <HiExternalLink />
      </span>
    </Link>
    <Menu>
      <MenuButton
        as={Link}
        _hover={{ textTransform: "none" }}
        sx={{ "> span": { display: "flex", alignItems: "center" } }}
      >
        Find me on...
        <span style={{ marginLeft: "5px" }}>
          <HiChevronDown />
        </span>
      </MenuButton>
      <MenuList>
        <MenuItem>
          <span>Fluffybuns the Destroyer</span>
        </MenuItem>
      </MenuList>
    </Menu>
  </HStack>
);

const _SMNavbarLinks = () => (
  <MenuList>
    <LinkBox>
      <MenuItem>
        <LinkOverlay>About me</LinkOverlay>
      </MenuItem>
    </LinkBox>
    <LinkBox>
      <MenuItem>
        <LinkOverlay sx={{ display: "flex", alignItems: "center" }}>
          Brand-gineering
          <span style={{ marginLeft: "5px" }}>
            <HiExternalLink />
          </span>
        </LinkOverlay>
      </MenuItem>
    </LinkBox>
    <LinkBox>
      <MenuItem>
        <LinkOverlay href={"https://projects.colegaw.in"} isExternal sx={{ display: "flex", alignItems: "center" }}>
          Portfolio
          <span style={{ marginLeft: "5px" }}>
            <HiExternalLink />
          </span>
        </LinkOverlay>
      </MenuItem>
    </LinkBox>
    <LinkBox>
      <MenuItem display={{ base: "unset", sm: "none" }}>
        <LinkOverlay href={"https://blog.colegaw.in"} isExternal sx={{ display: "flex", alignItems: "center" }}>
          Read my blog
          <span style={{ marginLeft: "5px" }}>
            <HiExternalLink />
          </span>
        </LinkOverlay>
      </MenuItem>
    </LinkBox>
  </MenuList>
);

export const NavbarLinks = () => {
  const isLG = useBreakpointValue({ base: false, lg: true }, "xl");

  return isLG ? <_LGNavbarLinks /> : <_SMNavbarLinks />;
};
