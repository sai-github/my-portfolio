import clsx from "clsx";
import { HTMLAttributes } from "react";
import "./card.css";

type CardProps = HTMLAttributes<HTMLDivElement>;

const Card = (props: CardProps) => {
  const { className, ...rest } = props;
  const cardCls = clsx(className, "card");

  return (
    <div className={cardCls} {...rest}>
      {props.children}
    </div>
  );
};

export default Card;
