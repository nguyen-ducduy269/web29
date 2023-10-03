import { Box, Grid, GridItem, Button } from "@chakra-ui/react";
import { PageHeading } from "../components/PageHeading";

///// import icons
import { AiOutlineRight } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

const data = [
  {
    id: 1,
    name: "Platforms",
    number_games: 51,
    details: [
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
        name: "PC",
        year: null,
        popularItems: "516,911",
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
          "https://media.rawg.io/media/resize/640/-/games/9fb/9fbf956a16249def7625ab5dc3d09515.jpg",
        name: "PlayStation 5",
        year: 2020,
        popularItems: "940",
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
          "https://media.rawg.io/media/resize/640/-/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        name: "Xbox One",
        year: null,
        popularItems: "5,553",
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
          "https://media.rawg.io/media/resize/640/-/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
        name: "PlayStation 4",
        year: null,
        popularItems: "6,717",
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
            name: "Tomb Raider (2013)",
            number: "15,859",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Genres",
    number_games: 19,
    details: [
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
        name: "Action",
        year: null,
        popularItems: "174,626",
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
            name: "Counter-Strike: Global Offensive",
            number: "15,876",
          },
        ],
      },
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg",
        name: "Indie",
        year: null,
        popularItems: "55,905",
        detailItem: [
          {
            name: "Limbo",
            number: "12,886",
          },
          {
            name: "Rocket League",
            number: "11,790",
          },
          {
            name: "Terraria",
            number: "11,784",
          },
        ],
      },
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/709/709bf81f874ce5d25d625b37b014cb63.jpg",
        name: "Adventure",
        year: null,
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
            name: "Tomb Raider (2013)",
            number: "15,872",
          },
        ],
      },
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
        name: "RPG",
        year: null,
        popularItems: "53,386",
        detailItem: [
          {
            name: "The Witcher 3: Wild Hunt",
            number: "19,333",
          },
          {
            name: "The Elder Scrolls V: Skyrim",
            number: "15,156",
          },
          {
            name: "Borderlands 2",
            number: "14,453",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Tags",
    number_games: 10.104,
    details: [
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        name: "Singleplayer",
        year: null,
        popularItems: "209,620",
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
            number: "18,240",
          },
        ],
      },
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        name: "Для одного игрока",
        year: null,
        popularItems: "37,682",
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
            number: "18,240",
          },
        ],
      },
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        name: "Экшен",
        year: null,
        popularItems: "33,738",
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
            number: "18,240",
          },
        ],
      },
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
        name: "Приключение",
        year: null,
        popularItems: "31,724",
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
            number: "18,240",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Creators",
    number_games: 27.082,
    details: [
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
        name: "Gabe Newell",
        year: null,
        popularItems: "24",
        detailItem: [
          {
            name: "Portal 2",
            number: "18,240",
          },
          {
            name: "Counter-Strike: Global Offensive",
            number: "15,875",
          },
          {
            name: "Portal",
            number: "15,498",
          },
        ],
      },
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
        name: "Marc Laidlaw",
        year: null,
        popularItems: "15",
        detailItem: [
          {
            name: "Portal 2",
            number: "18,240",
          },
          {
            name: "Counter-Strike: Global Offensive",
            number: "15,875",
          },
          {
            name: "Portal",
            number: "15,498",
          },
        ],
      },
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
        name: "Robin Walker",
        year: null,
        popularItems: "14",
        detailItem: [
          {
            name: "Portal 2",
            number: "18,240",
          },
          {
            name: "Counter-Strike: Global Offensive",
            number: "15,875",
          },
          {
            name: "Portal",
            number: "15,498",
          },
        ],
      },
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
        name: "David Speyrer",
        year: null,
        popularItems: "12",
        detailItem: [
          {
            name: "Portal 2",
            number: "18,240",
          },
          {
            name: "Counter-Strike: Global Offensive",
            number: "15,875",
          },
          {
            name: "Portal",
            number: "15,498",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Developers",
    number_games: 437.75,
    details: [
      {
        image:
          "https://media.rawg.io/media/resize/640/-/screenshots/d33/d331d95adf10b44ee3678129020bc31f.jpg",
        name: "Valve Software",
        year: null,
        popularItems: "43",
        detailItem: [
          {
            name: "Portal 2",
            number: "18,240",
          },
          {
            name: "Counter-Strike: Global Offensive",
            number: "15,875",
          },
          {
            name: "Portal",
            number: "15,498",
          },
        ],
      },
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/c73/c73c4ffebfe968ba0982a56c2b5020ef.jpg",
        name: "Ubisoft",
        year: null,
        popularItems: "334",
        detailItem: [
          {
            name: "Far Cry 3",
            number: "9,636",
          },
          {
            name: "For Honor",
            number: "8,918",
          },
          {
            name: "Assassin’s Creed IV: Black Flag",
            number: "8,855",
          },
        ],
      },
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
        name: "Feral Interactive",
        year: null,
        popularItems: "106",
        detailItem: [
          {
            name: "Rise of the Tomb Raider",
            number: "11,165",
          },
          {
            name: "Middle-earth: Shadow of Mordor",
            number: "10,604",
          },
          {
            name: "BioShock 2",
            number: "10,347",
          },
        ],
      },
      {
        image:
          "https://media.rawg.io/media/resize/640/-/screenshots/590/590aa45fbab8d43b57f93dd60027af7f.jpg",
        name: "Electronic Arts",
        year: null,
        popularItems: "326",
        detailItem: [
          {
            name: "Dead Space (2008)",
            number: "8,844",
          },
          {
            name: "Brutal Legend",
            number: "7,825",
          },
          {
            name: "Battlefield 1",
            number: "7,141",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Publishers",
    number_games: 65.673,
    details: [
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        name: "Electronic Arts",
        year: null,
        popularItems: "1,311",
        detailItem: [
          {
            name: "Portal 2",
            number: "18,240",
          },
          {
            name: "Left 4 Dead 2",
            number: "15,425",
          },
          {
            name: "Apex Legends",
            number: "10,391",
          },
        ],
      },
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/d89/d89bd0cf4fcdc10820892980cbba0f49.jpg",
        name: "Square Enix",
        year: null,
        popularItems: "584",
        detailItem: [
          {
            name: "Tomb Raider (2013)",
            number: "15,873",
          },
          {
            name: "Life is Strange",
            number: "14,448",
          },
          {
            name: "Rise of the Tomb Raider",
            number: "11,165",
          },
        ],
      },
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/d1a/d1a1202a378607b6c635c8f18ace95dd.jpg",
        name: "Microsoft Studios",
        year: null,
        popularItems: "496",
        detailItem: [
          {
            name: "Limbo",
            number: "12,886",
          },
          {
            name: "Rise of the Tomb Raider",
            number: "11,165",
          },
          {
            name: "Alan Wake",
            number: "9,463",
          },
        ],
      },
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/5e4/5e4bff02098b2b6f824c68286d5da1a6.jpg",
        name: "Ubisoft Entertainment",
        year: null,
        popularItems: "1,057",
        detailItem: [
          {
            name: "Far Cry 3",
            number: "9,636",
          },
          {
            name: "For Honor",
            number: "8,918",
          },
          {
            name: "Assassin’s Creed IV: Black Flag",
            number: "8,855",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Stores",
    number_games: 10,
    details: [
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        name: "Steam",
        year: null,
        popularItems: "80,033",
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
            number: "18,240",
          },
        ],
      },
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
        name: "PlayStation Store",
        year: null,
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
            name: "Portal 2",
            number: "18,240",
          },
        ],
      },
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        name: "Xbox Store",
        year: null,
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
            number: "18,240",
          },
        ],
      },
      {
        image:
          "https://media.rawg.io/media/resize/640/-/games/530/5302dd22a190e664531236ca724e8726.jpg",
        name: "App Store",
        year: null,
        popularItems: "75,330",
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
            number: "18,240",
          },
        ],
      },
    ],
  },
];

