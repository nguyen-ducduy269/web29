import { Box, Grid, GridItem } from "@chakra-ui/react";
import { PageHeading } from "../components/PageHeading";

///// import icons
import { CiPlay1 } from "react-icons/ci";
import { FaWindows, FaLinux } from "react-icons/fa";
import { RiPlaystationFill } from "react-icons/ri";
import { FaXbox } from "react-icons/fa";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";

const allGames = [
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    number: 92,
    name: "Grand Theft Auto V",
    added: "19,479",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    number: 92,
    name: "The Witcher 3: Wild Hunt",
    added: "19,479",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
    number: 95,
    name: "Portal 2",
    added: "17,886",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: true,
    andriod: false,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/736/73619bd336c894d6941d926bfd563946.jpg",
    number: 92,
    name: "Counter-Strike: Global Offensive",
    added: "19,479",
    icon: false,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    number: 86,
    name: "Tomb Raider (2013)",
    added: "15,619",
    icon: false,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: true,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    number: 90,
    name: "Portal",
    added: "15,247",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: true,
    andriod: true,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    number: 89,
    name: "Left 4 Dead 2",
    added: "15,316",
    icon: false,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    number: 94,
    name: "The Elder Scrolls V: Skyrim",
    added: "14,759",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    number: 94,
    name: "BioShock Infinite",
    added: "14,248",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    number: 96,
    name: "Red Dead Redemption 2",
    added: "13,052",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
    number: 89,
    name: "Borderlands 2",
    added: "14,235",
    icon: false,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: true,
    andriod: true,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    number: 83,
    name: "Life is Strange",
    added: "14,106",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    number: 92,
    name: "Grand Theft Auto V",
    added: "19,479",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    number: 92,
    name: "The Witcher 3: Wild Hunt",
    added: "19,479",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
    number: 95,
    name: "Portal 2",
    added: "17,886",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: true,
    andriod: false,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/736/73619bd336c894d6941d926bfd563946.jpg",
    number: 92,
    name: "Counter-Strike: Global Offensive",
    added: "19,479",
    icon: false,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    number: 86,
    name: "Tomb Raider (2013)",
    added: "15,619",
    icon: false,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: true,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    number: 90,
    name: "Portal",
    added: "15,247",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: true,
    andriod: true,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    number: 89,
    name: "Left 4 Dead 2",
    added: "15,316",
    icon: false,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    number: 94,
    name: "The Elder Scrolls V: Skyrim",
    added: "14,759",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    number: 94,
    name: "BioShock Infinite",
    added: "14,248",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    number: 96,
    name: "Red Dead Redemption 2",
    added: "13,052",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
    number: 89,
    name: "Borderlands 2",
    added: "14,235",
    icon: false,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: true,
    andriod: true,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    number: 83,
    name: "Life is Strange",
    added: "14,106",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    number: 92,
    name: "Grand Theft Auto V",
    added: "19,479",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    number: 92,
    name: "The Witcher 3: Wild Hunt",
    added: "19,479",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
    number: 95,
    name: "Portal 2",
    added: "17,886",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: true,
    andriod: false,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/736/73619bd336c894d6941d926bfd563946.jpg",
    number: 92,
    name: "Counter-Strike: Global Offensive",
    added: "19,479",
    icon: false,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    number: 86,
    name: "Tomb Raider (2013)",
    added: "15,619",
    icon: false,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: true,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    number: 90,
    name: "Portal",
    added: "15,247",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: true,
    andriod: true,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    number: 89,
    name: "Left 4 Dead 2",
    added: "15,316",
    icon: false,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    number: 94,
    name: "The Elder Scrolls V: Skyrim",
    added: "14,759",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    number: 94,
    name: "BioShock Infinite",
    added: "14,248",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    number: 96,
    name: "Red Dead Redemption 2",
    added: "13,052",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
    number: 89,
    name: "Borderlands 2",
    added: "14,235",
    icon: false,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: true,
    andriod: true,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    number: 83,
    name: "Life is Strange",
    added: "14,106",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    number: 92,
    name: "Grand Theft Auto V",
    added: "19,479",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    number: 92,
    name: "The Witcher 3: Wild Hunt",
    added: "19,479",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
    number: 95,
    name: "Portal 2",
    added: "17,886",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: true,
    andriod: false,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/736/73619bd336c894d6941d926bfd563946.jpg",
    number: 92,
    name: "Counter-Strike: Global Offensive",
    added: "19,479",
    icon: false,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    number: 86,
    name: "Tomb Raider (2013)",
    added: "15,619",
    icon: false,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: true,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    number: 90,
    name: "Portal",
    added: "15,247",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: true,
    andriod: true,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    number: 89,
    name: "Left 4 Dead 2",
    added: "15,316",
    icon: false,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    number: 94,
    name: "The Elder Scrolls V: Skyrim",
    added: "14,759",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    number: 94,
    name: "BioShock Infinite",
    added: "14,248",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    number: 96,
    name: "Red Dead Redemption 2",
    added: "13,052",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
    number: 89,
    name: "Borderlands 2",
    added: "14,235",
    icon: false,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: true,
    andriod: true,
    linux: true,
  },
  {
    image:
      "https://media.rawg.io/media/crop/600/400/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    number: 83,
    name: "Life is Strange",
    added: "14,106",
    icon: true,
    windowIcon: true,
    playStation: true,
    xBox: true,
    apple: false,
    andriod: false,
    linux: false,
  },
];

