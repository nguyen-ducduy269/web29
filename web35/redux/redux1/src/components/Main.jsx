import React, { useContext, useState } from "react";
import { Box } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { TodoContext } from "../context/TodoContext";
import { todoSlice } from "../features/todo/todoSlice";

const colors = ["Green", "Blue", "Orange", "Purple", "Red"];

const Main = () => {
  const { todo, dispatch } = useContext(TodoContext);
  const [changColor, setChangColor] = useState(null);

  const changeChecked = (params) => {
    dispatch(
      todoSlice.actions.toggle({ id: params.id, completed: !params.completed })
    );
  };

  const changeColor = () => {
    dispatch(todoSlice.actions.changeColor(changColor));
  };

  const deleteItem = (params) => {
    dispatch(todoSlice.actions.delete(params));
  };

  return (
    <Box minHeight={"300px"}>
      {todo.map((item) => {
        return (
          <Box
            maxWidth={"1216px"}
            display={"flex"}
            alignItems={"center"}
            key={item.id}
          >
            <Box
              width={"5%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <input
                type="checkbox"
                name=""
                id=""
                onChange={() => changeChecked(item)}
              />
            </Box>

            <p style={{ width: "80%" }}>{item.text}</p>

            <select
              name=""
              id=""
              style={{
                width: "10%",
              }}
              onChange={() => {
                changeColor();
              }}
            >
              <option value=""></option>
              {colors.map((color) => {
                return (
                  <option
                    value=""
                    key={""}
                    onChange={() => {
                      setChangColor(color);
                    }}
                  >
                    {color}
                  </option>
                );
              })}
            </select>

            <AiOutlineClose
              width={"5%"}
              style={{ marginLeft: "10px" }}
              onClick={() => deleteItem(item.id)}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Main;
