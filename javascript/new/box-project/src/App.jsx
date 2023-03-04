import { useState } from "react";
import Box from "./components/Box";
import Boxlist from "./components/Boxlist";
import { randomHEX } from "./utils/randomHEX";

function App() {
  const [number, setNumber] = useState(10);
  const [colors, setColors] = useState(() =>
    // Tạo ra mảng 5 màu ngẫu nhiên làm trạng thái ban đầu
    Array(5).fill(null).map(randomHEX)
  );

  const addColors = () => {
    // Copy màu hiện tại và thêm 5 màu ngẫu nhiên
    setColors([...colors, ...Array(5).fill(null).map(randomHEX)]);
  };

  const removeColors = (index) => {
    // Sao chép giá trị
    // const newColors = colors.slice(0, index).concat(colors.slice(index + 1));
    const newColors = [...colors.slice(0, index), ...colors.slice(index + 1)];
    setColors(newColors);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const isValue = Number(value) && Number(value) > 0;
    if (isValue) {
      setNumber(Number(value));
    }
  };
  const total = colors.length;
  return (
    <div className="App">
      <h1>Boxes</h1>

      <button onClick={addColors}>More boxes</button>
      <input type="number" value={number} onChange={handleChange} />
      <p className="total">Total box: {total}</p>
      <Boxlist colors={colors} onBoxClick={removeColors} />
    </div>
  );
}

export default App;
