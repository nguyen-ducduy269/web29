import { Box, Grid, GridItem, Button } from "@chakra-ui/react";
import { PageHeading } from "../components/PageHeading";
import { useState, useEffect } from "react";

///// import icons
import { BsPerson } from "react-icons/bs";

const Platforms = () => {
  const [api, setApi] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.rawg.io/api/platforms?key=6fd6551be32c4258b82295f48d4cee95"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setApi(data);
      });
  }, []);

  console.log(api);

  return (
    <>
      <Box>
        <Box as={"section"}>
          <PageHeading>Platforms</PageHeading>
        </Box>

        <Box as={"section"} marginTop={"10px"}>
          <Box marginBottom={"10px"}>
            <Grid gridTemplateColumns={"1fr 1fr 1fr 1fr"} rowGap={"20px"}>
              {api?.results.map((item: any) => {
                return (
                  <GridItem
                    backgroundImage={`linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(${item.image_background})`}
                    backgroundColor={"black"}
                    backgroundRepeat={"no-repeat"}
                    width={"286px"}
                    height={"100%"}
                    borderRadius={"10px"}
                    paddingBottom={"10px"}
                    objectFit={"cover"}
                    backgroundPosition={"45%"}
                    backgroundSize={"cover"}
                    padding={"20px 10px"}
                    key={item.id}
                  >
                    <Box
                      marginTop={"60px"}
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                      gap={"5px"}
                    >
                      <Box
                        textDecoration={"underline solid 0.3px"}
                        fontSize={"24px"}
                        fontWeight={"700"}
                      >
                        {item.name}
                      </Box>
                      <Box>{item.year_start ? item.year_start : ""}</Box>

                      <Button width={"115px"} height={"41px"}>
                        Follow
                      </Button>
                    </Box>

                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      borderBottom={"0.5px solid gray"}
                      height={"30px"}
                      width={"90%"}
                      margin={"0 auto"}
                      marginTop={"40px"}
                      marginBottom={"20px"}
                    >
                      <Box fontWeight={"700"}>Popular items</Box>

                      <Box>{item.games_count}</Box>
                    </Box>

                    {item.games.map((t: any) => {
                      return (
                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          width={"90%"}
                          margin={"0 auto"}
                        >
                          <Box
                            fontSize={"11px"}
                            borderBottom={"solid 0.5px white"}
                            height={"20px"}
                            cursor={"pointer"}
                          >
                            {t.name}
                          </Box>
                          <Box
                            display={"flex"}
                            gap={"5px"}
                            alignItems={"center"}
                            color={"gray"}
                          >
                            {t.added} <BsPerson />
                          </Box>
                        </Box>
                      );
                    })}
                  </GridItem>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Platforms;
