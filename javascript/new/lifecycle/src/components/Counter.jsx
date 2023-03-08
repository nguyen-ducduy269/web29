import React, { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // Cú phép chung
  // useeffect(effectFn, dependencies);
  // dependencies là các giá trị phụ thuộc
  // có nghĩa là hàm chỉ chạy khi một trong các giá trị phụ thuộc thay đổi

  // thay thế cho didMount
  // chỉ chạy lần đầu tiên sau khi render
  useEffect(() => {
    document.title = "You click ${count} times";
  }, [count]);

  // Gộp cả 2 thằng didMount và didUpdate
  // Chạy cả lần đầu tiên và mỗi lần cập nhật
  useEffect(() => {
    console.log("Mountd/Updated");
  });

  // Dọn dẹp
  useEffect(() => {
    let timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    // Đóng vai trò dọn dẹp
    // Chạy ở lần render sau, trước khi chạy useEffect mới
    // Trước khi chạy useEffect thì kiểm tra lần trước đó có return hàm hay không nếu có thì chạy hàm trước, sau đó thì đến useEffect
    // Ví dụ:
    // Lần đầu tiền chạy: chưa có hàm(bỏ qua) => set(1) => return hàm clear(1)
    // Lần chạy 2: chạy hàm clear(1) => set(2) => return hàm clear(2)
    // Lần chạy thứ 3: chạy hàm clear(2) => set(3) => return hàm clear(3 )
    return () => {
      // Dọn dẹp bộ đếm
      // Xóa sự kiện trên win
      // Hủy bỏ request
      console.log("hàm dọn dẹp, lúc này count= ", count);
      clearInterval(timer);
    };
  });

  // các lỗi thường gặp:
  // KHÔNG XÁC ĐỊNH ĐÚNG DEPENDENCIES
  // - muốn chạy khi nào, 1 lần, nhiều lần, phụ thuộc vào cái gì không?
  // - tất cả những giá trị sử bên trong useEffect(state, hàm) thì nên có mặt trong dependencies
  // - triển khai hàm dọn dẹp

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>
        You click {count} times
      </button>
    </div>
  );
}
