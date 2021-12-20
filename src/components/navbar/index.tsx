import React from "react";

import { Flex } from "@chakra-ui/layout";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { useAsync, useWindowScroll } from "react-use";

import { NavbarButtons } from "~/components/navbar/Buttons";
import { NavbarLinks } from "~/components/navbar/Links";
import { NameLogo } from "~/components/shared/NameLogo";

const _Wrapper: React.FC<{ display: Record<string, "flex" | "none"> }> = ({ children, display }) => {
  const { y: scroll } = useWindowScroll();

  return (
    <Flex
      as={"nav"}
      display={display}
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
        {children}
      </Flex>
    </Flex>
  );
};

function _SMNavbar() {
  return (
    <_Wrapper display={{ base: "flex", lg: "none" }}>
      <NavbarLinks.SM />
      <Box
        position={{ base: "absolute", lg: "unset" }}
        left={{ base: "50%", lg: 0 }}
        transform={{ base: "translateX(-50%)", lg: "none" }}
      >
        <NameLogo size={10} />
      </Box>
      <Box display={{ base: "none", sm: "unset" }}>
        <NavbarButtons />
      </Box>
    </_Wrapper>
  );
}

function _LGNavbar() {
  return (
    <_Wrapper display={{ base: "none", md: "flex" }}>
      <Box
        position={{ base: "absolute", lg: "unset" }}
        left={{ base: "50%", lg: 0 }}
        transform={{ base: "translateX(-50%)", lg: "none" }}
      >
        <NameLogo size={10} />
      </Box>
      <NavbarLinks.LG />
      <Box display={{ base: "none", sm: "unset" }}>
        <NavbarButtons />
      </Box>
    </_Wrapper>
  );
}

export const Navbar = () => {
  const isLG = useBreakpointValue({ base: false, lg: true });

  const { loading } = useAsync(async () => {});

  return loading ? (
    <>
      <_LGNavbar />
      <_SMNavbar />
    </>
  ) : (
    <>{isLG ? <_LGNavbar /> : <_SMNavbar />}</>
  );
};
