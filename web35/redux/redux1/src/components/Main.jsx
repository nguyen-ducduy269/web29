import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { TodoContext } from "../context/TodoContext";

const Main = () => {
  const { todo, dispatch } = useContext(TodoContext);

  const changeChecked = (params) => {
    dispatch({ type: "todos/toggle", payload: params });
  };

  const changeColor = (params) => {
    dispatch({ type: "todos/change-color", payload: params });
  };

  const deleteItem = (params) => {
    dispatch({ type: "deleteTask", payload: params });
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
              {item.completed ? (
                <input
                  type="checkbox"
                  checked
                  name=""
                  id=""
                  onChange={() => changeChecked(item.id)}
                />
              ) : (
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={() => changeChecked(item.id)}
                />
              )}
            </Box>

            <p style={{ width: "80%" }}>{item.text}</p>

            {item.color ? (
              <select
                name=""
                id=""
                style={{
                  width: "10%",
                }}
                onChange={() => changeColor(item.id)}
              >
                <option value="">{item.color}</option>
                <option value="">Green</option>
                <option value="">Blue</option>
                <option value="">Orange</option>
                <option value="">Purple</option>
                <option value="">Red</option>
              </select>
            ) : (
              <select
                name=""
                id=""
                style={{
                  width: "10%",
                }}
                onChange={() => changeColor(item.id)}
              >
                <option value=""></option>
                <option value="">Green</option>
                <option value="">Blue</option>
                <option value="">Orange</option>
                <option value="">Purple</option>
                <option value="">Red</option>
              </select>
            )}

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
