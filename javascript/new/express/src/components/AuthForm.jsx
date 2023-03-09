import { useState, useContext } from "react";
import { login } from "../services/auth.service";
import { useAppContext } from "../AppContext";

// custom hook - các hook tùy chỉnh do người dùng định nghĩa
// cho phép tái sử dụng logics
// tên bắt đầu bằng use
// trong custom hook thì sử dụng những hook khác (userState, useEffect)

function LoginForm() {
  const [userCredential, setUserCredential] = useState({});
  const { isLoggedIn } = useAppContext();

  const handleChange = (e) => {
    setUserCredential({
      ...userCredential,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    login(userCredential).then((res) => {
      const headers = res.headers;
      const data = res.data;
      const token = headers["authorization"];

      onLoggedIn(data, token);
    });
  };

  return (
    <form class="form" onSubmit={handleSubmit}>
      <div class="form-field">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={userCredential.username}
          onChange={handleChange}
        />
      </div>

      <div class="form-field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={userCredential.password}
          onChange={handleChange}
        />
      </div>

      <button>Login</button>
    </form>
  );
}

export default function AuthForm() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
