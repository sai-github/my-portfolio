import clsx from "clsx";
import "./tab.css";

interface TabProps {
  active?: boolean;
  label: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Tab = ({ active, label, onClick }: TabProps) => {
  const tabCls = clsx("tab", { active: active });
  return (
    <div className={tabCls} onClick={onClick}>
      {label}
    </div>
  );
};

export default Tab;
