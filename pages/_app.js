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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
        ></link>
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
