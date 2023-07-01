// Typography.stories.tsx

import { Meta } from "@storybook/react";

export default {
  title: "Intro/Typography",
  tags: ["autodocs"],
} as Meta;

export const H1 = () => <h1>Design Superheroes Assemble!</h1>;
export const H2 = () => <h2>Unlocking Creativity, One Pixel at a Time</h2>;
export const H3 = () => (
  <h3>Designing the Future: Where Imagination Takes Flight</h3>
);
export const H4 = () => <h4>Design Wizards Cast Magic Spells of Innovation</h4>;
export const H5 = () => (
  <h5>From Doodles to Masterpieces: Designing with Finesse</h5>
);
export const H6 = () => (
  <h6>Tiny Details, Big Impact: Designing for Delight</h6>
);
export const Subtitle = () => (
  <div className="subtitle">Adding Zing to Your Design Sauce!</div>
);
export const Body = () => (
  <div>
    Once upon a time, in a pixelated kingdom far, far away, the quick brown fox
    joined forces with the lazy dog to create design wonders that made the world
    go 'Wow!
  </div>
);
export const BodySmall = () => (
  <div className="text-[14px] font-normal text-black">
    Once upon a time, in a pixelated kingdom far, far away, the quick brown fox
    joined forces with the lazy dog to create design wonders that made the world
    go 'Wow!
  </div>
);
export const Small = () => (
  <div className="small">Design: Where Dreams Become Pixels</div>
);
export const Overline = () => <p className="overline">Hello World</p>;
