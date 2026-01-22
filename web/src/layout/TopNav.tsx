import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import logo from "../assets/logo.svg";

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
        <Link to="/" style={{ textDecoration: "none" }}>
          <HStack gap={3}>
            <Image
              src={logo}
              alt="Cochin Travels"
              height={{ base: "28px", md: "36px" }}
            />
            <Text
              fontWeight="900"
              fontFamily="'Poppins', sans-serif"
              fontSize={{ base: "lg", md: "2xl" }}
              letterSpacing="wide"
            >
              Cochin Travels
            </Text>
          </HStack>
        </Link>

        <Spacer />

        {/* Desktop navigation */}
        <HStack gap={4} display={{ base: "none", md: "flex" }}>
          <Button asChild variant={isActive("/") ? "solid" : "ghost"}>
            <Link to="/">Home</Link>
          </Button>

          <Button asChild variant={isActive("/about") ? "solid" : "ghost"}>
            <Link to="/about">About</Link>
          </Button>

          <Button asChild variant={isActive("/services") ? "solid" : "ghost"}>
            <Link to="/services">Services</Link>
          </Button>

          <Button asChild variant={isActive("/contactus") ? "solid" : "ghost"}>
            <Link to="/contactus">Contact Us</Link>
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

            <MenuContent>
              <MenuItem value="home" asChild>
                <Link to="/">Home</Link>
              </MenuItem>

              <MenuItem value="about" asChild>
                <Link to="/about">About</Link>
              </MenuItem>

              <MenuItem value="services" asChild>
                <Link to="/services">Services</Link>
              </MenuItem>

              <MenuItem value="contactus" asChild>
                <Link to="/contactus">Contact Us</Link>
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        </HStack>
      </Flex>
    </Box>
  );
}
