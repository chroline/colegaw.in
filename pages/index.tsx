import React from "react";

import { BrandgineerInfo } from "~/components/brandgineer-info";
import { Footer } from "~/components/footer";
import { Hero } from "~/components/hero";
import { Projects } from "~/components/projects";
import { Section } from "~/components/shared/Section";

const Index = () => {
  return (
    <>
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
