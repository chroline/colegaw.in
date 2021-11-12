import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { Router } from "next/router";
import NProgress from "nprogress";

import "../src/util/base.css";
import "../src/util/nprogress.css";
import theme from "../src/util/theme";
import "../src/vendor/Inter Web/inter.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cole Gawin</title>
      </Head>
      <ChakraProvider resetCSS theme={extendTheme({ ...theme, initialColorMode: "light" })}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
