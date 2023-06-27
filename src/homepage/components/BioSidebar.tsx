import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

import education from "~/data/education.json";
import workExperience from "~/data/work.json";

import theme from "~/core/util/theme";

import { BubbleLogo } from "~/common/components/BubbleLogo";
import { InfoBox } from "~/common/components/InfoBox";
import { Briefcase, GraduationCap } from "~/common/components/icons";

export function BioSidebar() {
  return (
    <VStack spacing={6} align={"end"} w={"full"} maxW={{ base: "full", sm: "lg", lg: "md" }}>
      <InfoBox icon={<Briefcase />} title={"Work Experience"}>
        <VStack spacing={4} w={"full"}>
          {Object.entries(workExperience).map(([key, val]) => (
            <HStack key={key} spacing={3} w={"full"}>
              <BubbleLogo src={`/img/work/${key}.png`} alt={`${val.name} logo`} />
              <VStack spacing={0} align={"start"} w={"full"}>
                <Text fontSize={"sm"} fontWeight={"medium"}>
                  {val.name}
                </Text>
                <HStack justify={"space-between"} w={"full"}>
                  <Text opacity={0.7} fontSize={"xs"}>
                    {val.title}
                  </Text>
                  <Text opacity={0.6} fontSize={"xs"}>
                    {val.duration}
                  </Text>
                </HStack>
              </VStack>
            </HStack>
          ))}
        </VStack>
      </InfoBox>
      <InfoBox icon={<GraduationCap />} title={"Education"}>
        <VStack spacing={4} w={"full"}>
          {Object.entries(education).map(([key, val]) => (
            <HStack key={key} spacing={3} align={"start"} w={"full"}>
              <Box
                position={"relative"}
                w={`calc(${theme.space[3]} + ${theme.space[7]})`}
                h={`calc(${theme.space[3]} + ${theme.space[7]})`}
                m={"1px"}
                borderRadius={"50%"}
                overflow={"hidden"}
                flexShrink={"0"}
              >
                <Image src={`/img/education/${key}.png`} alt={`${val.name} logo`} fill style={{ objectFit: "cover" }} />
              </Box>
              <VStack spacing={1} align={"start"} w={"full"}>
                <Text fontSize={"sm"} fontWeight={"medium"}>
                  {val.name}
                </Text>
                <VStack spacing={0} align={"start"} w={"full"}>
                  {val.description.split("\n").map((text, i) => (
                    <Text
                      key={i}
                      opacity={0.7}
                      fontSize={"xs"}
                      fontStyle={val.description.split("\n").length === i + 1 ? "italic" : ""}
                    >
                      {text}
                    </Text>
                  ))}
                </VStack>
              </VStack>
            </HStack>
          ))}
        </VStack>
      </InfoBox>
    </VStack>
  );
}
