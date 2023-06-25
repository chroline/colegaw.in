import { useEffect } from "react";

import { useColorMode } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import Head from "next/head";

import { Section } from "~/common/components/Section";

const Hero = dynamic(async () => await import("~/homepage/components/Hero"));
const About = dynamic(async () => await import("~/homepage/components/About"));
// const BrandgineerInfo = dynamic(async () => await import("~/components/brandgineer-info"));
const Projects = dynamic(async () => await import("~/homepage/components/Projects"));
const Footer = dynamic(async () => await import("~/homepage/components/Footer"));

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
      {/* <Navbar /> */}
      <Section>
        <Hero />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Footer />
      </Section>
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
