import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { LuMapPin, LuHeart, LuUsers, LuMountain, LuStar } from "react-icons/lu";
import { fetchUnsplashImages } from "../lib/unsplash";
import { useQuery } from "@tanstack/react-query";

const packageDetails = [
  {
    id: "kerala",
    title: "Kerala Tours",
    icon: LuMapPin,
    description: "Experience the divine beauty of God's Own Country",
    features: [
      "Backwater houseboat stays",
      "Tea garden tours in Munnar",
      "Ayurvedic wellness treatments",
      "Cultural performances and Kathakali",
      "Beach resorts at Kovalam and Varkala",
    ],
    color: "green.500",
    imageQuery: "kerala backwaters houseboat",
  },
  {
    id: "honeymoon",
    title: "Honeymoon Packages",
    icon: LuHeart,
    description: "Romantic getaways for couples in love",
    features: [
      "Private villa accommodations",
      "Candlelight dinner arrangements",
      "Couple spa treatments",
      "Sunset cruise experiences",
      "Photography sessions included",
    ],
    color: "pink.500",
    imageQuery: "romantic sunset couple travel",
  },
  {
    id: "family",
    title: "Family Trips",
    icon: LuUsers,
    description: "Memorable vacations for the entire family",
    features: [
      "Kid-friendly accommodations",
      "Educational tours and activities",
      "Family adventure sports",
      "Theme park visits",
      "Special meal arrangements for children",
    ],
    color: "blue.500",
    imageQuery: "family vacation holiday travel",
  },
  {
    id: "adventure",
    title: "Adventure Travel",
    icon: LuMountain,
    description: "Thrilling experiences for adventure enthusiasts",
    features: [
      "Trekking and hiking expeditions",
      "Water sports and scuba diving",
      "Wildlife safaris",
      "Paragliding and zip-lining",
      "Camping under the stars",
    ],
    color: "orange.500",
    imageQuery: "adventure travel mountain hiking",
  },
  {
    id: "sabarimala",
    title: "Sabarimala Pilgrimage",
    icon: LuStar,
    description: "Spiritual journey to the sacred abode of Lord Ayyappa",
    features: [
      "Traditional pilgrimage arrangements",
      "Accommodation near Pamba",
      "Transportation to Sannidhanam",
      "Special puja bookings",
      "Guided darshan assistance",
    ],
    color: "yellow.600",
    imageQuery: "temple pilgrimage spiritual journey",
  },
];

function PackageCard({ pkg }: { pkg: (typeof packageDetails)[0] }) {
  const imagesQuery = useQuery({
    queryKey: ["unsplash-images", pkg.imageQuery],
    queryFn: () => fetchUnsplashImages(pkg.imageQuery),
  });

  const backgroundImage =
    imagesQuery.data?.[0]?.urls?.regular ||
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  return (
    <Box
      bgImage={`url('${backgroundImage}')`}
      backgroundSize="cover"
      backgroundPosition="center"
      borderRadius="xl"
      shadow="lg"
      border="1px solid"
      borderColor="gray.100"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-4px)",
        shadow: "xl",
        borderColor: pkg.color,
      }}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset={0}
        bg="rgba(255,255,255,0.7)"
        backdropFilter="blur(1px)"
      />
      <Box position="relative" zIndex={1} p={8}>
        <VStack gap={4} align="start">
          <HStack>
            <Icon as={pkg.icon} w={8} h={8} color={pkg.color} />
            <Heading as="h3" size="md">
              {pkg.title}
            </Heading>
          </HStack>

          <Text color="gray.600" fontSize="md">
            {pkg.description}
          </Text>

          <Box w="full">
            <Text fontWeight="semibold" color={pkg.color} mb={2} fontSize="sm">
              Package Highlights:
            </Text>
            <VStack gap={2} align="start">
              {pkg.features.map((feature, index) => (
                <HStack key={index} gap={2}>
                  <Box
                    w={2}
                    h={2}
                    borderRadius="full"
                    bg={pkg.color}
                    flexShrink={0}
                    mt={2}
                  />
                  <Text fontSize="sm" color="gray.700">
                    {feature}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

export default function PackageTypes() {
  return (
    <Box py={20} bg="linear(to-b, white, gray.50)">
      <Container maxW="6xl">
        <VStack gap={12}>
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Heading
              as="h2"
              size="2xl"
              mb={4}
              bgGradient="linear(to-r, blue.600, purple.600)"
              bgClip="text"
            >
              Our Travel Packages
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Discover our carefully crafted travel experiences designed to suit
              every traveler's needs and preferences
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
            {packageDetails.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </SimpleGrid>

          <Box textAlign="center" maxW="2xl" mx="auto">
            <Text fontSize="md" color="gray.500">
              All packages include comfortable transportation, experienced
              guides, and customizable itineraries to make your journey truly
              special.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
