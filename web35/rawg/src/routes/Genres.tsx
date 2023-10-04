import { Box, Grid, GridItem, Button } from "@chakra-ui/react";
import { PageHeading } from "../components/PageHeading";

///// import icons
import { BsPerson } from "react-icons/bs";

const genresDetails = [
  {
    image:
      "https://media.rawg.io/media/resize/640/-/games/120/1201a40e4364557b124392ee50317b99.jpg",
    name: "Action",
    popularItems: "174,628",
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
      "https://media.rawg.io/media/resize/640/-/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg",
    name: "Indie",
    popularItems: "55,905",
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
      "https://media.rawg.io/media/resize/640/-/games/709/709bf81f874ce5d25d625b37b014cb63.jpg",
    name: "Adventure",
    popularItems: "134,366",
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
      "https://media.rawg.io/media/resize/640/-/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
    name: "RPG",
    popularItems: "53,386",
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
      "https://media.rawg.io/media/resize/640/-/games/e4a/e4ab7f784bdc38c76ce6e4cef9715d18.jpg",
    name: "Strategy",
    popularItems: "53,598",
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
      "https://media.rawg.io/media/resize/640/-/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
    name: "Shooter",
    popularItems: "59,368",
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
      "https://media.rawg.io/media/resize/640/-/games/66e/66e90c9d7b9a17335b310ceb294e9365.jpg",
    name: "Casual",
    popularItems: "46,934",
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
      "https://media.rawg.io/media/resize/640/-/games/270/270b412b66688081497b3d70c100b208.jpg",
    name: "Simulation",
    popularItems: "66,740",
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
      "https://media.rawg.io/media/resize/640/-/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg",
    name: "Puzzle",
    popularItems: "97,168",
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
      "https://media.rawg.io/media/resize/640/-/games/37a/37a9536e92cf8fe3b60045aa75dbd41f.jpg",
    name: "Arcade",
    popularItems: "22,579",
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
  {
    image:
      "https://media.rawg.io/media/resize/640/-/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
    name: "Platformer",
    popularItems: "100,667",
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
      "https://media.rawg.io/media/resize/640/-/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg",
    name: "Massively Multiplayer",
    popularItems: "3,354",
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
      "https://media.rawg.io/media/resize/640/-/games/ff6/ff66ce127716df74175961831ad3a23a.jpg",
    name: "Racing",
    popularItems: "24,190",
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
      "https://media.rawg.io/media/resize/640/-/screenshots/ad1/ad15e71b0a3d431ce0a59bcd783efa88.jpg",
    name: "Sports",
    popularItems: "20,791",
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
      "https://media.rawg.io/media/resize/640/-/games/b1f/b1f0b19226228555d8b93b2f42b22349.jpg",
    name: "Fighting",
    popularItems: "11,715",
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
      "https://media.rawg.io/media/resize/640/-/games/6c8/6c8cb4780ce30b76b944cf656e8fff49.jpg",
    name: "Family",
    popularItems: "5,393",
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
      "https://media.rawg.io/media/resize/640/-/screenshots/2d9/2d9f74addd8f5b5f83459c2cb700aaf4.jpg",
    name: "Board Games",
    popularItems: "8,341",
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
      "https://media.rawg.io/media/resize/640/-/screenshots/312/3123c2b86ff947d3b6a846c771817e06.jpeg",
    name: "Educational",
    popularItems: "15,651",
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
      "https://media.rawg.io/media/resize/640/-/screenshots/4a0/4a0f7b914b8e9e05abd6bbd480ed2b9d.jpg",
    name: "Card",
    popularItems: "4,511",
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
];

const Genres = () => {
  return (
    <>
      <Box>
        <Box as={"section"}>
          <PageHeading>Genres</PageHeading>
        </Box>

        <Box as={"section"} marginTop={"10px"}>
          <Box marginBottom={"10px"}>
            <Grid gridTemplateColumns={"1fr 1fr 1fr 1fr"} rowGap={"20px"}>
              {genresDetails.map((item: any) => {
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

export default Genres;
