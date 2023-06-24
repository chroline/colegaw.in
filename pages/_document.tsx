import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang={"en"}>
        <Head>
          <script defer data-domain="colegaw.in" src="https://plausible.io/js/plausible.outbound-links.js" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="Working with passionate brands is my passion. I work with people to deliver quality experiences to meaningful audiences."
          />
          <meta
            name="keywords"
            content="developer, engineer, coding, programming, cole gawin, projects, typescript, student, programmer, deerfield"
          />

          <link rel="shortcut icon" type="image/png" href="/favicon.png" />
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
