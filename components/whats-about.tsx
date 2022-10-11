import Image, { StaticImageData } from "next/image";
import Win from "../public/images/win.jpg";
import Create from "../public/images/create.jpg";
import Buy from "../public/images/buy.jpg";

type WhatIsItAboutType = { title: string; img: StaticImageData };

function Card({ title, img }: WhatIsItAboutType) {
  return (
    <div
      className="border border-white rounded-xl p-4 flex justify-center items-end flex-col"
      style={{ width: "323px", height: "323px" }}
    >
      <Image src={img} alt={title} />
      <h2 className="text-4xl font-light">{title}</h2>
    </div>
  );
}

export default function WhatIsItAbout() {
  return (
    <div className="bg-black py-14 px-44 flex flex-col text-center items-center">
      <h1
        className="text-6xl font-black border-b-8 pb-6 mb-12 border-b-purple-100"
        style={{ maxWidth: "550px" }}
      >
        What&apos;s it all about?
      </h1>
      <div className="flex justify-between w-full mb-20">
        <Card title="Artists Drop" img={Win} />
        <Card title="Fans Buy" img={Buy} />
        <Card title="Success Shared" img={Create} />
      </div>
      <p className="text-2xl font-normal">
        By letting fans buy into their favorite artists&apos; success, they can
        help the creators they love succeed while sharing in that success.
      </p>
    </div>
  );
}
