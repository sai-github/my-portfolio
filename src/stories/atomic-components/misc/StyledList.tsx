import { Icon, Cup } from "iconsax-react";
import "./styledList.css";

interface StyledListProps {
  list: string[];
  Icon?: Icon;
}

const StyledList = ({ list, Icon = Cup }: StyledListProps) => {
  return (
    <ul className="list-wrapper">
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
