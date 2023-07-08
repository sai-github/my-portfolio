import { forwardRef, useState } from "react";

import { contactInfo as data } from "../content/contact-me-data";
import ContactMe from "@starkit/molecules/contact-me/ContactMe";
import { useSectionInView } from "../utils/hooks";
import FeedbackModal from "../components/FeedbackModal";

interface ContactMeSectionProps {
  onInView: () => void;
}

const ContactMeSection = forwardRef<HTMLElement, ContactMeSectionProps>(
  ({ onInView }, ref) => {
    useSectionInView(ref, onInView);
    const [submitStatus, setSubmitStatus] = useState<"success" | "fail" | "">(
      ""
    );

    const handleSend = (name: string, message: string) => {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("message", message);

      fetch(import.meta.env.VITE_CONTACT_ME, {
        method: "POST",
        body: formData,
      })
        .then(() => setSubmitStatus("success"))
        .catch(() => setSubmitStatus("fail"));
    };

    return (
      <section ref={ref} className="my-section justify-center">
        <ContactMe {...data} onSend={handleSend} />
        {submitStatus && (
          <FeedbackModal
            type={submitStatus}
            open={Boolean(submitStatus)}
            onClose={() => setSubmitStatus("")}
          />
        )}
      </section>
    );
  }
);

export default ContactMeSection;
