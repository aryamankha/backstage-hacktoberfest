import Head from "next/head";
import Image from "next/image";
import USerIcon from "../public/images/Profile.png";
import Link from "next/link";
import MetaMask from "./metamask";
import Cookies from 'js-cookie';

import { useUser } from '../contexts/UserContext';

const Header = () => {
  const { user, setUser } = useUser();
  const redirect = process.env.NODE_ENV === 'development' ? "http://localhost:3000" : window.location.origin;
  const isAuthenticated = user.token ? true : false;
  const url = `https://ahsanwtc.eu.auth0.com/login?state=authorization-code&client=LpfwDeMU9OectsdzuYBroOVQmyuAU6wr&protocol=oauth2&response_type=code&redirect_uri=${redirect}&scope=openid%20profile%20email&audience=mongo-db-auth`;

  const handleSignOutOnClick = () => {
    setUser(state => ({ ...state, token: '' }));
    Cookies.remove('auth_token');
  };

  return (
    <>
      {isAuthenticated && (
        <div className="header flex justify-between items-center px-[1rem] text-white py-3">
          <Head>
            <title>Backstage</title>
            <meta
              name="description"
              content="An NFT marketplace for up-and-coming artists"
            />
          </Head>
          <div className="headerLeft flex items-center">
            <div className="logo text-[2rem] font-bold cursor-pointer">
              <Link href="/"> Backstage </Link>
            </div>
            <div className="browse text-[1.2rem] font-light mx-[1.5rem] ml-[3rem] hidden md:block cursor-pointer">
              <Link href="/browse"> Browse</Link>
            </div>
          </div>
          <div className="headerRight flex items-center justify-center">
            <button onClick={handleSignOutOnClick} className="text-[1.1rem] mx-[1rem] bg-[#485ED1] px-5 py-2 rounded-lg hover:bg-[#364aaf]">
                Sign Out
           </button>
            <MetaMask />
            <div className="userIcon mx-[1rem] mr-[1rem] w-[40px] h-[40px] cursor-pointer  hover:scale-110 duration-100 ease-in">
              <Link href="/profile">
                <Image
                  className="shadow-lg"
                  src={user?.picture || USerIcon}
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
            <img src="../public/images/Profile.png" alt="" />
          </div>
        </div>
      )}

      {!isAuthenticated && (
        <div className="header flex justify-between items-center px-[1rem] text-white py-3">
          <Head>
            <title>Backstage</title>
            <meta
              name="description"
              content="An NFT marketplace for up-and-coming artists"
            />
          </Head>
          <div className="headerLeft flex items-center">
            <div className="logo text-[2rem] font-bold cursor-pointer">
              <Link href="/"> Backstage </Link>
            </div>
            <div className="browse text-[1.2rem] font-light mx-[1.5rem] ml-[3rem] cursor-pointer">
              <Link href="/browse"> Browse</Link>
            </div>
          </div>
          <a href={url} className="text-[1.1rem] mx-[1rem] bg-[#485ED1] px-5 py-2 rounded-lg hover:bg-[#364aaf]">
            Sign In
           </a>
        </div>
      )}
    </>
  );
};

export default Header;
