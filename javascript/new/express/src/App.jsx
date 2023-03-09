import { useState, createContext } from "react";
import AuthForm from "./components/AuthForm";
import TodoApp from "./components/TodoApp";
import AppContext from "./AppContext";

// AppContext => Provider/Consumer
// <AppContext.Provider> => Bọc các thành phần con và cung cấp giá trị
// <AppContext.Consumer> => Các component con sử dụng để lấy ra dữ liệu
// useContext() => sử dụng cho function component

// 2 Bọc các phần tử con trong Provider
// Nhận props value => truyền các giá trị cho phần tử con

export default function App() {
  const [credential, setCredential] = useState(() => {
    const token = localStorage.getItem("todoapp-token");
    const user = localStorage.getItem("todoapp-userinfo");

    return {
      user: user ? JSON.parse(user) : null,
      token,
    };
  });

  const onLoggedIn = (user, token) => {
    localStorage.setItem("todoapp-token", token);
    localStorage.setItem("todoapp-userinfo", JSON.stringify(user));

    setCredential({
      user,
      token,
    });
  };

  return (
    <AppContext.Provider
      value={{
        credential,
        setCredential,
        onLoggedIn,
      }}
    >
      {!credential ? <LoginForm /> : <TodoApp />}
    </AppContext.Provider>
  );
}

// Context - ngữ cảnh/môi trường
