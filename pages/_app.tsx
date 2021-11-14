import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Router } from "next/router";
import NProgress from "nprogress";

import "~/util/base.css";
import "~/util/nprogress.css";
import "~/vendor/Inter Web/inter.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const AppWrapper = dynamic(async () => (await import("~/components/shared/AppWrapper")).AppWrapper);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cole Gawin</title>
      </Head>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}

export default MyApp;
