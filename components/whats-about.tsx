type WhatIsItAboutType = { title: string };

function Card({ title }: WhatIsItAboutType) {
  return (
    <div
      className="border border-white rounded-xl p-4 flex justify-center items-end"
      style={{ width: "323px", height: "323px" }}
    >
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
        What's it all about?
      </h1>
      <div className="flex justify-between w-full mb-20">
        <Card
          title="Artists Drop"
        />
        <Card
          title="Fans Buy"
        />
        <Card title="Success Shared" />
      </div>
      <p className="text-2xl font-normal">
        By letting fans buy into their favorite artists' success, they can help
        the creators they love succeed while sharing in that sucess.
      </p>
    </div>
  );
}
