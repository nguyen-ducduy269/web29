import { useState } from "react";
import Form from "./component/Form";
import List from "./component/List";
import Counter from "./component/Counter";

function App() {
  const [items, setItems] = useState([]);
  const addItem = (newItem) => {
    const newItems = [...items, newItem];
    setItems(newItems);
  };
  // const removeItem = (item) => {
  //   const item = [...items];
  //   item.splice(index, 1);
  //   setItems(item);
  // };
  return (
    <div>
      <h1>List</h1>
      <Form onSubmit={addItem} />
      <List items={items} />
      <Counter />
    </div>
  );
}

export default App;
