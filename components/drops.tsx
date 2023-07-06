import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { useState, useEffect } from "react";

//swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
//swiper used for swipable carousal

import { NFT } from "../types";

interface DropsProps {
  nfts: NFT[];
}

const Drops: FC<DropsProps> = ({ nfts }) => {

  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    addEventListener("resize", () => {
      handleResize();
    });
    const handleResize = () => {
      const pageNo = window.innerWidth / 350;
      setSlidesPerView(pageNo);
    };
    handleResize();
  }, []);

  return (
    <div className="drops-section bg-white h-max px-5 py-10">
      <div className="header flex flex-col items-center md:items-start">
        <h1 className="text-black text-4xl font-bold font-sans ml-5">
          Latest Drops
        </h1>
        <div className="bg-purple-500 h-1 mt-2 w-64 md:w-96 ml-5"></div>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="card-container flex md:flex-row flex-col gap-5 h-96 "
      >
        {nfts.map((nft) => (
          <SwiperSlide key={nft.id}>
            <DropsItem nft={nft} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Drops;

interface DropItemsProps {
  nft: NFT;
}

const DropsItem: FC<DropItemsProps> = ({ nft }) => {
  return (
    <div className="cont">
      <div className="card1 h-64 w-64 border-solid border-black rounded-lg border-2 mt-8 mb-5 ml-5">
        <h1 className="text-black text-2xl font-bold font-sans m-3 w-36">
          {nft.name}
        </h1>
        <Image src={nft.image} width="150px" height="150px" alt="NFT Image" />
        <p className="text-black ml-3">{nft.artist.username}</p>
      </div>
      <button className="self-center text-center py-0.5 rounded bg-purple-500 px-2.5 ml-5">
        {" "}
        <Link href="/starprofile"> See Artist</Link>
      </button>
    </div>
  );
};
