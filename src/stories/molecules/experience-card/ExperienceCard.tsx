import { Card } from "iconsax-react";
import { useSystemTheme } from "../../../utils/hooks/useSystemTheme";
import Quote from "../../atomic-components/misc/Quote";
import StyledList from "../../atomic-components/misc/StyledList";

interface ExperienceCardProps {
  logoLight: string;
  logoDark?: string; // if not dark logo, should use light logo
  title: string;
  timeline: string;
  company: string;
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
  data,
}: ExperienceCardProps) => {
  const theme = useSystemTheme();

  return (
    <Card className="flex max-w-sm flex-col gap-4 p-4 md:p-6">
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
  );
};

export default ExperienceCard;
