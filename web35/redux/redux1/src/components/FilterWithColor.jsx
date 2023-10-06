import React, { useContext, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { TodoContext } from "../context/TodoContext";

const FilterWithColor = () => {
  const color = useSelector((state) => state.todos.filters.color);
  const [filterColor, setFilterColor] = useState(null);
  const { dispatch } = useContext(TodoContext);

  const toggleChangeColor = (params) => {
    setFilterColor(params);
  };

  return (
    <>
      {color.map((item, index) => {
        return (
          <Box
            width={"50%"}
            display={"flex"}
            marginBottom={"10px"}
            gap={"10px"}
          >
            {filterColor == index ? (
              <input
                type="checkbox"
                checked
                key={index}
                onClick={() => toggleChangeColor(index)}
              />
            ) : (
              <input
                type="checkbox"
                key={index}
                onClick={() => toggleChangeColor(index)}
              />
            )}
            <Box width={"25px"} height={"15px"} backgroundColor={item}></Box>
            <Box>{item}</Box>
          </Box>
        );
      })}
    </>
  );
};

export default FilterWithColor;
