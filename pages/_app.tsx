import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Router } from "next/router";
import NProgress from "nprogress";

import "~/core/util/base.css";
import "~/core/util/nprogress.css";
import "~/core/vendor/Inter Web/inter.css";
import "~/core/vendor/PolySans/stylesheet.css";
import "~/core/vendor/swiper/effect-cards.min.css";
import "~/core/vendor/swiper/pagination.min.css";
import "~/core/vendor/swiper/swiper.min.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const AppWrapper = dynamic(async () => (await import("~/common/components/AppWrapper")).AppWrapper);

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
