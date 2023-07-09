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
      <section ref={ref} className="my-section relative  justify-center ">
        <svg className="absolute top-0 h-[7.5rem] w-full">
          <defs>
            <pattern
              id="pattern-30"
              patternUnits="userSpaceOnUse"
              width="16"
              height="16"
            >
              <path
                d="M7,7 l2,0 l0,2 l-2,0 l0,-2 M0,0 l1,0 l0,1 l-1,0 l0,-1 M15,0 l1,0 l0,1 l-1,0 l0,-1 M0,15 l1,0 l0,1 l-1,0 l0,-1 M15,15 l1,0 l0,1 l-1,0 l0,-1"
                fill="hotpink"
                style={{ fill: "var(--current-accent)" }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-30)" />
        </svg>

        <ContactMe {...data} onSend={handleSend} className="my-16 xl:my-32" />
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
