import {
  HStack,
  IconButton,
  Link,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HiOutlineMenu } from "react-icons/hi";

function _LGNavbarLinks() {
  return (
    <HStack spacing={6} fontSize={"lg"} fontWeight={"medium"} color={"gray.700"}>
      <Link href={"https://by.colegaw.in/brandgineering"} isExternal>
        Brand-gineering
      </Link>
      <Link href={"https://buymeacoffee.com/colegawin"} isExternal sx={{ display: "flex", alignItems: "center" }}>
        Support me
      </Link>
      <Link href={"https://github.com/chroline"} isExternal sx={{ display: "flex", alignItems: "center" }}>
        Github
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
        {/*<LinkBox>
          <MenuItem>
            <LinkOverlay>About me</LinkOverlay>
          </MenuItem>
        </LinkBox>*/}
        <LinkBox>
          <MenuItem>
            <LinkOverlay href={"https://by.colegaw.in/brandgineering"} isExternal>
              Brand-gineering
            </LinkOverlay>
          </MenuItem>
        </LinkBox>
        <LinkBox>
          <MenuItem>
            <LinkOverlay
              href={"https://buymeacoffee.com/colegawin"}
              isExternal
              sx={{ display: "flex", alignItems: "center" }}
            >
              Support me
              {/*<span style={{ marginLeft: "5px" }}>
                <HiExternalLink />
              </span>*/}
            </LinkOverlay>
          </MenuItem>
        </LinkBox>
        <LinkBox>
          <MenuItem>
            <LinkOverlay href={"https://github.com/chroline"} isExternal sx={{ display: "flex", alignItems: "center" }}>
              Github
              {/*<span style={{ marginLeft: "5px" }}>
                <HiExternalLink />
              </span>*/}
            </LinkOverlay>
          </MenuItem>
        </LinkBox>
        <MenuDivider />
        <LinkBox>
          <MenuItem display={{ base: "unset", sm: "none" }}>
            <LinkOverlay
              href={"https://projects.colegaw.in"}
              isExternal
              sx={{ display: "flex", alignItems: "center" }}
              color={"blue.600"}
              fontWeight={"medium"}
            >
              Portfolio
              {/*<span style={{ marginLeft: "5px" }}>
                <HiExternalLink />
              </span>*/}
            </LinkOverlay>
          </MenuItem>
        </LinkBox>
        <LinkBox>
          <MenuItem>
            <LinkOverlay
              href={"https://instructive.dev"}
              isExternal
              sx={{ display: "flex", alignItems: "center" }}
              color={"red.600"}
              fontWeight={"medium"}
            >
              Programming blog
              {/*<span style={{ marginLeft: "5px" }}>
                <HiExternalLink />
              </span>*/}
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
