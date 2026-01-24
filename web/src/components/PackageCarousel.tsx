import { Box, HStack, IconButton, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { fetchUnsplashImages } from "../lib/unsplash";

type UnsplashImage = {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
};

const packageQueries = [
  { id: "kerala", title: "Kerala Tours", query: "Kerala backwaters" },
  { id: "honeymoon", title: "Honeymoon", query: "romantic travel couple" },
  { id: "family", title: "Family Trips", query: "family vacation travel" },
  { id: "adventure", title: "Adventure", query: "adventure travel india" },
];

export default function PackageCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<Record<string, UnsplashImage[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all(
      packageQueries.map(async (pkg) => {
        const imgs = await fetchUnsplashImages(pkg.query);
        return [pkg.id, imgs] as const;
      })
    ).then((results) => {
      const map: Record<string, UnsplashImage[]> = {};
      results.forEach(([id, imgs]) => (map[id] = imgs));
      setImages(map);
      setLoading(false);
    });
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  if (loading) return null;

  return (
    <Box position="relative" py={8}>
      <IconButton
        aria-label="Left"
        variant="ghost"
        position="absolute"
        left={0}
        top="50%"
        transform="translateY(-50%)"
        onClick={() => scroll("left")}
      >
        <LuChevronLeft />
      </IconButton>

      <HStack
        ref={scrollRef}
        gap={4}
        overflowX="auto"
        px={10}
        css={{
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {packageQueries.map((pkg) => {
          const img = images[pkg.id]?.[0];
          if (!img) return null;

          return (
            <Box
              key={pkg.id}
              minW="280px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              flexShrink={0}
            >
              <Image
                src={img.urls.small}
                alt={img.alt_description || pkg.title}
                height="180px"
                width="100%"
                objectFit="cover"
              />

              <Box p={4}>
                <Text fontWeight="bold">{pkg.title}</Text>
                <Text fontSize="xs" color="fg.muted" mt={1}>
                  Photo from Unsplash
                </Text>
              </Box>
            </Box>
          );
        })}
      </HStack>

      <IconButton
        aria-label="Right"
        variant="ghost"
        position="absolute"
        right={0}
        top="50%"
        transform="translateY(-50%)"
        onClick={() => scroll("right")}
      >
        <LuChevronRight />
      </IconButton>
    </Box>
  );
}
