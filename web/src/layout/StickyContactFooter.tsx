import { Box, HStack, Link, Icon, Text } from "@chakra-ui/react";
import { LuPhone, LuMail } from "react-icons/lu";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function StickyContactFooter() {
  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex="overlay"
      bg={{ base: "white", _dark: "gray.900" }}
      borderTopWidth="1px"
      boxShadow="md"
    >
      <HStack
        justify="space-around"
        align="center"
        py={{ base: 2, md: 3 }} // 👈 taller on desktop
        px={{ base: 2, md: 6 }}
      >
        <FooterItem
          href="https://wa.me/919037980745"
          icon={FaWhatsapp}
          label="WhatsApp"
          color="green.500"
        />

        <FooterItem
          href="tel:+919037980745"
          icon={LuPhone}
          label="Call 91-9037980745"
          bold
        />

        <FooterItem
          href="mailto:mail@cochintravels.com"
          icon={LuMail}
          label="mail@cochintravels.com"
        />

        <FooterItem
          href="https://www.instagram.com/cochintravels/"
          icon={FaInstagram}
          label="Instagram"
        />

        <FooterItem
          href="https://www.facebook.com/cochintravels.in/"
          icon={FaFacebook}
          label="Facebook"
        />
      </HStack>
    </Box>
  );
}

function FooterItem({
  href,
  icon,
  label,
  color,
  bold,
}: {
  href: string;
  icon: any;
  label: string;
  color?: string;
  bold?: boolean;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      display="flex"
      alignItems="center"
      gap={3}
      _hover={{ textDecoration: "none", opacity: 0.85 }}
    >
      <Icon as={icon} boxSize={{ base: 6, md: 5 }} color={color} />

      <Text
        display={{ base: "none", md: "block" }} // 👈 text hidden on mobile
        fontSize="md"
        fontWeight={bold ? "700" : "500"}
      >
        {label}
      </Text>
    </Link>
  );
}
