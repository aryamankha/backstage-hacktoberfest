import type { NextPage } from "next";
import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from "next/head";
import Cookies from 'js-cookie';

import Hero from "../components/hero";
import Drops from "../components/drops";
import Faq from "../components/faq";
import WhatIsItAbout from "../components/whats-about";
import Header from "../components/header";
import Footer from "../components/footer";
import { GetNFTs, HomeProps } from '../types';
import { getCode, getAuthToken } from '../utils';
import { useUser } from '../contexts/UserContext';

const Home: NextPage<HomeProps> = ({ nfts }) => {
  const { user, setUser } = useUser();

  useEffect(() => {
    const { location: { search }} = window;
    const code = getCode(search);

    /* if there is code, ask the server for auth token */
    if (code) {
      const initAuth = async () => {
        const token = await getAuthToken(code);
        if (token) {
          console.log({token});
          setUser(state => ({ ...state, token }));
          Cookies.set('auth_token', token);
        }
      };
      initAuth();
    }
  }, [setUser]);

  useEffect(() => {
    /* when a token update happens, fetch user profile */
    if (user.token) {
      const fetchProfile = async () => {
        const authBase = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://backstage-hacktoberfest-service.vercel.app';
        const response = await (await fetch(`${authBase}/api/profile?access_token=${user.token}`)).json();
        setUser(state => {
          return { ...state, ...response.user};
        });
      };
      fetchProfile();
    }
  }, [user.token, setUser]);
  
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
