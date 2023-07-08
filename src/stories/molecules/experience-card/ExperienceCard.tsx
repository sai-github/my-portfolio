import clsx from "clsx";
import { useSystemTheme } from "../../../utils/hooks";
import Card from "../../atomic-components/cards/Card";
import Quote from "../../atomic-components/misc/Quote";
import StyledList from "../../atomic-components/misc/StyledList";
import { ThemeContext } from "../../../utils/context/ThemeContext";

interface ExperienceCardProps {
  logoLight: string;
  logoDark?: string; // if not dark logo, should use light logo
  title: string;
  timeline: string;
  company: string;
  variant?: "small" | "large";
  data:
    | {
        type: "quote";
        quote: string;
      }
    | {
        type: "list";
        list: string[];
      };
}

const ExperienceCard = ({
  logoLight,
  logoDark,
  title,
  timeline,
  company,
  variant = "large",
  data,
}: ExperienceCardProps) => {
  const { theme, toggleTheme, updateTheme } = useSystemTheme();
  const cardCls = clsx(
    "flex max-w-sm flex-col gap-4 p-4 md:p-6",
    variant === "large" ? "body" : "body-sm"
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, updateTheme }}>
      <Card className={cardCls}>
        <div className="grid grid-cols-[4rem,1fr] gap-4">
          <img
            className="h-16 w-16"
            src={theme === "light" ? logoLight : logoDark || logoLight}
          />
          <div className="flex items-center justify-between">
            <div>
              <div className="mb-1">{title}</div>
              <div className="small">{timeline}</div>
            </div>
            <div className="subtitle uppercase">{company}</div>
          </div>
        </div>
        {data.type === "quote" ? (
          <Quote text={data.quote} />
        ) : (
          <StyledList list={data.list} />
        )}
      </Card>
    </ThemeContext.Provider>
  );
};

export default ExperienceCard;
