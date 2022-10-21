import type { NextPage } from "next";
import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from "next/head";

import Hero from "../components/hero";
import Drops from "../components/drops";
import Faq from "../components/faq";
import WhatIsItAbout from "../components/whats-about";
import Header from "../components/header";
import Footer from "../components/footer";
import { GetNFTs, HomeProps } from '../types';
import { getCode, getAuthToken } from '../utils';

const Home: NextPage<HomeProps> = ({ nfts }) => {
  useEffect(() => {
    console.log('running app', process.env.NODE_ENV);
    const { location: { search }} = window;
    const code = getCode(search);

    /* if there is code, ask the server for auth token */
    if (code) {
      const initAuth = async () => {
        const token = await getAuthToken(code);
        console.log({token});
      };
      initAuth();
    }
  }, []);
  
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
      <Drops nfts={nfts}/>
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://backstage-hacktoberfest-service.vercel.app/api/nfts?limit=6`);
  const { nfts }: GetNFTs = await res.json();  
  return {
    props: {
      nfts
    }
  };
}
