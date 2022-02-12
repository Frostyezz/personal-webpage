import { useState } from "react";

import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.scss";
import React from "react";

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState("en");

  return (
    <>
      <Head>
        <title>Robert Moraru</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component
        lang={lang}
        setEn={() => setLang("en")}
        setRo={() => setLang("ro")}
        {...pageProps}
      />
    </>
  );
}

export default MyApp;
