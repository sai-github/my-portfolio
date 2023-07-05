import React, { useState } from "react";
import clsx from "clsx";

import Card from "../../atomic-components/cards/Card";
import Button from "../../atomic-components/buttons/Button";
import Input from "../../atomic-components/inputs/Input";
import TextArea from "../../atomic-components/inputs/TextArea";
import Divider from "../../atomic-components/misc/Divider";
import Quote from "../../atomic-components/misc/Quote";

import { Send } from "iconsax-react";
import { useIsDesktop } from "../../../utils/hooks";

interface ContactMeProps {
  avatar: string;
  status: string;
  social: {
    githubURL: string;
    linkedinURL: string;
  };
  onSend: (name: string, msg: string) => void;
}

const ContactMe = ({ avatar, status, social, onSend }: ContactMeProps) => {
  const isDesktop = useIsDesktop();
  const cardCls = clsx(
    "flex",
    !isDesktop && "flex-col",
    "p-4 md:p-8",
    "gap-4 md:gap-8"
  );

  const [senderInfo, setSenderInfo] = useState({ name: "", msg: "" });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSenderInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = (name: string, msg: string) => {
    onSend(name, msg);
  };

  const onOpen = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Card className={cardCls}>
      <div className="flex flex-[1.5] flex-col items-center gap-4">
        <Input
          className="w-full"
          name="name"
          label="Name"
          placeholder="Who's awesome? You!"
          onChange={handleChange}
        />
        <TextArea
          className="w-full"
          name="msg"
          label="Message"
          placeholder="Your awesome thoughts here!"
          onChange={handleChange}
        />
        <Button
          Icon={Send}
          onClick={() => handleClick(senderInfo.name, senderInfo.msg)}
        >
          SEND
        </Button>
      </div>
      <Divider dir={isDesktop ? "vt" : "hz"} breakText="OR" />
      <div className="flex flex-1 flex-col items-center gap-4">
        <img
          className="h-24 w-24 rounded-[64px] border-2  border-[var(--current-text)] md:h-32 md:w-32"
          src={avatar}
        />
        <Quote text={status} variant="small" align="center" />
        <div className="grid  grid-cols-2 gap-4">
          <Button variant="outline" onClick={() => onOpen(social.githubURL)}>
            GitHub
          </Button>
          <Button variant="outline" onClick={() => onOpen(social.linkedinURL)}>
            Linkedin
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ContactMe;
