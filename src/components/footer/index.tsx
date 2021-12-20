import React from "react";

import { VStack } from "@chakra-ui/react";

import { FooterCredits } from "~/components/footer/Credits";
import { CheckOutMyLynk } from "~/components/shared/CheckOutMyLynk";

export default function () {
  return (
    <VStack align={"center"} py={24} px={6}>
      <CheckOutMyLynk />
      <FooterCredits />
    </VStack>
  );
}
