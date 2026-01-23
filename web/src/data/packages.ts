// src/data/packages.ts
export type PackageType = {
  id: string;
  title: string;
  image: string;
  description: string;
};

export const packageTypes: PackageType[] = [
  {
    id: "kerala",
    title: "Kerala Tours",
    image: "/assets/packages/kerala.jpg",
    description: "Backwaters, hills and beaches",
  },
  {
    id: "honeymoon",
    title: "Honeymoon Packages",
    image: "/assets/packages/honeymoon.jpg",
    description: "Romantic getaways",
  },
  {
    id: "family",
    title: "Family Trips",
    image: "/assets/packages/family.jpg",
    description: "Fun for all ages",
  },
  {
    id: "adventure",
    title: "Adventure Tours",
    image: "/assets/packages/adventure.jpg",
    description: "Thrill & exploration",
  },
];
