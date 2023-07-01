import clsx from "clsx";
import "./divider.css";

interface DividerProps {
  dir: "hz" | "vt";
  breakText: string;
}

const Divider = ({ dir, breakText }: DividerProps) => {
  const containerCls = clsx("divider-container", {
    "flex-row": dir === "hz",
    "flex-col": dir === "vt",
    "h-[inherit]": dir === "vt",
  });
  const lineCls = clsx("line", dir === "hz" ? "h-[2px]" : "w-[2px]");

  return (
    <div className={containerCls}>
      <div className={lineCls}></div>
      <div className="label small">{breakText}</div>
      <div className={lineCls}></div>
    </div>
  );
};

export default Divider;