const Browse = () => {
  return (
    <>
      <Box>
        <Box as={"section"}>
          <PageHeading>Browse</PageHeading>
        </Box>

        <Box as={"section"} marginTop={"10px"}>
          {data.map((item: any) => {
            return (
              <Box marginBottom={"10px"} key={item.id}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  gap={"10px"}
                  marginBottom={"10px"}
                >
                  <Box
                    fontSize={"24px"}
                    textDecoration={"underline 0.5px"}
                    cursor={"pointer"}
                  >
                    {item.name}
                  </Box>

                  <Box
                    fontSize={"24px"}
                    fontWeight={"400"}
                    lineHeight={"28px"}
                    color={"gray"}
                  >
                    {item.number_games}
                  </Box>

                  <AiOutlineRight color={"gray"} />
                </Box>

                <Grid gridTemplateColumns={"1fr 1fr 1fr 1fr"}>
                  {item.details.map((i: any) => {
                    return (
                      <GridItem
                        backgroundImage={`linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(${i.image})`}
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
                            {i.name}
                          </Box>
                          <Box>{i.year ? i.year : ""}</Box>

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

                          <Box>{i.popularItems}</Box>
                        </Box>

                        {i.detailItem.map((detail: any) => {
                          return (
                            <Box
                              display={"flex"}
                              justifyContent={"space-between"}
                              width={"90%"}
                              margin={"0 auto"}
                            >
                              <Box
                                fontSize={"12px"}
                                borderBottom={"solid 0.5px white"}
                                height={"20px"}
                                cursor={"pointer"}
                              >
                                {detail.name}
                              </Box>
                              <Box
                                display={"flex"}
                                gap={"5px"}
                                alignItems={"center"}
                                color={"gray"}
                                fontSize={"12px"}
                              >
                                {detail.number} <BsPerson />
                              </Box>
                            </Box>
                          );
                        })}
                      </GridItem>
                    );
                  })}
                </Grid>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Browse;