const Game = () => {
  return (
    <>
      <Box>
        <Box as={"section"}>
          <PageHeading>All Games</PageHeading>
        </Box>

        <Box
          display={"flex"}
          gap={"20px"}
          marginTop={"20px"}
          marginBottom={"20px"}
        >
          <Box width={"184px"} height={"38px"}>
            <select name="" id="">
              <option value="">Date added</option>
              <option value="">Name</option>
              <option value="">Release added</option>
              <option value="">Popularity</option>
              <option value="">Average rating</option>
            </select>
          </Box>

          <Box width={"184px"} height={"38px"}>
            <select name="" id="">
              <option value="">Release year</option>
              <option value="">2010</option>
              <option value="">2011</option>
              <option value="">2012</option>
              <option value="">2013</option>
              <option value="">2014</option>
              <option value="">2015</option>
              <option value="">2016</option>
              <option value="">2017</option>
              <option value="">2018</option>
              <option value="">2019</option>
              <option value="">2020</option>
              <option value="">2021</option>
              <option value="">2022</option>
              <option value="">2023</option>
            </select>
          </Box>

          <Box width={"184px"} height={"38px"}>
            <select name="" id="">
              <option value="">Platforms</option>
              <option value="">PC</option>
              <option value="">PlayStation</option>
              <option value="">Xbox</option>
              <option value="">iOS</option>
              <option value="">Android</option>
              <option value="">Apple Macintosh</option>
              <option value="">Linux</option>
              <option value="">Nintendo</option>
              <option value="">Atari</option>
              <option value="">Commodore / Amiga</option>
              <option value="">SEGA</option>
              <option value="">3DO</option>
              <option value="">Neo Geo</option>
              <option value="">Web</option>
            </select>
          </Box>
        </Box>

        <Box as={"section"} marginTop={"10px"}>
          <Box marginBottom={"10px"}>
            <Box></Box>

            <Grid gridTemplateColumns={"1fr 1fr 1fr 1fr"} rowGap={"20px"}>
              {allGames.map((item: any) => {
                return (
                  <GridItem
                    width={"286px"}
                    height={"100%"}
                    backgroundColor={"#0000008c"}
                    borderRadius={"5px"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"10px"}
                    paddingBottom={"30px"}
                  >
                    <Box width={"100%"} height={"190px"} position={"relative"}>
                      <img src={item.image} alt="" />
                      <Box
                        position={"absolute"}
                        bottom={"20px"}
                        left={"20px"}
                        width={"44px"}
                        height={"44px"}
                        borderRadius={"100%"}
                        backgroundColor={"#000000c9"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Box>
                          <CiPlay1 />
                        </Box>
                      </Box>
                    </Box>

                    <Box padding={"5px 32px"}>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Box display={"flex"} gap={"5px"}>
                          {item.windowIcon ? <FaWindows /> : ""}
                          {item.playStation ? <RiPlaystationFill /> : ""}
                          {item.xBox ? <FaXbox /> : ""}
                          {item.apple ? <AiFillApple /> : ""}
                          {item.andriod ? <AiFillAndroid /> : ""}
                          {item.linux ? <FaLinux /> : ""}
                        </Box>

                        <Box
                          color={"#6dc849"}
                          border={"1px solid rgba(109,200,73,.4)"}
                          width={"32px"}
                          height={"24px"}
                          borderRadius={"4px"}
                          textAlign={"center"}
                        >
                          {item.number}
                        </Box>
                      </Box>

                      <Box
                        display={"flex"}
                        gap={"5px"}
                        alignItems={"center"}
                        fontSize={"22px"}
                      >
                        <b>{item.name}</b>

                        {item.icon == true ? (
                          <img
                            src="data:image/png;base64,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"
                            alt=""
                            width={"30px"}
                            height={"30px"}
                          />
                        ) : (
                          <img
                            src="https://rawg.io/assets/images/recommended.fca8f1d42cc312606f0edafc5fc08f6f.png"
                            alt=""
                            width={"30px"}
                            height={"30px"}
                          />
                        )}
                      </Box>

                      <Box>
                        <button
                          style={{
                            backgroundColor: "gray",
                            color: "white",
                            fontWeight: "700",
                            fontSize: "12px",
                            padding: "2px 10px",
                          }}
                        >
                          + {item.added}
                        </button>
                      </Box>
                    </Box>
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

export default Game;
