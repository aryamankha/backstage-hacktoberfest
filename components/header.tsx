import Image from "next/image";
import USerIcon from "../public/images/Profile.png";

const Header = () => {
  return (
    <div className="header flex justify-between absolute text-white items-center w-[100vw] px-[1rem] mt-3">
      <div className="headerLeft flex items-center">
        <div className="logo text-[2rem] font-bold cursor-pointer hover:scale-105 duration-100 ease-in">
          <i>Backstage</i>
        </div>
        <div className="browse text-[1.2rem] font-light mx-[1.5rem] ml-[3rem] hover:text-[#cecece] cursor-pointer">
          Browse
        </div>
        <div className="about text-[1.2rem] font-light mx-[1.5rem] cursor-pointer hover:text-[#cecece]">
          About
        </div>
      </div>
      <div className="headerRight flex items-center justify-center">
        <button className="SignUp text-[1.1rem] mx-[1rem] bg-[#485ED1] px-5 py-2 rounded-lg hover:bg-[#364aaf] shadow-lg">
          SignUp
        </button>
        <div className="userIcon mx-[1rem] mr-[1rem] w-[40px] h-[40px] cursor-pointer shadow-lg hover:scale-110 duration-100 ease-in">
          <Image
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
