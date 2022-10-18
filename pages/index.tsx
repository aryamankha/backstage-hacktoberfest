import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/hero";
import Drops from "../components/drops";
import Faq from "../components/faq";
import WhatIsItAbout from "../components/whats-about";
import Header from "../components/header";
import Footer from "../components/footer"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Backstage</title>
      </Head>
      <div className="headerContainer absolute w-[100%]">
        <Header />
      </div>
      <Hero />
      <WhatIsItAbout />
      <Drops />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
