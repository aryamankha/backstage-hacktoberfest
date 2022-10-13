import Head from "next/head";
import Image from "next/image";
import USerIcon from "../public/images/Profile.png";
import Link from "next/link";
import { useAuth0 } from '@auth0/auth0-react'


const Header = () => {
  const { isAuthenticated } = useAuth0()  
  return (
    <>
    {isAuthenticated && 
    (<div className="header flex justify-between items-center px-[1rem] text-white py-3">
      <Head>
        <title>Backstage</title>
        <meta
          name="description"
          content="An NFT marketplace for up-and-coming artists"
          />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
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
      <div className="headerRight flex items-center justify-center">
        <button className="SignUp text-[1.1rem] mx-[1rem] bg-[#485ED1] px-5 py-2 rounded-lg text-white  hover:bg-[#364aaf] shadow-lg">
          MetaMask
        </button>
        <div className="userIcon mx-[1rem] mr-[1rem] w-[40px] h-[40px] cursor-pointer  hover:scale-110 duration-100 ease-in">
          <Link href="/profile">
          <Image
            className="shadow-lg"
            src={USerIcon}
            alt="Picture of the author"
            width={40}
            height={40}
            />
          </Link>
        </div>
        <img src="../public/images/Profile.png" alt="" />
      </div>
    </div>)}

    {!isAuthenticated && 
    (<div className="header flex justify-between items-center px-[1rem] text-white py-3">
      <Head>
        <title>Backstage</title>
        <meta
          name="description"
          content="An NFT marketplace for up-and-coming artists"
          />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
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
    </div>)}
    </>
  );

};

export default Header;
