import { Box, Flex, HStack, IconButton, Spacer, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useLocation } from "react-router-dom";

import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
} from "../components/ui/menu";
import { Button } from "../components/ui/button";

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
        <Text fontWeight="bold">MyApp</Text>

        <Spacer />

        {/* Desktop navigation */}
        <HStack gap={4} display={{ base: "none", md: "flex" }}>
          <Button asChild variant={isActive("/") ? "solid" : "ghost"}>
            <RouterLink to="/">Home</RouterLink>
          </Button>

          <Button asChild variant={isActive("/about") ? "solid" : "ghost"}>
            <RouterLink to="/about">About</RouterLink>
          </Button>
        </HStack>

        {/* Mobile navigation */}
        <Box display={{ base: "block", md: "none" }}>
          <MenuRoot>
            <MenuTrigger asChild>
              <IconButton aria-label="Open menu" variant="ghost">
                <HamburgerIcon />
              </IconButton>
            </MenuTrigger>

            <MenuContent>
              <MenuItem value="home" asChild>
                <RouterLink to="/">Home</RouterLink>
              </MenuItem>

              <MenuItem value="about" asChild>
                <RouterLink to="/about">About</RouterLink>
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        </Box>
      </Flex>
    </Box>
  );
}
