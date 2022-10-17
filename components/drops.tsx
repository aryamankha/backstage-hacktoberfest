import Link from "next/link";

export default function Drops() {
  return (
    <div className="drops-section bg-white h-max px-5 py-10">
      <div className="header flex flex-col items-center md:items-start">
        <h1 className="text-black text-4xl font-bold font-sans ml-5">
          Latest Drops
        </h1>
        <div className="bg-purple-500 h-1 mt-2 w-64 md:w-96 ml-5"></div>
      </div>
      <div className="card-container flex flex-col items-center md:flex-row flex-wrap gap-5">
        <div className="cont">
          <div className="card1 h-64 w-64 border-solid border-black rounded-lg border-2 mt-8 mb-5 ml-5">
            <h1 className="text-black text-2xl font-bold font-sans m-3 w-36">
              NFT Title 1
            </h1>
            <p className="text-black mt-36 ml-3">Artist Name</p>
          </div>
          <button className="self-center text-center py-0.5 rounded bg-purple-500 px-2.5 ml-5">
            {" "}
            <Link href="/starprofile"> See Artist</Link>
          </button>
        </div>
        <div className="cont">
          <div className="card2 h-64 w-64 border-solid border-black rounded-lg border-2 mt-8 mb-5 ml-5">
            <h1 className="text-black text-2xl font-bold font-sans m-3 w-36">
              NFT Title 2
            </h1>
            <p className="text-black mt-36 ml-3">Artist Name</p>
          </div>
          <button className="self-center text-center py-0.5 rounded bg-purple-500 px-2.5 ml-5">
            <Link href="/starprofile"> See Artist</Link>
          </button>
        </div>
        <div className="cont">
          <div className="card3 h-64 w-64 border-solid border-black rounded-lg border-2 mt-8 mb-5 ml-5">
            <h1 className="text-black text-2xl font-bold font-sans m-3 w-36">
              NFT Title 3
            </h1>
            <p className="text-black mt-36 ml-3">Artist Name</p>
          </div>
          <button className="self-center text-center py-0.5 rounded bg-purple-500 px-2.5 ml-5">
            <Link href="/starprofile"> See Artist</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
