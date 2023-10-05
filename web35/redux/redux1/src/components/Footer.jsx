import React, { useContext } from "react";
import { Box, Grid, GridItem, Button } from "@chakra-ui/react";
import Status from "./Status";
import FilterWithColor from "./FilterWithColor";
import { TodoContext } from "../context/TodoContext";

const Footer = () => {
  const { todo } = useContext(TodoContext);

  return (
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

        <Status />
      </GridItem>

      <GridItem
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box marginBottom={"10px"}>Filter by Color</Box>

        <FilterWithColor />
      </GridItem>
    </Grid>
  );
};

export default Footer;
