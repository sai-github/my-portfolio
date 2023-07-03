import ContactMe from "@starkit/molecules/contact-me/ContactMe";
import { contactInfo as data } from "../content/contact-me-data";

interface ContactMeSectionProps {
  id?: string;
}

const ContactMeSection = ({ id }: ContactMeSectionProps) => {
  const handleSend = (name: string, string: string) => {
    console.log(name, string);
  };
  return (
    <section id={id} className="my-section items-center" data-scroll-section>
      <ContactMe {...data} onSend={handleSend} />
    </section>
  );
};

export default ContactMeSection;
