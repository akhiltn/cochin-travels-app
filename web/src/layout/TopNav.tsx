import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { LuMenu } from "react-icons/lu";
import { ColorModeButton } from "../components/ui/color-mode";
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
} from "../components/ui/menu";
import logo from "../assets/logo.svg";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Contact Us", id: "contactus" },
];

export default function TopNav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex="sticky"
      borderBottomWidth="1px"
      bg={{ base: "white", _dark: "gray.900" }}
      boxShadow="sm"
    >
      <Container maxW="6xl">
        <Flex py={3} align="center">
          <HStack
            gap={3}
            as="button"
            type="button"
            onClick={() => scrollTo("home")}
          >
            <Image
              src={logo}
              alt="Cochin Travels"
              height={{ base: "28px", md: "36px" }}
            />
            <Text fontWeight="900" fontStyle="italic" fontSize="xl">
              Cochin Travels
            </Text>
          </HStack>
          <Spacer />

          {/* Desktop nav */}
          <HStack gap={2} display={{ base: "none", md: "flex" }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </Button>
            ))}
            <Button
              colorPalette="blue"
              size="sm"
              onClick={() => scrollTo("contactus")}
            >
              Get Quote
            </Button>
            <ColorModeButton />
          </HStack>

          {/* Mobile nav */}
          <HStack gap={2} display={{ base: "flex", md: "none" }}>
            <ColorModeButton />

            <MenuRoot closeOnSelect>
              <MenuTrigger asChild>
                <IconButton aria-label="Open menu" variant="ghost">
                  <LuMenu />
                </IconButton>
              </MenuTrigger>

              <MenuContent>
                {navItems.map((item) => (
                  <MenuItem
                    key={item.id}
                    value={item.id}
                    onClick={() => scrollTo(item.id)}
                  >
                    {item.label}
                  </MenuItem>
                ))}
                <MenuItem value="quote" onClick={() => scrollTo("contactus")}>
                  Get Quote
                </MenuItem>
              </MenuContent>
            </MenuRoot>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
