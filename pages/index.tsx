import React from "react";

import { NextSeo } from "next-seo";
import Head from "next/head";

import { BrandgineerInfo } from "~/components/brandgineer-info";
import { Footer } from "~/components/footer";
import { Hero } from "~/components/hero";
import { Projects } from "~/components/projects";
import { Section } from "~/components/shared/Section";

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
