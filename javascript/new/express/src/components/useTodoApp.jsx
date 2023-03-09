import { useState, useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../AppContext";

export const useTodoApp = () => {
  const { credential, setCredential } = useAppContext();
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    axios
      .get("https://todoapi-fawn.vercel.app/api/todos", {
        headers: {
          Authorization: credential.token,
        },
      })
      .then(({ data }) => {
        setTodos(data);
      });
  }, []);

  return {
    credential,
    setCredential,
    todos,
  };
};

// Tối ưu hóa
// useCallback
// useMemo
// useTransition

// useReducer() => kết hợp với Context
// useRef

// Nâng cao
// MOC => Higher-Order Component
