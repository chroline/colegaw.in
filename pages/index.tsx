import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import Head from "next/head";

import { Section } from "~/components/shared/Section";

const Hero = dynamic(async () => await import("~/components/hero"));
const About = dynamic(async () => await import("~/components/about"));
const BrandgineerInfo = dynamic(async () => await import("~/components/brandgineer-info"));
const Projects = dynamic(async () => await import("~/components/projects"));
const Footer = dynamic(async () => await import("~/components/footer"));

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
      {/* <Navbar /> */}
      <Section background={"gray.50"}>
        <Hero />
      </Section>
      <Section>
        <Projects />
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
