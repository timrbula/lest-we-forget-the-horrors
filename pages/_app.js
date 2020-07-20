import { AppProps } from "next/app";
import Head from "next/head";
import { Flex, ThemeProvider, CSSReset } from "@chakra-ui/core";
import Header from "../components/Header";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Head>
        <title>Lest We Forget</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=IBM+Plex+Sans+Condensed:ital@0;1&family=IBM+Plex+Sans:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&family=IBM+Plex+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Flex align="center" direction="column" mt={16}>
        <h1 className="title">Lest We Forget The Horrors</h1>
        <p className="description">A catalog of Trump's worst cruelities, collusions, corruptions, and crimes</p>
      </Flex>

      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body {
          background-color: #f2f4f8;
          color: #121619;
          padding: 0;
          margin: 0;
          font-family: "IBM Plex Sans", sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        ul,
        ol {
          list-style: none;
          padding-inline-start: 0;
        }

        a {
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          font-family: "IBM Plex Serif", serif;
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
      `}</style>
    </ThemeProvider>
  );
};

export default App;
