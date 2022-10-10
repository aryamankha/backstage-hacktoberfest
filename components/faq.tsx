type FaqContainerType = { title: string; text: string };

function FaqContainer({ title, text }: FaqContainerType) {
  return (
    <>
      <h2 className="text-4xl font-light mb-4">{title}</h2>
      <p className="text-2xl font-normal mb-10">{text}</p>
    </>
  );
}

export default function Faq() {
  return (
    <div className="bg-black py-14 px-44">
      <h1 className="text-6xl font-black border-b-8 pb-6 mb-14 border-b-purple-100" style={{ maxWidth: '550px' }}>
        FAQ
      </h1>
      <FaqContainer
        title="Why is this even a good idea?"
        text="By letting fans buy into their favorite artists’ success, they can help the creators they love succeed while sharing in that sucess."
      />
      <FaqContainer
        title="How did such an incredible company come to be?"
        text="Frankly, that’s not information I can discolse at the moment. What I can
        tell you is that we’re the best and there’s really no one better, so
        rest assured we’re gonna IPO within like a year or two."
      />
      <FaqContainer
        title="Why is Jorge so hot?"
        text="Agreed."
      />
    </div>
  );
}
