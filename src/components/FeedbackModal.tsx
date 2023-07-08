import Modal from "./Modal";

import Lottie from "lottie-react";
import successAnimation from "./../assets/19231-payment-successful.json";
import failAnimation from "./../assets/19230-payment-failed.json";
import Button from "@starkit/atomic-components/buttons/Button";

interface FeedbackModalProps {
  type: "success" | "fail";
  open: boolean;
  onClose: () => void;
}

const FeedbackModal = ({ type, open, onClose }: FeedbackModalProps) => {
  return (
    <Modal isOpen={open}>
      <div className="flex flex-col items-center gap-4">
        {type === "success" && (
          <Lottie
            className="h-48 w-48"
            animationData={successAnimation}
            loop={false}
            onAnimationEnd={() => console.log("success")}
          />
        )}

        {type === "fail" && (
          <Lottie
            className="h-48 w-48"
            animationData={failAnimation}
            loop={false}
            onAnimationEnd={() => console.log("fail")}
          />
        )}
        {type === "success" && (
          <div className="subtitle -mt-8">Message sent</div>
        )}
        {type === "fail" && (
          <div className="subtitle -mt-8">Unable to send</div>
        )}

        <Button onClick={() => onClose()}>OK</Button>
      </div>
    </Modal>
  );
};

export default FeedbackModal;
