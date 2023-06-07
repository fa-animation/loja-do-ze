import { Box } from '@chakra-ui/react';
import { LayoutProps } from '@/types';

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box as="main">
      {children}
    </Box>
  );
};

export default Layout;
