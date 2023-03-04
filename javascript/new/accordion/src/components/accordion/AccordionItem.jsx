import React from "react";
import Accordionheader from "./Accordionheader";
import Accordioncontent from "./Accordioncontent";

export default function AccordionItem({ title, content, onClick }) {
  return (
    <div className="accordion-item">
      <Accordionheader onClick={onClick}>{title}</Accordionheader>
      <Accordioncontent>{content}</Accordioncontent>
    </div>
  );
}
