import { useState } from "react";
import Form from "./component/Form";
import List from "./component/List";

function App() {
  const [items, setItems] = useState(["abc", "def", "xyz"]);
  const addItem = (newItem) => {
    const newItems = [...items, newItem];
    setItems(newItems);
  };
  return (
    <div>
      <h1>List</h1>
      <Form onSubmit={addItem} />
      <List items={items} />
    </div>
  );
}

export default App;
