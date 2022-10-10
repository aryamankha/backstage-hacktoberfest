// import Link from "next/link";
import Image from "next/image";
import USerIcon from "../public/images/Profile.png";

const Header = () => {
  return (
    <div className="header flex justify-between items-center px-[1rem] text-white py-3">
      <div className="headerLeft flex items-center">
        <div className="logo text-[2rem] font-bold cursor-pointer">
          <i>Backstage</i>
        </div>
        <div className="browse text-[1.2rem] font-light mx-[1.5rem] ml-[3rem] cursor-pointer">
          Browse
        </div>
        <div className="about text-[1.2rem] font-light mx-[1.5rem] cursor-pointer ">
          About
        </div>
      </div>
      <div className="headerRight flex items-center justify-center">
        <button className="SignUp text-[1.1rem] mx-[1rem] bg-[#485ED1] px-5 py-2 rounded-lg text-white  hover:bg-[#364aaf] shadow-lg">
          MetaMask
        </button>
        <div className="userIcon mx-[1rem] mr-[1rem] w-[40px] h-[40px] cursor-pointer  hover:scale-110 duration-100 ease-in">
          <Image
            className="shadow-lg"
            src={USerIcon}
            alt="Picture of the author"
            width={40}
            height={40}
          />
        </div>
        <img src="../public/images/Profile.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
