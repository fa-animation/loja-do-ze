import Footer from "@/component/Footer";
import { ProductSwiper } from "@/component/SwiperSlider";
import { Box, Button, Container, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import Head from 'next/head';
import NextLink from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Loja do zé - Vende tudo!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg="orange.500" height={500} color="white" w="full">
        <Container maxW={'7xl'}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }} py={{ base: 20, md: 28 }}>
            <Box maxW='32rem'>
              <Heading
                mb={4}
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', }}
              >
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
                    bg: 'blue.400',
                    zIndex: -1,
                  }}>
                  Loja do Zé
                </Text>, onde você acha a maior variedade!
              </Heading>
              <Text fontSize='xl'>
                Aqui você econtra de tudo e um pouco. Oferecemos a maior variedade de produtos
              </Text>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Banner />
      <ProductSwiper />
      <ProductSwiper />
      <ProductSwiper />
      <Footer/>
    </>
  )
}

const Banner = () => (
  <Container
    maxW={'7xl'}
    mb={30}
    mt={-14}
  >
    <Box
      px={{ base: 4, md: 10 }}
      py={10}
      bg="teal.600"
      rounded={"2xl"}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} >
        <Box>
          <Heading as={'h3'} mb={2}>
            Explore nossos produtos
          </Heading>
          <Text fontSize={'lg'}>
            Os melhores preços você encontra aqui!
          </Text>
        </Box>
        <Flex w={'full'} align={'center'} justify={'center'}>
          <NextLink href={"/"} passHref>
            <Button
              as={'a'}
              bg={'blue.500'}
              color={'white'}
              px={8}
              size={'lg'}
              fontSize={'md'}
              rounded={'md'}
              _hover={{
                bg: 'blue.500',
              }}>
              Procurar produtos
            </Button>
          </NextLink>
        </Flex>
      </SimpleGrid>
    </Box>
  </Container>
)