import React from "react";

import { VStack } from "@chakra-ui/react";

import { FooterCredits } from "~/components/footer/Credits";
import { Socials } from "~/components/shared/Socials";

export const Footer = () => (
  <VStack align={"center"} py={24}>
    <Socials />
    <FooterCredits />
  </VStack>
);
