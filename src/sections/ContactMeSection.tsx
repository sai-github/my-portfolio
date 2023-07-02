import ContactMe from "@starkit/molecules/contact-me/ContactMe";
import { contactInfo as data } from "../content/contact-me-data";
const ContactMeSection = () => {
  const handleSend = (name: string, string: string) => {
    console.log(name, string);
  };
  return (
    <section className="h-screen w-screen" data-scroll-section>
      <ContactMe {...data} onSend={handleSend} />
    </section>
  );
};

export default ContactMeSection;
