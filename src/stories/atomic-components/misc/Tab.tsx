import clsx from "clsx";
import "./tab.css";
import React from "react";

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  label: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Tab = ({ active, label, onClick, className, ...rest }: TabProps) => {
  const tabCls = clsx(className, "tab", { active: active });
  return (
    <div className={tabCls} {...rest} onClick={onClick}>
      {label}
    </div>
  );
};

export default Tab;
