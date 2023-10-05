import React, { useContext } from "react";
import { Input, Box, Button } from "@chakra-ui/react";
import { TodoContext } from "../context/TodoContext";

const HeaderInput = () => {
  const { todoText, setTodoText, dispatch } = useContext(TodoContext);

  const handleAddText = () => {
    dispatch({ type: "todos/added", payload: todoText });
  };

  return (
    <Box display={"flex"}>
      <Input
        width={"1177px"}
        height={"40px"}
        placeholder="What needs to be done?"
        paddingLeft={"20px"}
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />

      <Button
        style={{
          width: "100px",
        }}
        onClick={() => {
          handleAddText();
          setTodoText("");
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default HeaderInput;
