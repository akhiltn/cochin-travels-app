// src/layout/Layout.tsx
import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import { Box } from "@chakra-ui/react";

export default function Layout() {
  return (
    <>
      <TopNav />
      <Box as="main" p={6}>
        <Outlet />
      </Box>
    </>
  );
}
