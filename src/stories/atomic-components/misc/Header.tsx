import "./header.css";
import { useState } from "react";
import clsx from "clsx";

import Menu, { MenuList } from "./Menu";
import Tab from "./Tab";
import Button from "../buttons/Button";

import { CloseCircle, MoreCircle } from "iconsax-react";
import { useIsDesktop } from "../../../utils/hooks";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  labels: string[];
  onNavigate?: (value: string, event: React.MouseEvent<HTMLDivElement>) => void;
  onLogoClick?: () => void;
}

const Header = ({
  labels = [],
  onNavigate,
  onLogoClick,
  className,
  ...rest
}: HeaderProps) => {
  const isDesktop = useIsDesktop();
  const [open, setOpen] = useState(false);
  const [currActive, setCurrActive] = useState<string | null>(() => {
    if (labels.length > 0) {
      return labels[0];
    }

    return null;
  });

  const headerInnerContainer = clsx("header-inner-container", {
    desktop: isDesktop,
    open: !isDesktop && open,
  });

  const handleOnNavigate = (
    value: string,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    setCurrActive(value);
    if (onNavigate) {
      onNavigate(value, e);
      setOpen(false); // only needed when in mobile view
    }
  };

  return (
    <header className={className} {...rest}>
      <div className={headerInnerContainer}>
        <div
          className="logo"
          role="img"
          aria-label="Logo"
          onClick={onLogoClick}
        ></div>

        {isDesktop ? (
          <div className="menu-tabs">
            {labels.map((label) => (
              <Tab
                active={currActive === label}
                key={label}
                label={label}
                onClick={(e) => {
                  handleOnNavigate(label, e);
                }}
              />
            ))}
          </div>
        ) : (
          <Button
            Icon={open ? CloseCircle : MoreCircle}
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          />
        )}
      </div>
      {!isDesktop && open && (
        <Menu onNavigate={handleOnNavigate}>
          {labels.map((label) => (
            <MenuList key={label} label={label} />
          ))}
        </Menu>
      )}
    </header>
  );
};

export default Header;
