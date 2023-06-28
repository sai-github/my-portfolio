import React from "react";
import "./menu.css";

interface MenuListProps {
  label: string;
  onClick?: (value: string, event: React.MouseEvent<HTMLDivElement>) => void;
}

export const MenuList = ({ label, onClick }: MenuListProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(label, e);
    }
  };
  return (
    <div className="subtitle menu-list" onClick={handleClick}>
      {label}
    </div>
  );
};

interface MenuProps {
  children?: JSX.Element[];
  onNavigate?: (value: string, event: React.MouseEvent<HTMLDivElement>) => void;
}

const Menu = ({ children = [], onNavigate }: MenuProps) => {
  const childrenWithProps = React.Children.map(
    children,
    (child: React.ReactElement<MenuListProps>) => {
      // Checking isValidElement is the safe way and avoids a typescript error too.
      if (React.isValidElement(child) && child.type === MenuList) {
        return React.cloneElement(child, { onClick: onNavigate });
      } else {
        console.warn("[DS] Prefer to have MenuList  inside Menu");
      }
      return child;
    }
  );

  return <div className="menu">{childrenWithProps}</div>;
};

export default Menu;
