import Image from "next/image";
import Head from "next/head";

import Navbar from "../components/navbar";
import Header from "../components/Header";
import About from "../components/About";
import Skillset from "../components/Skillset";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home({ lang, setEn, setRo }) {
  console.log(lang);
  return (
    <>
      <Navbar lang={lang} setEn={() => setEn()} setRo={() => setRo()} />
      <Header lang={lang} setEn={() => setEn()} setRo={() => setRo()} />
      <About lang={lang} setEn={() => setEn()} setRo={() => setRo()} />
      <Skillset lang={lang} setEn={() => setEn()} setRo={() => setRo()} />
      <Projects lang={lang} setEn={() => setEn()} setRo={() => setRo()} />
      <Contact lang={lang} setEn={() => setEn()} setRo={() => setRo()} />
    </>
  );
}
