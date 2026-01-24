import PackageCarousel from "@/components/PackageCarousel";
import { Flex, Heading } from "@chakra-ui/react";
function Services() {
  return (
    <>
      <Flex gap="4" justify="center">
        <Heading mb={4} pt="5">
          Explore
        </Heading>
      </Flex>
      <PackageCarousel />
    </>
  );
}

export default Services;
