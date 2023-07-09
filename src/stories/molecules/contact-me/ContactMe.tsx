import React, { HTMLAttributes, useEffect, useState } from "react";
import clsx from "clsx";

import Card from "../../atomic-components/cards/Card";
import Button from "../../atomic-components/buttons/Button";
import Input from "../../atomic-components/inputs/Input";
import TextArea from "../../atomic-components/inputs/TextArea";
import Divider from "../../atomic-components/misc/Divider";
import Quote from "../../atomic-components/misc/Quote";

import { Send } from "iconsax-react";
import { useIsDesktop } from "../../../utils/hooks";

const validator = (name: string, value: string) => {
  let errorMsg = "";
  if (!value) errorMsg = `${name} is required`;
  return errorMsg;
};

type SenderInfo = {
  name: string;
  msg: string;
};

interface ContactMeProps extends HTMLAttributes<HTMLElement> {
  avatar: string;
  status: string;
  social: {
    githubURL: string;
    linkedinURL: string;
  };
  onSend: (name: string, msg: string) => void;
}

const ContactMe = ({
  className,
  avatar,
  status,
  social,
  onSend,
  ...rest
}: ContactMeProps) => {
  const isDesktop = useIsDesktop();
  const cardCls = clsx(
    className,
    "flex",
    !isDesktop && "flex-col",
    "p-4 md:p-8",
    "gap-4 md:gap-8"
  );

  const [senderInfo, setSenderInfo] = useState<SenderInfo>({
    name: "",
    msg: "",
  });

  const [errors, setErrors] = useState<SenderInfo>({
    name: "",
    msg: "",
  });

  useEffect(() => {
    (Object.keys(senderInfo) as (keyof SenderInfo)[]).forEach((key) => {
      const errorMsg = validator(key, senderInfo[key]);
      setErrors((prev) => ({ ...prev, [key]: errorMsg }));
    });
  }, [senderInfo]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSenderInfo((prev) => ({ ...prev, [name]: value }));

    const errorMsg = validator(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleClick = (name: string, msg: string) => {
    onSend(name, msg);
  };

  const onOpen = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const isDisabled = Object.values(errors).some((error) => error);

  return (
    <Card className={cardCls} {...rest}>
      <div className="flex flex-[1.5] flex-col items-center gap-4">
        <Input
          className="w-full"
          name="name"
          label="Name"
          placeholder="Who's awesome? You!"
          onChange={handleChange}
          hintType={errors.name ? "danger" : "success"}
          hint={errors.name && "Oh oh... I still don't know your name!"}
        />
        <TextArea
          className="w-full"
          name="msg"
          label="Message"
          placeholder="Your awesome thoughts here! You can also tell me how to reach you back"
          onChange={handleChange}
          hintType={"danger"}
          hint={errors.msg && "Hmm... I'm eager to hear your message!"}
        />
        <Button
          Icon={Send}
          onClick={() => handleClick(senderInfo.name, senderInfo.msg)}
          disabled={isDisabled}
        >
          SEND
        </Button>
      </div>
      <Divider dir={isDesktop ? "vt" : "hz"} breakText="OR" />
      <div className="flex flex-1 flex-col items-center gap-4">
        <img
          className="h-24 w-24 rounded-[64px] border-2  border-[var(--current-text)] md:h-32 md:w-32"
          src={avatar}
          alt="Image of the ramu"
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
