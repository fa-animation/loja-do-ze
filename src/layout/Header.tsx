import { Box, Flex } from '@chakra-ui/react';

import ButtonToggle from './ButtonToggle';

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" mt={20}>
      <Box marginLeft="auto">
        <ButtonToggle />
      </Box>
    </Flex>
  );
};

export default Header;
