import clsx from "clsx";
import "./quote.css";

interface QuoteProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  variant?: "small" | "big";
  align?: "left" | "right" | "center";
}

const ALIGN_CLASSES = {
  left: "text-left",
  right: "text-right",
  center: "text-center",
};

const Quote = ({
  text,
  variant = "big",
  align = "left",
  className,
  ...rest
}: QuoteProps) => {
  const textCls = clsx({ small: variant === "small" }, ALIGN_CLASSES[align]);
  const quotationCls = clsx({ quotation: variant === "small" });

  return (
    <div className={clsx(className, "quote")} {...rest}>
      <div className={quotationCls}>“</div>
      <div className={textCls}>{text}</div>
      <div className={quotationCls}>”</div>
    </div>
  );
};

export default Quote;
