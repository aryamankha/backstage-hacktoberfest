type WhatIsItAboutType = {
  title: string;
  description: string;
  primary?: boolean;
};

const aboutArr: Array<WhatIsItAboutType> = [
  {
    title: "Everyone Wins",
    description:
      "When a star makes it big, fans' NFTs rise in value and everyone wins from the star's success",
  },
];

export function Card({ title, description, primary }: WhatIsItAboutType) {
  const color = primary ? "bg-purple-500" : "bg-white text-black bg-border";

  return (
    <div
      className={`p-4 rounded border-2 flex ${color} font-black justify-center flex-col `}
      style={{ width: "323px", height: "450px" }}
    >
      <h2 className="text-4xl font-light my-4">{title}</h2>
      <p className="font-light text-sm">{description}</p>
    </div>
  );
}

export default function WhatIsItAbout() {
  return (
    <div className="text-white bg-black py-14 md:px-44 flex flex-col text-center justify-center items-center">
      <h1
        className=" text-4xl md:text-6xl font-black border-b-8 pb-6 mb-12 border-b-purple-100"
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
