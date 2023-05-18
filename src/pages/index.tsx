import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Img as Image,
  Center,
  Button
} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';

export default function HomeHero() {
  return (
    <>
      <Container maxW={'7xl'} id="intro">
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          direction={{ base: 'column', lg: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '10%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'teal.400',
                  zIndex: -1,
                }}>
                KayoRonald,
              </Text>
              <br />
              <Text as={'span'} color={'teal.400'}>
                <Typewriter
                  options={{
                    strings: ['Reactjs', 'Nextjs', 'Golang'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Text>
            </Heading>
            <Text color={'gray.500'}>
            #NeverStopLearning | Reactjs (Nextjs). Estudando Golang
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={'red.400'}
                _hover={{ bg: 'red.500' }}>
                Get started
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
              >
                How It Works
              </Button>
            </Stack>
          </Stack>

          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            w={'full'}>
            <Center>
              <Image
                alt={'Hero Image'}
                objectFit={'cover'}
                alignItems='center'
                w={'100%'}
                h={'100%'}
                loading="lazy"
                src={
                  'https://raw.githubusercontent.com/create-go-app/cli/master/.github/images/cgapp_logo%402x.png'
                }
              />
            </Center>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}