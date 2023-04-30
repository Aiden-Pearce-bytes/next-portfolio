import About from "@/components/About";
import Contact from "@/components/Contact";

import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dk | Personal Portfolio</title>
      </Head>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
