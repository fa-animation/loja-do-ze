import { Box } from '@chakra-ui/react';
import Header from './Header';
import { LayoutProps } from '@/types';

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={1200} transition="0.5s ease-out">
      <Box margin="8">
        <Header />
        <Box as="main" marginY={22}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
