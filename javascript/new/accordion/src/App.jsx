import Accordion from "./components/accordion/Accordion";
import "./App.css";
import Modal from "./components/modal/Modal";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState([]);
  const items = [
    {
      title: "Item 1",
      content: "Content 1",
    },
    {
      title: "Item 2",
      content: "Content 2",
    },
  ];

  return (
    <main>
      <Accordion items={items} />
      <button onClick={() => setOpen(open)}></button>
    </main>
  );
}
