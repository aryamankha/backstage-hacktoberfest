import React from "react";
import Link from "next/link";

export default function Drops() {
  return (
    <div className="drops-section bg-white h-max px-5 py-10">
      <div className="header bg-white">
        <h1 className="text-black text-4xl font-bold font-sans ml-5">
          Latest Drops
        </h1>
        <div className="bg-purple-500 h-1 mt-2 w-64 md:w-96 ml-5"></div>
      </div>
      <div className="card-container flex md:flex-row flex-col gap-5">
       <DropCard title="NFT Title  1" artist="Artist Name" link="/startProfile" /> 
       <DropCard title="NFT Title  2" artist="Artist Name" link="/startProfile" /> 
      </div>
    </div>
  );
}

interface DropProps {
  title: string;
  artist: string;
  link: string;
}

const DropCard:React.FC<DropProps> = ({...props}:DropProps)=>{

        return <div className="cont">
          <div className="card3 h-64 w-64 border-solid border-black rounded-lg border-2 mt-8 mb-5 ml-5">
            <h2 className="text-black text-2xl font-bold font-sans m-3 w-36">
              {props.title}
            </h2>
            <p className="text-black mt-36 ml-3">{props.artist}</p>
          </div>
          <button className="self-center text-center py-0.5 rounded bg-purple-500 px-2.5 ml-5">
            <Link href={props.link}> See Artist</Link>
          </button>
        </div>
}