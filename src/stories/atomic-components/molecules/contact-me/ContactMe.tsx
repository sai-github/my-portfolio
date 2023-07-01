import clsx from "clsx";
import Card from "../../cards/Card";
import useIsDesktop from "../../../../utils/hooks/useIsDesktop";
import Input from "../../inputs/Input";
import TextArea from "../../inputs/TextArea";
import Button from "../../buttons/Button";
import Divider from "../../misc/Divider";
import Quote from "../../misc/Quote";

interface ContactMeProps {
  avatar: string;
  status: string;
}

const ContactMe = ({ avatar, status }: ContactMeProps) => {
  const isDesktop = useIsDesktop();
  const cardCls = clsx(
    "flex",
    !isDesktop && "flex-col",
    "p-8",
    isDesktop ? "gap-8" : "gap-4"
  );
  return (
    <Card className={cardCls}>
      <div className="flex flex-[1.5] flex-col gap-4">
        <Input />
        <TextArea />
        <Button>SEND</Button>
      </div>
      <Divider dir={isDesktop ? "vt" : "hz"} breakText="OR" />
      <div className="flex flex-1 flex-col items-center gap-4">
        <img
          className="h-32 w-32 rounded-[64px] border-2 border-[var(--current-text)]"
          src={avatar}
        />
        <Quote text={status} variant="small" align="center" />
        <div className="grid  grid-cols-2 gap-4">
          <Button variant="outline">Github</Button>
          <Button variant="outline">Linkedin</Button>
        </div>
      </div>
    </Card>
  );
};

export default ContactMe;
