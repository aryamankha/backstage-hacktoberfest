import Link from "next/link";
import Image from 'next/image';

export default function Drops({ nfts }) {
  return (
    <div className="drops-section bg-white h-max px-5 py-10">
      <div className="header bg-white">
        <h1 className="text-black text-4xl font-bold font-sans ml-5">
          Latest Drops
        </h1>
        <div className="bg-purple-500 h-1 mt-2 w-64 md:w-96 ml-5"></div>
      </div>
      <div className="card-container flex md:flex-row flex-col gap-5 h-96">
        {nfts.map(nft => <DropsItem nft={nft} key={nft.id}/>)}
      </div>
    </div>
  );
}

const DropsItem = ({ nft }) => {
  return (
    <div className="cont">
      <div className="card1 h-64 w-64 border-solid border-black rounded-lg border-2 mt-8 mb-5 ml-5">
        <h1 className="text-black text-2xl font-bold font-sans m-3 w-36">
          {nft.name}
        </h1>
        <Image src={nft.image} width='150px' height='150px'/>
        <p className="text-black ml-3">{nft.artist.username}</p>
      </div>
      <button className="self-center text-center py-0.5 rounded bg-purple-500 px-2.5 ml-5">
        {" "}
        <Link href="/starprofile"> See Artist</Link>
      </button>
    </div>
  );
};
