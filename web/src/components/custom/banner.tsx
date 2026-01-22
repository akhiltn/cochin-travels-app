import { Box, Image } from "@chakra-ui/react";

type BannerProps = {
  src: string;
};

export default function Banner({ src }: BannerProps) {
  return (
    <Box position="relative" width="100%">
      <Image
        src={src}
        alt="Kerala backwaters"
        width="100%"
        height={{ base: "260px", md: "480px" }}
        objectFit="fill"
      />
    </Box>
  );
}
