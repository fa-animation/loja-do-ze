import { Box, Heading, Text, Container, Link, Icon, Stack } from "@chakra-ui/react";
import Typewriter from 'typewriter-effect';
import { FaApple, FaGooglePlay } from 'react-icons/fa'

export const AppStores = () => {
  return (
    <Box
      textAlign={"center"}
      mt={7}
      mb={7}
      w="full"
      p={[4, 8]}
      rounded="lg"
    >
      <Container pt="4rem" maxW="1280px" >
        <Heading mb={2} fontWeight={"bold"}>
          Compre rápido de qualquer {" "}
          <Typewriter
            options={{
              strings: ['lugar', 'momento'],
              autoStart: true,
              loop: true,
            }}
          />
        </Heading>
        <Text>
          Mantenha-se atualizado no iOS e Android. Baixe o aplicativo hoje.
        </Text>
        <Stack
          mt={2}
          justifyContent={"center"}
          justifyItems={"center"}
          spacing={3}
          direction={{ base: 'column', sm: 'row' }}
        >
          <Link
            href="#"
            w={['full', 'auto']}
            color="white"
            rounded="lg"
            display="inline-flex"
            justifyItems={"center"}
            justifyContent="center"
            px={4}
            py={2.5}
            bg="gray.700"
            _hover={{ bg: 'gray.600' }}
            size="lg"
          >
            <Icon
              mr={3}
              w={7}
              h={7}
              as={FaApple}
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
                Mac App Store
              </Text>
            </Box>
          </Link>
          <Link
            href="#"
            w={['full', 'auto']}
            color="white"
            rounded="lg"
            size="lg"
            display="inline-flex"
            justifyItems={"center"}
            justifyContent="center"
            px={4}
            py={2.5}
            bg="gray.700"
            _hover={{ bg: 'gray.600' }}
          >
            <Icon
              mr={3}
              w={7}
              h={7}
              as={FaGooglePlay}
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
                Google Play
              </Text>
            </Box>
          </Link>
        </Stack>
      </Container>
    </Box>
  )
};
