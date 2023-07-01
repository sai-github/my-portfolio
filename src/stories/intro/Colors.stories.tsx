// Colors.stories.tsx

import { Meta } from "@storybook/react";

export default {
  title: "Intro/Colors",
  tags: ["autodocs"],
} as Meta;

const ColorBox = ({ color, name }: { color: string; name: string }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "10px",
    }}
  >
    <div
      style={{
        backgroundColor: color,
        width: "50px",
        height: "50px",
        borderRadius: "8px",
        marginBottom: "16px",
      }}
    />
    <p className="small">{name}</p>
  </div>
);

export const AllColors = () => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "start" }}
  >
    <h6>Light Theme</h6>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <ColorBox color="var(--light-background)" name="Light Background" />
      <ColorBox color="var(--light-text)" name="Light Text" />
      <ColorBox color="var(--light-primary)" name="Light Primary" />
      <ColorBox color="var(--light-secondary)" name="Light Secondary" />
      <ColorBox color="var(--light-accent)" name="Light Accent" />
    </div>
    <h6 style={{ marginTop: "20px" }}>Dark Theme</h6>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <ColorBox color="var(--dark-background)" name="Dark Background" />
      <ColorBox color="var(--dark-text)" name="Dark Text" />
      <ColorBox color="var(--dark-primary)" name="Dark Primary" />
      <ColorBox color="var(--dark-secondary)" name="Dark Secondary" />
      <ColorBox color="var(--dark-accent)" name="Dark Accent" />
    </div>
    {/* Add more colors as needed... */}
  </div>
);
