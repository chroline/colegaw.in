import React from "react";

import { VStack } from "@chakra-ui/react";

import { FooterCredits } from "~/components/footer/Credits";
import { Socials } from "~/components/shared/Socials";

export default function () {
  return (
    <VStack align={"center"} py={24} px={6}>
      <Socials />
      <FooterCredits />
    </VStack>
  );
}
