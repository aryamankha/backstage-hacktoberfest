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
    <div>
      <div className="bg-black py-14 px-44 text-white my-8">
        <h1
          className="text-6xl font-black"
          style={{ maxWidth: "550px" }}
        >
          FAQ
        </h1>
      <div className="bg-purple-500 h-1 mt-2 w-28 md:w-96"></div>
      </div>
    
    <div className="px-44">
      <FaqContainer
          title="What is Backstage?"
          text="Backstage lets fans support their favorite stars and share in their
          success by buying NFT tokens and participating in star-led communities."
        />
      <FaqContainer
        title="When I buy a star's NFT, what do I get?"
        text="Each NFT has its own set of unique benefits chosen by the star
        themselves. All NFTs come with access to that star's private
        Discord, but other potential benefits include access to exclusive
        merchandise, first notification when event tickets drop, and
        personalized content from the star!"
      />
      <FaqContainer
        title="What makes Backstage unique?"
        text="Backstage is focused on helping early-stage stars build their brand from
        the ground up. We're the only platform in the business of actually
        getting stars discovered by agents, talent scouts, and industry veterans
        that can take their career to the next level. For you as a fan, this
        means supporting your favorite stars on Backstage gets them one step
        closer to hitting it big."
      />
      <FaqContainer
        title="How does Backstage let me share in the success of my stars?"
        text="Each NFT minted through Backstage is ordered, which means if you buy an
        NFT for an artist and they become wildly successful, the value of your
        NFT will skyrocket!"
      />
    </div>
    </div>
  );
}
