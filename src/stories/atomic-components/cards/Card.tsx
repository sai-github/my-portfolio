import clsx from "clsx";
import { HTMLAttributes } from "react";
import "./card.css";

type CardProps = HTMLAttributes<HTMLDivElement>;

const Card = (props: CardProps) => {
  const { className, ...rest } = props;
  const cardCls = clsx("card", className);

  return (
    <div className={cardCls} {...rest}>
      Card
    </div>
  );
};

export default Card;
