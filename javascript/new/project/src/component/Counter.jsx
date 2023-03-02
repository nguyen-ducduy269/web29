import React, { useState } from "react";

// export default function Count() {
//   // State - trạng thái => có thể thay đổi được => kích hoạt việc cập nhật
//   const [/*Tên trạng thái*/ count, /*Hàm để cập nhật trạng thái*/ setCount] =
//     useState(/**initial state - giá trị ban đầu/ trạng thái ban đầu */ 0); // trả lại 1 cặp giá trị lưu trong 1 mảng [state, setState]
// }
export default function Count() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [userInfor, setUserInfor] = useState({
    username: "",
    passwork: "",
  });

  return (
    <div>
      Counter: {count}
      <button onClick={() => setCount(count + 1)}>Cong</button>
      <button onClick={() => setCount(count - 1)}>Tru</button>
    </div>
  );
}
