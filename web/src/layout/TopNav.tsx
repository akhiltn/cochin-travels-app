import { Box, Flex, HStack, IconButton, Spacer, Text } from "@chakra-ui/react";
import { LuMenu } from "react-icons/lu";
import { ColorModeButton } from "../components/ui/color-mode";
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
} from "../components/ui/menu";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
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
      bg="bg.surface"
    >
      <Flex px={6} py={3} align="center">
        <Text fontWeight="900" fontStyle="italic" fontSize="xl">
          Cochin Travels
        </Text>

        <Spacer />

        {/* Desktop nav */}
        <HStack gap={6} display={{ base: "none", md: "flex" }}>
          {navItems.map((item) => (
            <Text
              key={item.id}
              cursor="pointer"
              fontWeight="500"
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </Text>
          ))}
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
            </MenuContent>
          </MenuRoot>
        </HStack>
      </Flex>
    </Box>
  );
}
