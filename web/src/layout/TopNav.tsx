import { Box, Flex, HStack, IconButton, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { LuMenu } from "react-icons/lu";

import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
} from "../components/ui/menu";
import { Button } from "../components/ui/button";
import { ColorModeButton } from "../components/ui/color-mode";

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

        {/* Desktop navigation */}
        <HStack gap={4} display={{ base: "none", md: "flex" }}>
          <Button asChild variant={isActive("/") ? "solid" : "ghost"}>
            <RouterLink to="/">Home</RouterLink>
          </Button>

          <Button asChild variant={isActive("/about") ? "solid" : "ghost"}>
            <RouterLink to="/about">About</RouterLink>
          </Button>

          {/* 🌗 Always visible */}
          <ColorModeButton />
        </HStack>

        {/* Mobile actions */}
        <HStack gap={2} display={{ base: "flex", md: "none" }}>
          {/* 🌗 Still visible on mobile */}
          <ColorModeButton />

          {/* ☰ Navigation menu */}
          <MenuRoot>
            <MenuTrigger asChild>
              <IconButton aria-label="Open navigation menu" variant="ghost">
                <LuMenu />
              </IconButton>
            </MenuTrigger>

            <MenuContent placement="bottom-end">
              <MenuItem value="home" asChild>
                <RouterLink to="/">Home</RouterLink>
              </MenuItem>

              <MenuItem value="about" asChild>
                <RouterLink to="/about">About</RouterLink>
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        </HStack>
      </Flex>
    </Box>
  );
}
