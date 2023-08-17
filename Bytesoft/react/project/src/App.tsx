import { Routes, Route } from "react-router-dom";

import { Index } from "./components/index/Index.tsx";
import { News } from "./components/new/News.tsx";
import { Contact } from "./components/contact/Contact.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
