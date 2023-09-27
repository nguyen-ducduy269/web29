import { Box, Card, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { PageHeading } from "../components/PageHeading";
import { QueryGameResponse, getTrending } from "../services/game.services";
import { useLoaderData } from "react-router-dom";
import GameCard from "../components/GameCard";

export async function loader() {
  const data = await getTrending();
  return data;
}

const Home = () => {
  const data = useLoaderData() as QueryGameResponse;

  return (
    <Box as={"main"}>
      <Box as={"section"}>
        <PageHeading>New and trending</PageHeading>
        <Text>Base on player counts and release date</Text>
      </Box>

      <Box as={"section"}>
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
            "2xl": "repeat(5, 1fr)",
          }}
          templateRows={"auto"}
          gap={5}
        >
          {data.results.map((item) => (
            <GridItem key={item.id}>
              <GameCard data={item} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
