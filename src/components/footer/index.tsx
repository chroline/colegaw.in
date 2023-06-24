import { VStack } from "@chakra-ui/react";

import { FooterCredits } from "~/components/footer/Credits";
import { CheckOutMyLynk } from "~/components/shared/CheckOutMyLynk";

export default function Footer() {
  return (
    <VStack align={"center"} pt={12} pb={24} px={6}>
      <CheckOutMyLynk />
      <FooterCredits />
    </VStack>
  );
}
