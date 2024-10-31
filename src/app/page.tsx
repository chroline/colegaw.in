"use client";

import Experience from "./experience";
import Hero from "./hero";
import "./prose.scss";
import Research from "./research";
import Summary from "./summary";
import { motion, useAnimation } from "framer-motion";
import Head from "next/head";
import { useEffect } from "react";
import { ProjectSlides } from "~/app/project-slides";
import { Footer } from "~/components/Footer";
import { Logo } from "~/components/Logo";
import { NameLogo } from "~/components/NameLogo";
import { container, item } from "~/lib/animations";

const Index = () => {
  const controlsHero = useAnimation();
  const controlsProjectSlides = useAnimation();
  const controlsAboutSummary = useAnimation();

  useEffect(() => {
    controlsHero.start("visible");
    setTimeout(() => {
      controlsProjectSlides.start("visible");
    }, 200);
  }, [controlsHero, controlsProjectSlides]);

  return (
    <>
      <Head>
        <title>Cole Gawin</title>
      </Head>
      {/* <NextSeo
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
      /> */}
      <motion.div initial="hidden" animate="visible" variants={container}>
        <div className="absolute top-0 z-10 flex h-24 w-full items-center justify-center">
          <div className="m-auto flex items-center justify-center gap-4">
            <Logo />
            <NameLogo />
          </div>
        </div>
        <Hero animate={controlsHero} />
        <motion.div
          className="flex w-full flex-col items-center"
          initial="hidden"
          animate={controlsProjectSlides}
          variants={item}
        >
          <ProjectSlides />
        </motion.div>
        <div className="w-full px-6 py-32">
          <div className="flex flex-col items-center gap-16">
            <Summary animate={controlsAboutSummary} />
            <Research />
            <Experience />
          </div>
        </div>
      </motion.div>
      {/* <div className="pt-8 pb-14 lg:pb-24 space-y-14 lg:space-y-24 w-full items-center flex flex-col relative overflow-visible">
        <div className="w-full max-w-5xl space-y-8 flex flex-col items-center">
          <AboutText />
        </div>
        <div className="w-full max-w-5xl px-6 sm:px-12 lg:px-20 flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start space-y-14 lg:space-y-0 lg:space-x-12">
          <BioSidebar />
          <div className="w-full sm:max-w-lg lg:max-w-sm">
            <Interests />
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default Index;
