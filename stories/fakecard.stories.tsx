import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FakeCard } from "./fakecard";
import Image, { StaticImageData } from "next/image";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "FakeCard",
  component: FakeCard,
} as ComponentMeta<typeof FakeCard>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof FakeCard> = (args) => (
  <FakeCard {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  title: "Everyone Wins",
  description:
    "When a star makes it big, fans' NFTs rise in value and everyone wins from the star's success",
};
