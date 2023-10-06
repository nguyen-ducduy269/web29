import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import "./App.css";
import { TodoContext } from "./context/TodoContext";

////// import components
import HeaderInput from "./components/HeaderInput";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const todo = useSelector((state) => state.todos.items);
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <TodoContext.Provider value={{ todo, todoText, setTodoText, dispatch }}>
        <h1
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          Todos
        </h1>

        <Box
          width={"80%"}
          height={"100%"}
          margin={"0 auto"}
          border={"1px solid black"}
        >
          <HeaderInput />

          <Main />

          <Footer />
        </Box>
      </TodoContext.Provider>
    </>
  );
}

export default App;
