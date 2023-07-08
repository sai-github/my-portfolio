import React from "react";
import "./menu.css";
import clsx from "clsx";

interface MenuListProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onClick"> {
  label: string;
  onClick?: (value: string, event: React.MouseEvent<HTMLDivElement>) => void;
}

export const MenuList = ({
  label,
  onClick,
  className,
  ...rest
}: MenuListProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(label, e);
    }
  };
  return (
    <div
      className={clsx(className, "subtitle menu-list")}
      {...rest}
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: JSX.Element[];
  onNavigate?: (value: string, event: React.MouseEvent<HTMLDivElement>) => void;
}

const Menu = ({ children = [], onNavigate, className }: MenuProps) => {
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

  return <div className={clsx(className, "menu")}>{childrenWithProps}</div>;
};

export default Menu;
