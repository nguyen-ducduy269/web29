import { AspectRatio, Box, Heading, Image, Text } from "@chakra-ui/react";
import { GameData } from "../services/game.services";
import { useRef } from "react";

type GameCardProps = {
  data: GameData;
};

const GameCard = ({ data }: GameCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <Box rounded={"lg"} role="group" _hover={{ transform: "scale(1.05)" }}>
      <AspectRatio ratio={16 / 9}>
        <Box width={"full"} height={"full"}>
          <Image
            // _groupHover={{ display: 'none' }}
            src={data.background_image}
            position={"relative"}
            zIndex={2}
          />

          <Box position={"absolute"} zIndex={1}>
            {data.clip ? (
              <video ref={videoRef} src={data.clip}></video>
            ) : (
              <>carousel</>
            )}
          </Box>
        </Box>
      </AspectRatio>

      <Box p={4}>
        {data.platforms.map((platform) => (
          <Text>{platform.platform.name}</Text>
        ))}
        <Heading
          as={"h3"}
          fontSize={"24px"}
          lineHeight={"28px"}
          fontWeight={700}
        >
          {data.name}
        </Heading>
      </Box>
    </Box>
  );
};

export default GameCard;
