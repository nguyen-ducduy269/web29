import { Box, Grid, GridItem, Button } from "@chakra-ui/react";
import { PageHeading } from "../components/PageHeading";

///// import icons
import { BsPerson } from "react-icons/bs";

const storeDetails = [
  {
    image:
      "https://media.rawg.io/media/resize/640/-/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
    name: "Steam",
    popularItems: "80,034",
    detailItem: [
      {
        name: "Grand Theft Auto V",
        number: "20,054",
      },
      {
        name: "The Witcher 3: Wild Hunt",
        number: "19,333",
      },
      {
        name: "Portal 2",
        number: "18,225",
      },
    ],
  },
  {
    image:
      "https://media.rawg.io/media/resize/640/-/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
    name: "PlayStation Store",
    popularItems: "7,843",
    detailItem: [
      {
        name: "Grand Theft Auto V",
        number: "20,054",
      },
      {
        name: "The Witcher 3: Wild Hunt",
        number: "19,333",
      },
      {
        name: "Destiny 2",
        number: "12,896",
      },
    ],
  },
  {
    image:
      "https://media.rawg.io/media/resize/640/-/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    name: "Xbox Store",
    popularItems: "4,771",
    detailItem: [
      {
        name: "Grand Theft Auto V",
        number: "20,054",
      },
      {
        name: "The Witcher 3: Wild Hunt",
        number: "19,333",
      },
      {
        name: "Portal 2",
        number: "18,225",
      },
    ],
  },
  {
    image:
      "https://media.rawg.io/media/resize/640/-/games/530/5302dd22a190e664531236ca724e8726.jpg",
    name: "App Store",
    popularItems: "75,330",
    detailItem: [
      {
        name: "Tomb Raider (2013)",
        number: "15,874",
      },
      {
        name: "BioShock Infinite",
        number: "14,637",
      },
      {
        name: "Borderlands 2",
        number: "14,454",
      },
    ],
  },
  {
    image:
      "https://media.rawg.io/media/resize/640/-/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg",
    name: "GOG",
    popularItems: "5,522",
    detailItem: [
      {
        name: "The Witcher 3: Wild Hunt",
        number: "19,333",
      },
      {
        name: "Life is Strange",
        number: "14,449",
      },
      {
        name: "Limbo",
        number: "12,886",
      },
    ],
  },
  {
    image:
      "https://media.rawg.io/media/resize/640/-/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg",
    name: "Nintendo Store",
    popularItems: "8,889",
    detailItem: [
      {
        name: "The Witcher 3: Wild Hunt",
        number: "19,333",
      },
      {
        name: "The Elder Scrolls V: Skyrim",
        number: "15,158",
      },
      {
        name: "BioShock Infinite",
        number: "14,637",
      },
    ],
  },
  {
    image:
      "https://media.rawg.io/media/resize/640/-/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
    name: "Xbox 360 Store",
    popularItems: "1,913",
    detailItem: [
      {
        name: "Grand Theft Auto V",
        number: "20,054",
      },
      {
        name: "Portal 2",
        number: "18,241",
      },
      {
        name: "Counter-Strike: Global Offensive",
        number: "15,876",
      },
    ],
  },
  {
    image:
      "https://media.rawg.io/media/resize/640/-/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg",
    name: "Google Play",
    popularItems: "17,058",
    detailItem: [
      {
        name: "Tomb Raider (2013)",
        number: "15,874",
      },
      {
        name: "Portal",
        number: "15,500",
      },
      {
        name: "Borderlands 2",
        number: "14,454",
      },
    ],
  },
  {
    image:
      "https://media.rawg.io/media/resize/640/-/games/764/7648a8802fae5247298d775c85e9535f.jpg",
    name: "itch.io",
    popularItems: "654,109",
    detailItem: [
      {
        name: "Bastion",
        number: "8,163",
      },
      {
        name: "Brutal Legend",
        number: "7,826",
      },
      {
        name: "Transistor",
        number: "7,352",
      },
    ],
  },
  {
    image:
      "https://media.rawg.io/media/resize/640/-/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
    name: "Epic Games",
    popularItems: "1,272",
    detailItem: [
      {
        name: "Grand Theft Auto V",
        number: "20,054",
      },
      {
        name: "Tomb Raider (2013)",
        number: "15,874",
      },
      {
        name: "BioShock Infinite",
        number: "14,637",
      },
    ],
  },
];

const Stores = () => {
  return (
    <>
      <Box>
        <Box as={"section"}>
          <PageHeading>Stores</PageHeading>
        </Box>

        <Box as={"section"} marginTop={"10px"}>
          <Box marginBottom={"10px"}>
            <Grid gridTemplateColumns={"1fr 1fr 1fr 1fr"} rowGap={"20px"}>
              {storeDetails.map((item: any) => {
                return (
                  <GridItem
                    backgroundImage={`linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(${item.image})`}
                    backgroundColor={"black"}
                    backgroundRepeat={"no-repeat"}
                    width={"286px"}
                    height={"320px"}
                    borderRadius={"10px"}
                    objectFit={"cover"}
                    backgroundPosition={"45%"}
                    backgroundSize={"cover"}
                    padding={"20px 10px"}
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

                      <Box>{item.popularItems}</Box>
                    </Box>

                    {item.detailItem.map((t: any) => {
                      return (
                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          width={"90%"}
                          margin={"0 auto"}
                        >
                          <Box
                            fontSize={"14px"}
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
                            {t.number} <BsPerson />
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

export default Stores;
