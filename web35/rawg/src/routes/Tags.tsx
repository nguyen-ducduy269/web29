import { Box, Grid, GridItem, Button } from "@chakra-ui/react";
import { PageHeading } from "../components/PageHeading";

///// import icons
import { AiOutlineRight } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

const Tags = () => {
  return (
    <>
      <Box>
        <Box as={"section"}>
          <PageHeading>Tags</PageHeading>
        </Box>

        <Box as={"section"} marginTop={"10px"}>
          <Box marginBottom={"10px"}>
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
                Tags
              </Box>

              <Box
                fontSize={"24px"}
                fontWeight={"400"}
                lineHeight={"28px"}
                color={"gray"}
              >
                10
              </Box>

              <AiOutlineRight color={"gray"} />
            </Box>

            <Grid gridTemplateColumns={"1fr 1fr 1fr 1fr"}>
              <GridItem
                backgroundImage={
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg)"
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
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg)"
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
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg)"
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
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg)"
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
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg)"
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
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg)"
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
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg)"
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
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg)"
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
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg)"
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
                  "linear-gradient(rgba(32, 32,32,0.5), rgb(32,32,32)70%), url(https://media.rawg.io/media/resize/640/-/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg)"
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
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Tags;
