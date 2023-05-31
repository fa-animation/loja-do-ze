import { Box, Icon, IconProps, Link, Text } from '@chakra-ui/react';
import { IconType } from "react-icons";

interface IconCtx extends IconProps {
  icon: IconType;
  text: string;
}

export const AppStoreButton = ({ icon, text }: IconCtx) => {
  return (
    <Link
      href="#"
      w={['full', 'auto']}
      color="white"
      rounded="lg"
      size="lg"
      display="inline-flex"
      // justifyItems={"center"}
      // justifyContent="center"
      alignItems={"center"}
      px={4}
      py={2.5}
      bg="gray.700"
      _hover={{ bg: 'gray.600' }}
      isExternal
    >
      <Icon
        mr={3}
        w={7}
        h={7}
        as={icon}
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="apple"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      />
      <Box textAlign="left">
        <Text mb={1} fontSize="xs">
          Baixe agora no
        </Text>
        <Text mt={-1} fontFamily="sans-serif" fontSize="sm" fontWeight="semibold">
          {text}
        </Text>
      </Box>
    </Link>
  );
};