import { VStack } from "@chakra-ui/react";

import { CheckOutMyLynk } from "~/common/components/CheckOutMyLynk";
import { FooterCredits } from "~/homepage/components/Footer/Credits";

export default function Footer() {
  return (
    <VStack align={"center"} pt={12} pb={24} px={6}>
      <CheckOutMyLynk />
      <FooterCredits />
    </VStack>
  );
}
