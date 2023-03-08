import React from "react";

class Demo extends React.Component {
  // phương thức đầu tiên được gọi
  state = {};
  constructor() {
    super();
    console.log("Khởi tạo components");
  }

  componentWillUnmount() {
    console.log("Chạy trước hàm render");
  }

  render() {
    console.log("Render cấu trúc DOM");
    return (
      <div>
        <h1>Demo LifeCycle</h1>
        <div className="carousel"></div>
      </div>
    );
  }

  componentDidMount() {
    // Từ React18 trở đi
    // componentsDidMount sẽ auto gọi 2 lần
    console.log("Chạy sau render");
  }
}

export default Demo;

// componentDidMount : chỉ chạy 1 lần duy nhất sau khi render
// ccomponentDidUpdate : chỉ chạy sau khi component cập nhật
// componentDidMount và componentDidUpdate = > đồng bộ trạng thái của ứng dụng React với bên thứ 3
// Thực hiện slide effects
// componentWillUnMount => Dọn dẹp các side effects( bộ đếm, request, events ở trên window )
// người ta không dùng class components nữa vì:
// 1. cú pháp class dài dòng và không quen với người mới
// 2. hạn chế của lifecycle methods
// - lặp mã
// - 1 lifecycle methods chứa quá nhiều logic
// => lý do ngto ưu tiên sử dụng function component
// Trước đây function component đc gọi là Stateless component - component không có trạng thái, chỉ render giao diện
// Từ 16.8 trở lên thì ra mắt Hooks (useSate)
// là các hàm đặc biệt cho phép function component có thể sử dụng được các tính năng của React(state, lifecycle methods)
// Tất cả các Hooks thì bắt đầu bằng use
// Cho phép tự tạo ra các hook riêng (customHooks)

// state: useState thì có thể nhận vào 1 hàm(lazyInitialState), setState: cũng có nhận vào một hàm, sẽ nhận vào giá trị trạng thái trước đó( thường dùng để tránh bị cache callback)
// effect: về cơ bản cho phép triển khai các lifecycle methods trong function components(thay thế cho didMount, didUpdate và WillMount)
// context: Cung cấp các giá trị chung cho toàn bộ cây thành phần con sử dụng, tránh truyền props quá nhiều cấp

// Khi gọi component <Counter/> lần đầu tiên
// Khởi tạo (Chạy câu lệnh trước return) (đặt setInterval)
// Render => hiển thị lên DOM
// Kích hoạt hàm sau render

// Trước mỗi lần cập nhật, thì sẽ kích hoạt dọn dẹp

// Chạy lifecycle mounted
// Khi cập nhật(do state thay đổi)
// Lại chạy lại các câu lệnh từ đầu (đặt thêm 1 cái setInterval)
// kích hoạt hàm dọn dẹp của lần render trước đó
// render => hiển thị DOM mới
// kích hoạt hàm sau render
