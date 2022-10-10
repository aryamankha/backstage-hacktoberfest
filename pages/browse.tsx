import Header from "../components/header";

const Browse = () => {
  return (
    <div className="browse">
      <div className="headerContainer bg-[#232428]">
        <Header />
      </div>
      <div className="searchSection h-[40vh] px-[20%] bg-[url('../public/images/artist-concert.jpg')] bg-center py-16">
        <div className="searchContainer flex  mx-auto ">
          <input
            type="search"
            className="form-control relative flex-auto px-5 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none"
            placeholder="Search"
          />
          <button
            className="btn  px-6 py-2.5 bg-[#485ED1] text-white font-medium rounded-r-[8px] text-xs leading-tight uppercase shadow-md  hover:bg-[#364aaf] hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
            type="button"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="optionPanel text-white mt-12">
          <button className=" btn nft bg-[#485ED1] hover:bg-[#364aaf] py-2.5 w-[100px] rounded-l-[8px]">
            NFT
          </button>
          <button className=" btn collection py-2.5 w-[100px] bg-white text-black">
            Collections
          </button>
          <button className=" btn artist bg-[#485ED1] hover:bg-[#364aaf] py-2.5 w-[100px] rounded-r-[8px]">
            Artist
          </button>
        </div>
      </div>

      <div className="cardContainer mx-[7%] my-[4rem] flex flex-wrap gap-[5rem] justify-center">
        <div className="card flex justify-center items-center h-[370px] w-[270px] border-black border-[3px] rounded-xl">
          NFT
        </div>
        <div className="card flex justify-center items-center h-[370px] w-[270px] border-black border-[3px] rounded-xl">
          NFT
        </div>
        <div className="card flex justify-center items-center h-[370px] w-[270px] border-black border-[3px] rounded-xl">
          NFT
        </div>
        <div className="card flex justify-center items-center h-[370px] w-[270px] border-black border-[3px] rounded-xl">
          NFT
        </div>
        <div className="card flex justify-center items-center h-[370px] w-[270px] border-black border-[3px] rounded-xl">
          NFT
        </div>
        <div className="card flex justify-center items-center h-[370px] w-[270px] border-black border-[3px] rounded-xl">
          NFT
        </div>
        <div className="card flex justify-center items-center h-[370px] w-[270px] border-black border-[3px] rounded-xl">
          NFT
        </div>
        <div className="card flex justify-center items-center h-[370px] w-[270px] border-black border-[3px] rounded-xl">
          NFT
        </div>
        <div className="card flex justify-center items-center h-[370px] w-[270px] border-black border-[3px] rounded-xl">
          NFT
        </div>
        <div className="card flex justify-center items-center h-[370px] w-[270px] border-black border-[3px] rounded-xl">
          NFT
        </div>
      </div>
      <div className="footerSection bg-[#777984] py-3 text-[1.2rem] flex items-center">
        <div className="socialIconContainer absolute right-3 flex gap-2">
          <div className="socialIcon w-6 h-6 rounded border-white border-[1px]"></div>
          <div className="socialIcon w-6 h-6 rounded border-white border-[1px]"></div>
          <div className="socialIcon w-6 h-6 rounded border-white border-[1px]"></div>
        </div>
        <div className="text-white w-[100%] text-center z-10">
          BackStage © 2022
        </div>
      </div>
    </div>
  );
};

export default Browse;
