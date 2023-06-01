import { Box, Heading, Text, Container, Link, Icon, Stack } from "@chakra-ui/react";
import Typewriter from 'typewriter-effect';
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { AppStoreButton } from "./AppStoreButton";

export const AppStores = () => {
  return (
    <Box
      textAlign={"center"}
      mb={8}
      w="full"
      rounded="lg"
      pb={4}
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
          <AppStoreButton
            icon={FaApple}
            text="Mac App Store"
          />
          <AppStoreButton
            icon={FaGooglePlay}
            text="Google Play"
          />
        </Stack>
      </Container>
    </Box>
  )
};
