import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

export default function About() {
  return (
    <Box
      as="section"
      bg={{ base: "gray.50", _dark: "gray.900" }}
      py={{ base: 12, md: 20 }}
    >
      <Container maxW="6xl">
        <VStack gap={6} align="start">
          <Heading
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="900"
            fontStyle="italic"
          >
            About Cochin Travels
          </Heading>

          <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted">
            Cochin Travels is a trusted travel partner based in Kerala,
            dedicated to crafting unforgettable travel experiences across God’s
            Own Country.
          </Text>

          <Text fontSize={{ base: "md", md: "lg" }}>
            From serene backwaters and misty hill stations to golden beaches and
            vibrant cultural heritage, we specialize in customized tour packages
            tailored for couples, families, and adventure seekers.
          </Text>

          <Text fontSize={{ base: "md", md: "lg" }}>
            With local expertise, transparent pricing, and personalized support,
            Cochin Travels ensures every journey is comfortable, memorable, and
            hassle-free.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
