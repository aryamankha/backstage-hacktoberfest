import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Hero from "../components/hero";
import Drops from "../components/drops";
import Faq from "../components/faq";
import WhatIsItAbout from "../components/whats-about";
import Header from "../components/header";
import Footer from "../components/footer";

import { GetNFTs, HomeProps } from "../types";

const Home: NextPage<HomeProps> = ({ nfts }) => {
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
      <Drops nfts={nfts} />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    `https://backstage-hacktoberfest-service.vercel.app/api/nfts?limit=6`
  );
  const { nfts }: GetNFTs = await res.json();
  return {
    props: {
      nfts,
    },
  };
};
