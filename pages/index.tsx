import React from "react";

import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import Head from "next/head";

const Hero = dynamic(async () => (await import("~/components/hero")).Hero);
const About = dynamic(async () => (await import("~/components/about")).About);
const BrandgineerInfo = dynamic(async () => (await import("~/components/brandgineer-info")).BrandgineerInfo);
const Footer = dynamic(async () => (await import("~/components/footer")).Footer);
const Projects = dynamic(async () => (await import("~/components/projects")).Projects);
const Section = dynamic(async () => (await import("~/components/shared/Section")).Section);

const Index = () => {
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
      <Section>
        <Hero />
      </Section>
      <Section background={"gray.50"} borderColor={"gray.200"}>
        <About />
      </Section>
      <Section background={"blueGray.100"} borderColor={"blueGray.300"}>
        <BrandgineerInfo />
      </Section>
      <Section
        background={"linear-gradient(135deg, var(--chakra-colors-blue-500), var(--chakra-colors-indigo-500))"}
        borderColor={"blue.700"}
      >
        <Projects />
      </Section>
      <Section background={"gray.100"} borderColor={"gray.200"}>
        <Footer />
      </Section>
    </>
  );
};

export default Index;
