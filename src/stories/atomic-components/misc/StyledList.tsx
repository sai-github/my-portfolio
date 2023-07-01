import { Icon, Cup } from "iconsax-react";
import "./styledList.css";
import React from "react";
import clsx from "clsx";

interface StyledListProps extends React.HTMLAttributes<HTMLUListElement> {
  list: string[];
  Icon?: Icon;
}

const StyledList = ({
  list,
  Icon = Cup,
  className,
  ...rest
}: StyledListProps) => {
  return (
    <ul className={clsx(className, "list-wrapper")} {...rest}>
      {list.map((item, index) => (
        <li key={index} className="list">
          <Icon size="1.5rem" color="var(--current-text)" variant="Bulk" />
          {item}
        </li>
      ))}
    </ul>
  );
};

export default StyledList;
