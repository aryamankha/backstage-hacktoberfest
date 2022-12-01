type FakeCardType = {
  title: string;
  description: string;
  primary?: boolean;
};

const aboutArr: Array<FakeCardType> = [
  {
    title: "Everyone Wins",
    description:
      "When a star makes it big, fans' NFTs rise in value and everyone wins from the star's success",
  },
];

export function FakeCard({ title, description, primary }: FakeCardType) {
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
