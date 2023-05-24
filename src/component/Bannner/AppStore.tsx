import { Box, Heading, Text, Container, Stack, Button } from "@chakra-ui/react";
import Typewriter from 'typewriter-effect';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa'

export const AppStores = () => {
  return (
    <Box textAlign={"center"} mt={7} mb={7}>
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
          spacing={8}
          direction={{ base: 'column', sm: 'row' }}
        >
          <Button
            leftIcon={<FaGooglePlay />}
            px="40px"
            fontSize="1.2rem"
            as="a"
            size="lg"
            cursor={"pointer"}
          >
            Google Play
          </Button>
          <Button
            leftIcon={<FaAppStore />}
            px="40px"
            fontSize="1.2rem"
            as="a"
            size="lg"
            cursor={"pointer"}
          >
            AppStore
          </Button>
        </Stack>
      </Container>
    </Box>
  )
};