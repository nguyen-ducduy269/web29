import React from "react";
import ModalTitle from "./ModalTitle";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";

export default function Modal({ open }) {
  return (
    <div className="modal">
      <div className="modal-wrapper">
        <ModalTitle />
        <ModalContent />
        <ModalFooter />
      </div>
    </div>
  );
}
