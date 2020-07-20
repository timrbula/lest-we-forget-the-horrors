import { AppProps } from "next/app";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Header from "../components/Header";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Header />
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
      `}</style>
    </ThemeProvider>
  );
};

export default App;
