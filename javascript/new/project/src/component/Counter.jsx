import React, { useState } from "react";

// export default function Count() {
//   // State - trạng thái => có thể thay đổi được => kích hoạt việc cập nhật
//   const [/*Tên trạng thái*/ count, /*Hàm để cập nhật trạng thái*/ setCount] =
//     useState(/**initial state - giá trị ban đầu/ trạng thái ban đầu */ 0); // trả lại 1 cặp giá trị lưu trong 1 mảng [state, setState]
// }
export default function Count() {
  const [count, setCount] = useState(0);
  let color = "#333333";
  if (count > 0) {
    color = "green";
  } else if (count < 0) {
    color = "red";
  }

  return (
    <div>
      <h1 style={{ color }}>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Cong</button>
      <button onClick={() => setCount(count - 1)}>Tru</button>
    </div>
  );
}
