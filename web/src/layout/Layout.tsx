import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import { Box } from "@chakra-ui/react";
import StickyContactFooter from "./StickyContactFooter";

function Layout() {
  return (
    <>
      <TopNav />
      <Box as="main" p={6}>
        <Outlet />
      </Box>
      <StickyContactFooter />
    </>
  );
}

export default Layout;
