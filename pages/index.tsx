import { useEffect } from "react";

import { Box, Flex, Stack, VStack, useColorMode } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Head from "next/head";

import { Footer } from "~/common/components/Footer";
import { AboutText } from "~/homepage/components/AboutText";
import { BioSidebar } from "~/homepage/components/BioSidebar";
import { Hero } from "~/homepage/components/Hero";
import { Interests } from "~/homepage/components/Interests";
import { ProjectSlides } from "~/homepage/components/ProjectSlides";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode !== "light") toggleColorMode();
  }, [colorMode, toggleColorMode]);

  return (
    <>
      <Head>
        <title>Cole Gawin</title>
      </Head>
      <NextSeo
        title="Cole Gawin"
        description="Working with passionate brands is my passion. I work with people to deliver quality experiences to meaningful audiences."
        openGraph={{
          url: "https://colegaw.in",
          title: "Cole Gawin",
          description:
            "Working with passionate brands is my passion. I work with people to deliver quality experiences to meaningful audiences.",
          images: [{ url: "https://colegaw.in/img/seo.png" }],
          site_name: "Cole Gawin",
        }}
        twitter={{
          handle: "@colegawin_",
          site: "@colegawin_",
          cardType: "summary_large_image",
        }}
      />
      <Flex
        as={"section"}
        direction={"column"}
        justify={"start"}
        align={"center"}
        position={"relative"}
        overflow={"visible"}
      >
        <Hero />
      </Flex>
      <VStack justify={"space-around"} align={"center"} spacing={12} py={24} w={"full"}>
        <ProjectSlides />
      </VStack>
      <VStack
        pt={8}
        pb={24}
        spacing={24}
        direction={"column"}
        justify={"start"}
        align={"center"}
        position={"relative"}
        overflow={"visible"}
      >
        <VStack spacing={8} align={"center"} w={"full"} maxW={"5xl"}>
          <AboutText />
          {/* <Button size={"lg"} colorScheme={"blue"} variant={"link"}>
            More about me →
          </Button> */}
        </VStack>
        <Stack
          spacing={{ base: 24, lg: 12 }}
          direction={{ base: "column", lg: "row" }}
          align={{ base: "center", lg: "start" }}
          justify={"space-between"}
          w={"full"}
          maxW={"5xl"}
          px={{ base: 6, sm: 12, lg: 20 }}
        >
          <BioSidebar />
          <Box w={{ base: "full", sm: "lg", lg: "sm" }}>
            <Interests />
          </Box>
        </Stack>
        {/* <HStack
          spacing={{ base: 24, lg: 12 }}
          direction={stackDirection}
          align={{ base: "center", lg: "start" }}
          justify={"space-between"}
          w={"full"}
          maxW={"7xl"}
          px={{ base: 6, sm: 12, lg: 20 }}
        >
          <Interests />
          <BioSidebar />
        </HStack> */}
      </VStack>
      <Footer />
      {/* <Section>
        <BrandgineerInfo />
      </Section>
      <Section background={"gray.50"}>
        <About />
      </Section>
      <Section background={"gray.100"} borderColor={"gray.200"}>
        <Footer />
      </Section> */}
    </>
  );
};

export default Index;
