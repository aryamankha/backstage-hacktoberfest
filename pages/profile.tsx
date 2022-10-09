import Image from "next/image";
import USerIcon from "../public/images/Profile.png";

const profile = () => {
  return (
    <div className=" overflow-x-hidden">
      {/* ***********************************Header****************************** */}

      <div className="header flex justify-between items-center w-[100vw] px-[1rem] mt-3 bg-[#232428] text-white py-3">
        <div className="headerLeft flex items-center">
          <div className="logo text-[2rem] font-bold cursor-pointer hover:scale-105 duration-100 ease-in">
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

      {/* ***********************************Profile Section ****************************** */}
      <div className="profileSection flex ">
        <div className="profileLeftSection w-[25%] flex items-center flex-col border-r-[1px] border-black">
          <div className="profileImgContainer rounded-[50%] bg-[#485ED1] w-[150px] h-[150px] mt-[4rem]"></div>
          <div className="statusContainer w-[60%] flex justify-end">
            <div className="profileImgContainer rounded-[50%] border-black border-2 w-[35px] h-[35px]  "></div>
          </div>
          <div className="name text-[2.5rem] font-bold">David Lipman</div>
          <div className="nameId text-[1.3rem]">@dlip</div>
          <div className="NFTNoContainer w-[100%] flex flex-col items-center">
            <div className="breakLine w-[80%] h-2 bg-[#485ED1] mb-[3rem] mt-[2rem]"></div>
            <div className="NFTquantity text-5xl  font-bold m-0 p-0">38</div>
            <div className="text-3xl font-thin">NFTs</div>
            <div className="breakLine w-[80%] h-2 bg-[#485ED1] mt-[3rem]"></div>
          </div>
          <div className="bioSection w-[80%]">
            <div className="bioHeading text-3xl my-4">Bio</div>
            <div className="bioContent text-[1.2rem]">
              O David Lipman @dlip 38 NFTs Bio Here’s my bio! I’m really cool so
              buy my stuff. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Praesent ipsum purus, pharetra nec lacus et, auctor finibus
              nisl. Etiam sollicitudin urna eu porttitor sagittis. Integer
              consequat lobortis cursus. Sed eu nisl sit amet erat ullamcorper
              convallis. Quisque pellentesque, dui vitae porta feugiat, lacus
              metus fermentum ante, a tincidunt mauris neque at metus. Wallets O
            </div>
            <div className="breakLine h-2 bg-[#485ED1] my-[1.5rem]"></div>
          </div>
          <div className="walletSection w-[80%]">
            <div className="walletHeadSection flex justify-between items-center">
              <div className="bioHeading text-3xl my-4">Wallet</div>
              <div className="status rounded-[50%] border-black border-2 w-[35px] h-[35px]"></div>
            </div>
            <div className="accountsContainer flex flex-wrap gap-6 my-[1rem]">
              <div className="account h-[80px] w-[80px] border-black border-2 rounded-xl"></div>
              <div className="account h-[80px] w-[80px] border-black border-2 rounded-xl "></div>
              <div className="account h-[80px] w-[80px] border-black border-2  rounded-xl"></div>
            </div>
          </div>
        </div>
        <div className="profileRightSection"></div>
      </div>
    </div>
  );
};

export default profile;
