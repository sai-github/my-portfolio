import clsx from "clsx";
import { HTMLAttributes } from "react";

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  color?: string;
}

const Chip = ({ className, name, color, ...rest }: ChipProps) => {
  const chipStyle = clsx(
    className,
    "body-sm",
    "max-w-fit px-2 py-1 bg-[var(--current-accent)] text-[var(--light-text)] rounded-3xl border border-current"
  );
  return (
    <div className={chipStyle} style={{ backgroundColor: color }} {...rest}>
      {name}
    </div>
  );
};

export default Chip;
