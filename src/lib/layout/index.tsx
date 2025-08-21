import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minH="100vh" transition="0.5s ease-out">
      <Box maxWidth={1200} margin="0 auto" px={{ base: 4, md: 8 }}>
        <Header />
      </Box>
      <Box as="main">
        {children}
      </Box>
      <Box maxWidth={1200} margin="0 auto" px={{ base: 4, md: 8 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
