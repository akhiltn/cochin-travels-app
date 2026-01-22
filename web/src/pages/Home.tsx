import { Box, Heading, Image, Text } from "@chakra-ui/react";
import banner from "../assets/banner.jpg";

export default function Home() {
  return (
    <Box position="relative">
      {/* Banner image */}
      <Image
        src={banner}
        alt="Explore Kerala with Cochin Travels"
        width="100%"
        height={{ base: "260px", md: "480px" }}
        objectFit="cover"
      />

      {/* Dark overlay */}
      <Box position="absolute" inset={0} bg="blackAlpha.600" />

      {/* Text content */}
      <Box
        position="absolute"
        inset={0}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
        px={4}
      >
        <Heading
          fontSize={{ base: "xl", md: "4xl" }}
          fontWeight="900"
          fontStyle="italic"
          letterSpacing="wide"
        >
          Explore Kerala
        </Heading>

        <Text mt={3} fontSize={{ base: "sm", md: "lg" }} maxW="600px">
          Discover backwaters, hills, beaches and culture with Cochin Travels
        </Text>
      </Box>
    </Box>
  );
}
