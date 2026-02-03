import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import { Box } from "@chakra-ui/react";
import StickyContactFooter from "./StickyContactFooter";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <TopNav />
      <Box as="main" p={6} pb={24}>
        <Outlet />
      </Box>
      <Footer />
      <StickyContactFooter />
    </>
  );
}

export default Layout;
