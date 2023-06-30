import clsx from "clsx";
import "./quote.css";

interface QuoteProps {
  text: string;
  variant?: "small" | "big";
  align?: "left" | "right" | "center";
}

const ALIGN_CLASSES = {
  left: "text-left",
  right: "text-right",
  center: "text-center",
};

const Quote = ({ text, variant = "big", align = "left" }: QuoteProps) => {
  const textCls = clsx({ small: variant === "small" }, ALIGN_CLASSES[align]);
  const quotationCls = clsx({ quotation: variant === "small" });

  return (
    <div className="quote">
      <div className={quotationCls}>“</div>
      <div className={textCls}>{text}</div>
      <div className={quotationCls}>”</div>
    </div>
  );
};

export default Quote;
