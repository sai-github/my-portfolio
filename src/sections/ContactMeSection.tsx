import ContactMe from "@starkit/molecules/contact-me/ContactMe";
import { contactInfo as data } from "../content/contact-me-data";
import { forwardRef } from "react";
import { useSectionInView } from "../utils/hooks";

interface ContactMeSectionProps {
  onInView: () => void;
}

const ContactMeSection = forwardRef<HTMLElement, ContactMeSectionProps>(
  ({ onInView }, ref) => {
    useSectionInView(ref, onInView);

    const handleSend = (name: string, string: string) => {
      console.log(name, string);
    };

    return (
      <section ref={ref} className="my-section justify-center">
        <ContactMe {...data} onSend={handleSend} />
      </section>
    );
  }
);

export default ContactMeSection;
