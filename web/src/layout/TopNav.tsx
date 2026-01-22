import { Box, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ColorModeButton } from "@/components/ui/color-mode";

export default function TopNav() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex="sticky"
      borderBottomWidth="1px"
      bg="bg.surface"
    >
      <Flex px={6} py={3} align="center">
        {/* Brand */}
        <Text fontWeight="bold">Cochin Travels</Text>

        <Spacer />

        {/* Navigation links */}
        <HStack gap={4}>
          <Button asChild variant={isActive("/") ? "solid" : "ghost"}>
            <RouterLink to="/">Home</RouterLink>
          </Button>

          <Button asChild variant={isActive("/about") ? "solid" : "ghost"}>
            <RouterLink to="/about">About</RouterLink>
          </Button>

          <ColorModeButton />
        </HStack>
      </Flex>
    </Box>
  );
}
