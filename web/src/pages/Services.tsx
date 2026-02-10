import PackageCarousel from "@/components/PackageCarousel";
import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

function Services() {
  return (
    <Box
      as="section"
      py={{ base: 12, md: 20 }}
      bg={{ base: "gray.50", _dark: "gray.900" }}
    >
      <Container maxW="6xl">
        {/* Section heading */}
        <Flex justify="center" mb={{ base: 6, md: 10 }}>
          <VStack gap={2} textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="900"
              fontStyle="italic"
            >
              Explore Our Packages
            </Heading>
            <Text color="fg.muted" maxW="2xl">
              Curated journeys across Kerala, tailored for families, couples,
              groups, and pilgrims.
            </Text>
          </VStack>
        </Flex>

        {/* Carousel */}
        <PackageCarousel />
      </Container>
    </Box>
  );
}

export default Services;
