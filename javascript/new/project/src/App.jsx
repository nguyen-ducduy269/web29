import { useState } from "react";
import Form from "./component/Form";
import List from "./component/List";
import Counter from "./component/Counter";
import Box from "./component/Box";

function App() {
  const [items, setItems] = useState(["jhashdh"]);
  const [hide, setHide] = useState("block");
  const [box, setBox] = useState([]);

  const addItem = (newItem) => {
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleRemove = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleBox = (box) => {
    const newBoxs = [...box, newbox];
    setBox(newBoxs);
  };
  // const [index, setIndex] = useState();
  // const removeItem = (item) => {
  //   const item = [...items];
  //   item.splice(index, 1);
  //   setItems(item);
  // };
  return (
    <div>
      <h1>List</h1>
      <Form onSubmit={addItem} />
      <List items={items} handleRemove={handleRemove} hide={hide} />
      {hide == "block" ? (
        <button onClick={() => setHide("none")}>Hide</button>
      ) : (
        <button onClick={() => setHide("block")}>Show</button>
      )}
      {/* <button onClick={() => setHide("none")}>Hide</button>
      <button onClick={() => setHide("block")}>Show</button> */}
      <Counter />
      <Box box={box} handleBox={handleBox} />
    </div>
  );
}

export default App;
