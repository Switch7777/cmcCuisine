// pages/_app.js
import "../styles/globals.css";
import Head from "next/head";
import { LangProvider } from "../context/LangContext";

function App({ Component, pageProps }) {
  return (
    <LangProvider>
      <Head>
        <title>CMC — Centre Méditerranéen de la Cuisine</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </LangProvider>
  );
}

export default App;
