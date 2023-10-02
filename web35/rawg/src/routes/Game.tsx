import { Box, Grid, GridItem, Button } from "@chakra-ui/react";
import { PageHeading } from "../components/PageHeading";

///// import icons
import { BsPerson } from "react-icons/bs";

const Game = () => {
  return (
    <>
      <Box>
        <Box as={"section"}>
          <PageHeading>All Games</PageHeading>
        </Box>

        <Box as={"section"} marginTop={"10px"}>
          <Box marginBottom={"10px"}>
            <Box></Box>

            <Grid gridTemplateColumns={"1fr 1fr 1fr 1fr"} rowGap={"20px"}>
              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"100%"}
                borderRadius={"10px"}
                paddingBottom={"10px"}
                objectFit={"cover"}
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
                    PC
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

                  <Box>516,911</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Portal 2
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    18,225 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/9fb/9fbf956a16249def7625ab5dc3d09515.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"100%"}
                borderRadius={"10px"}
                paddingBottom={"10px"}
                objectFit={"cover"}
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
                    PlayStation 5
                  </Box>
                  <Box>2020</Box>

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

                  <Box>940</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Destiny 2
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    12,896 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"320px"}
                borderRadius={"10px"}
                objectFit={"cover"}
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
                    Xbox One
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

                  <Box>5,553</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Portal 2
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    18,225 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"320px"}
                borderRadius={"10px"}
                objectFit={"cover"}
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
                    PlayStation 4
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

                  <Box>6,717</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Tomb Raider (2013)
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    15,859 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"100%"}
                borderRadius={"10px"}
                paddingBottom={"10px"}
                objectFit={"cover"}
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
                    PC
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

                  <Box>516,911</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Portal 2
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    18,225 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/9fb/9fbf956a16249def7625ab5dc3d09515.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"100%"}
                borderRadius={"10px"}
                paddingBottom={"10px"}
                objectFit={"cover"}
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
                    PlayStation 5
                  </Box>
                  <Box>2020</Box>

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

                  <Box>940</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Destiny 2
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    12,896 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"320px"}
                borderRadius={"10px"}
                objectFit={"cover"}
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
                    Xbox One
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

                  <Box>5,553</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Portal 2
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    18,225 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"320px"}
                borderRadius={"10px"}
                objectFit={"cover"}
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
                    PlayStation 4
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

                  <Box>6,717</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Tomb Raider (2013)
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    15,859 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"100%"}
                borderRadius={"10px"}
                paddingBottom={"10px"}
                objectFit={"cover"}
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
                    PC
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

                  <Box>516,911</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Portal 2
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    18,225 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/9fb/9fbf956a16249def7625ab5dc3d09515.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"100%"}
                borderRadius={"10px"}
                paddingBottom={"10px"}
                objectFit={"cover"}
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
                    PlayStation 5
                  </Box>
                  <Box>2020</Box>

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

                  <Box>940</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Destiny 2
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    12,896 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"320px"}
                borderRadius={"10px"}
                objectFit={"cover"}
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
                    Xbox One
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

                  <Box>5,553</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Portal 2
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    18,225 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"320px"}
                borderRadius={"10px"}
                objectFit={"cover"}
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
                    PlayStation 4
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

                  <Box>6,717</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Tomb Raider (2013)
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    15,859 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"100%"}
                borderRadius={"10px"}
                paddingBottom={"10px"}
                objectFit={"cover"}
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
                    PC
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

                  <Box>516,911</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Portal 2
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    18,225 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/9fb/9fbf956a16249def7625ab5dc3d09515.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"100%"}
                borderRadius={"10px"}
                paddingBottom={"10px"}
                objectFit={"cover"}
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
                    PlayStation 5
                  </Box>
                  <Box>2020</Box>

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

                  <Box>940</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Destiny 2
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    12,896 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"320px"}
                borderRadius={"10px"}
                objectFit={"cover"}
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
                    Xbox One
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

                  <Box>5,553</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Portal 2
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    18,225 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"320px"}
                borderRadius={"10px"}
                objectFit={"cover"}
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
                    PlayStation 4
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

                  <Box>6,717</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Tomb Raider (2013)
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    15,859 <BsPerson />
                  </Box>
                </Box>
              </GridItem>
              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"100%"}
                borderRadius={"10px"}
                paddingBottom={"10px"}
                objectFit={"cover"}
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
                    PC
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

                  <Box>516,911</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Portal 2
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    18,225 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/9fb/9fbf956a16249def7625ab5dc3d09515.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"100%"}
                borderRadius={"10px"}
                paddingBottom={"10px"}
                objectFit={"cover"}
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
                    PlayStation 5
                  </Box>
                  <Box>2020</Box>

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

                  <Box>940</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Destiny 2
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    12,896 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"320px"}
                borderRadius={"10px"}
                objectFit={"cover"}
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
                    Xbox One
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

                  <Box>5,553</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Portal 2
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    18,225 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"320px"}
                borderRadius={"10px"}
                objectFit={"cover"}
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
                    PlayStation 4
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

                  <Box>6,717</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Tomb Raider (2013)
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    15,859 <BsPerson />
                  </Box>
                </Box>
              </GridItem>
              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"100%"}
                borderRadius={"10px"}
                paddingBottom={"10px"}
                objectFit={"cover"}
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
                    PC
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

                  <Box>516,911</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Portal 2
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    18,225 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/9fb/9fbf956a16249def7625ab5dc3d09515.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"100%"}
                borderRadius={"10px"}
                paddingBottom={"10px"}
                objectFit={"cover"}
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
                    PlayStation 5
                  </Box>
                  <Box>2020</Box>

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

                  <Box>940</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Destiny 2
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    12,896 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"320px"}
                borderRadius={"10px"}
                objectFit={"cover"}
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
                    Xbox One
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

                  <Box>5,553</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Portal 2
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    18,225 <BsPerson />
                  </Box>
                </Box>
              </GridItem>

              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg)"
                }
                backgroundColor={"black"}
                backgroundRepeat={"no-repeat"}
                width={"286px"}
                height={"320px"}
                borderRadius={"10px"}
                objectFit={"cover"}
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
                    PlayStation 4
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

                  <Box>6,717</Box>
                </Box>

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
                    Grand Theft Auto V
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    20,054 <BsPerson />
                  </Box>
                </Box>

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
                    The Witcher 3: Wild Hunt
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    19,333 <BsPerson />
                  </Box>
                </Box>

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
                    Tomb Raider (2013)
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    alignItems={"center"}
                    color={"gray"}
                  >
                    15,859 <BsPerson />
                  </Box>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Game;
