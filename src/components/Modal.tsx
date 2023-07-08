import { ReactNode } from "react";
import ReactDOM from "react-dom";
import "./modal.css";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
}

const Modal = ({ children, isOpen }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">{children}</div>
    </div>,
    document.getElementById("root") as Element
  );
};

export default Modal;
