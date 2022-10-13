import Image, { StaticImageData } from "next/image";
import Win from "../public/images/win.jpg";
import Create from "../public/images/create.jpg";
import Buy from "../public/images/buy.jpg";

type WhatIsItAboutType = {
  title: string;
  img: StaticImageData;
  description: string;
};

const aboutArr: Array<WhatIsItAboutType> = [
  {
    description:
      "Stars mint NFT collections that share their story with their fans and act as fundraising tools",
    title: "Stars Create",
    img: Create,
  },
  {
    description:
      "Fans buy NFTs that serve as access tokens to private star-led communities and unique benefits",
    title: "Fans Buy",
    img: Buy,
  },
  {
    title: "Stars Win",
    description:
      "When a star makes it big, fans' NFTs rise in value and everyone wins from the star's success",
    img: Win,
  },
];

function Card({ title, img, description }: WhatIsItAboutType) {
  return (
    <div
      className="p-4 flex justify-center flex-col "
      style={{ width: "323px", height: "450px" }}
    >
      <Image src={img} alt={title} className="rounded-xl" />
      <h2 className="text-4xl font-light my-4">{title}</h2>
      <p className="font-light text-sm">{description}</p>
    </div>
  );
}

export default function WhatIsItAbout() {
  return (
    <div className="bg-black py-14 md:px-44 flex flex-col text-center justify-center items-center">
      <h1
        className="text-4xl md:text-6xl font-black border-b-8 pb-6 mb-12 border-b-purple-100"
        style={{ maxWidth: "550px" }}
      >
        What&apos;s it all about?
      </h1>
      <div className="flex flex-col text-left md:text-center md:flex-row  space-y-4 md:space-y-0  mb-20">
        {aboutArr.map((item) => (
          <Card {...item} key={item.title} />
        ))}
      </div>
      <p className="text-lg md:text-2xl font-normal">
        By letting fans buy into their favorite artists&apos; success, they can
        help the creators they love succeed while sharing in that success.
      </p>
    </div>
  );
}
