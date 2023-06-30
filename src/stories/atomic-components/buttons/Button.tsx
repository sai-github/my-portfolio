import clsx from "clsx";
import "./button.css";
import { Icon } from "iconsax-react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  Icon?: Icon;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  variant = "primary",
  Icon: Icon,
  children,
  onClick,
}: ButtonProps) => {
  const btnCls = clsx("button", {
    "btn-primary": variant === "primary",
    "btn-secondary": variant === "secondary",
    "btn-outline": variant === "outline",
    "px-2": !children, // change padding when no children
    "px-4": children,
  });

  return (
    <button className={btnCls} onClick={onClick}>
      {Icon && <Icon size="2rem" color="var(--current-text)" variant="Bulk" />}
      {children}
    </button>
  );
};

export default Button;
