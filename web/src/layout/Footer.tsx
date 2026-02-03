import { Box, Grid, GridItem, Heading, Text, VStack, HStack, Icon, StackSeparator, Link } from "@chakra-ui/react";
import { LuPhone, LuMail, LuMapPin } from "react-icons/lu";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const tourPackages = {
  "Core Kerala Tourism": [
    "Kerala Tour Packages",
    "Kerala Tourism Packages", 
    "Kerala Holiday Packages",
    "Kerala Travel Packages",
    "Best Kerala Tour Operator",
    "Customized Kerala Tour Packages",
    "Kerala Sightseeing Tours"
  ],
  "Hill Station & Nature": [
    "Munnar Tour Packages",
    "Wayanad Tour Packages",
    "Vagamon Tour Packages",
    "Kerala Hill Station Tour Packages",
    "Western Ghats Kerala Tour Packages"
  ],
  "Backwater & Houseboat": [
    "Alleppey Houseboat Packages",
    "Kumarakom Houseboat Tours",
    "Kerala Backwater Tour Packages",
    "Kerala Luxury Houseboat Tours"
  ],
  "Wildlife & Eco Tourism": [
    "Thekkady Tour Packages",
    "Periyar Wildlife Safari Tours",
    "Kerala Wildlife Tour Packages",
    "Kerala Eco Tourism Packages"
  ],
  "Beach & Leisure": [
    "Kovalam Tour Packages",
    "Varkala Tour Packages",
    "Kerala Beach Holiday Packages"
  ],
  "Pilgrimage & Spiritual": [
    "Sabarimala Tour Packages",
    "Sabarimala Mandala Season Packages",
    "Sabarimala Darshan Tour",
    "Sabarimala Guruvayur Tour",
    "Guruvayur Temple Tour"
  ],
  "City-Based Kerala Tours": [
    "Cochin Munnar Tour",
    "Cochin Thekkady Tour",
    "Cochin Alleppey Houseboat Tour",
    "Kochi Sightseeing Packages",
    "Kochi Kerala Tour Packages"
  ],
  "Ayurveda & Wellness": [
    "Kerala Ayurveda Tour Packages",
    "Kerala Wellness Retreat Packages",
    "Kerala Rejuvenation Therapy Tours"
  ]
};

export default function Footer() {
  return (
    <Box
      bg={{ base: "gray.50", _dark: "gray.900" }}
      borderTopWidth="1px"
      mt={12}
      py={8}
    >
      <Box maxW="7xl" mx="auto" px={4}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={8}
          mb={8}
        >
          {Object.entries(tourPackages).map(([category, packages]) => (
            <GridItem key={category}>
              <Heading size="sm" fontWeight="600" mb={3} color="blue.600">
                {category}
              </Heading>
              <VStack align="start" gap={2}>
                 {packages.map((pkg) => (
                   <Text
                     key={pkg}
                     color="gray.600"
                     _hover={{ color: "blue.500", cursor: "pointer" }}
                     fontSize="sm"
                     onClick={() => {
                       const element = document.getElementById('contactus');
                       element?.scrollIntoView({ behavior: 'smooth' });
                     }}
                   >
                     {pkg}
                   </Text>
                 ))}
              </VStack>
            </GridItem>
          ))}
        </Grid>

        <StackSeparator mb={6} />

        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "center", md: "center" }}
          gap={4}
        >
          <VStack align="start" gap={2}>
            <HStack gap={4}>
              <HStack>
                <Icon as={LuPhone} color="blue.600" />
                <Text fontSize="sm">+91 90379 80745</Text>
              </HStack>
              <HStack>
                <Icon as={LuMail} color="blue.600" />
                <Text fontSize="sm">mail@cochintravels.com</Text>
              </HStack>
            </HStack>
            <HStack>
              <Icon as={LuMapPin} color="blue.600" />
              <Text fontSize="sm">Cochin, Kerala, India</Text>
            </HStack>
          </VStack>

          <HStack gap={4}>
            <Link href="https://wa.me/919037980745" target="_blank">
              <Icon as={FaWhatsapp} boxSize={5} color="green.500" _hover={{ color: "green.600" }} />
            </Link>
            <Link href="https://www.instagram.com/cochintravels/" target="_blank">
              <Icon as={FaInstagram} boxSize={5} color="pink.500" _hover={{ color: "pink.600" }} />
            </Link>
            <Link href="https://www.facebook.com/cochintravels.in/" target="_blank">
              <Icon as={FaFacebook} boxSize={5} color="blue.600" _hover={{ color: "blue.700" }} />
            </Link>
          </HStack>
        </Box>

        <Text textAlign="center" fontSize="sm" color="gray.500" mt={6}>
          © 2024 Cochin Travels. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}