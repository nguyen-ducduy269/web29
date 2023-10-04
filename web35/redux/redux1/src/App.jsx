import { useSelector } from "react-redux/es/hooks/useSelector";
import { Input, Box, Grid, GridItem, Button } from "@chakra-ui/react";

import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
function App() {
  const todo = useSelector((state) => state.todos);
  const [todoText, setTodoText] = useState("");

  const handleAddText = (e) => {
    if (e.code === "Enter") {
      console.log(todoText);
    }
    console.log(e);
    setTodoText("");
  };

  return (
    <>
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
        overflowX={"hidden"}
        margin={"0 auto"}
        border={"1px solid black"}
      >
        <Input
          width={"100%"}
          height={"40px"}
          placeholder="What needs to be done?"
          paddingLeft={"20px"}
          onChange={(e) => {
            handleAddText(e);
            setTodoText(e.target.value);
          }}
        />

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
                  {item.completed == true ? (
                    <input type="checkbox" checked name="" id="" />
                  ) : (
                    <input type="checkbox" name="" id="" />
                  )}
                </Box>
                <p style={{ width: "80%" }}>{item.text}</p>

                <select
                  name=""
                  id=""
                  style={{
                    width: "10%",
                  }}
                >
                  {item.color ? (
                    <option value="">{item.color}</option>
                  ) : (
                    <option value=""></option>
                  )}
                </select>

                <AiOutlineClose width={"5%"} style={{ marginLeft: "10px" }} />
              </Box>
            );
          })}
        </Box>

        <Grid gridTemplateColumns={"1fr 1fr 1fr 1fr"}>
          <GridItem
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"10px"}
          >
            <p style={{ margin: "0" }}>Actions</p>
            <Button
              style={{
                width: "90%",
                height: "30px",
                color: "white",
                backgroundColor: "blue",
              }}
            >
              Mark All Completed
            </Button>
            <Button
              style={{
                width: "90%",
                height: "30px",
                color: "white",
                backgroundColor: "blue",
              }}
            >
              Clear Completed
            </Button>
          </GridItem>

          <GridItem
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>Remaining Todos</Box>
            <Box>{todo.length} item left</Box>
          </GridItem>

          <GridItem
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box marginBottom={"10px"}>Filter by Status</Box>
            <button
              style={{ padding: "10px", marginBottom: "10px", border: "none" }}
            >
              All
            </button>
            <button
              style={{ padding: "10px", marginBottom: "10px", border: "none" }}
            >
              Active
            </button>
            <button
              style={{ padding: "10px", marginBottom: "10px", border: "none" }}
            >
              Complete
            </button>
          </GridItem>

          <GridItem
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box marginBottom={"10px"}>Filter by Color</Box>
            <Box
              width={"50%"}
              display={"flex"}
              marginBottom={"10px"}
              gap={"10px"}
            >
              <input type="checkbox" name="" id="" />
              <Box
                width={"25px"}
                height={"15px"}
                backgroundColor={"green"}
              ></Box>
              <Box>Green</Box>
            </Box>

            <Box
              width={"50%"}
              display={"flex"}
              marginBottom={"10px"}
              gap={"10px"}
            >
              <input type="checkbox" name="" id="" />
              <Box
                width={"25px"}
                height={"15px"}
                backgroundColor={"blue"}
              ></Box>
              <Box>Blue</Box>
            </Box>

            <Box
              width={"50%"}
              display={"flex"}
              marginBottom={"10px"}
              gap={"10px"}
            >
              <input type="checkbox" name="" id="" />
              <Box
                width={"25px"}
                height={"15px"}
                backgroundColor={"orange"}
              ></Box>
              <Box>Orange</Box>
            </Box>

            <Box
              width={"50%"}
              display={"flex"}
              marginBottom={"10px"}
              gap={"10px"}
            >
              <input type="checkbox" name="" id="" />
              <Box
                width={"25px"}
                height={"15px"}
                backgroundColor={"purple"}
              ></Box>
              <Box>Purple</Box>
            </Box>

            <Box
              width={"50%"}
              display={"flex"}
              marginBottom={"10px"}
              gap={"10px"}
            >
              <input type="checkbox" name="" id="" />
              <Box width={"25px"} height={"15px"} backgroundColor={"red"}></Box>
              <Box>Red</Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default App;
