import {
  Heading,
  Text,
  Center,
  Button,
  Container,
  Stack,
  Flex,
  Img as Image,
  Box
} from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from "next/link"
import Accordion from '@/component/Accordion';
import CardGrid from '@/component/CardGrid';
import { Ticker } from '@/component/Marquee';
import { AppStores } from '@/component/Bannner/AppStore';
import Stats from '@/component/StatsCount';
import Footer from '@/component/Footer';
import { FaSearchPlus } from 'react-icons/fa'
export default function Home() {
  return (
    <>
      <Head>
        <title>Loja do zé - Vende tudo!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={'7xl'} id="intro">
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', lg: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }} mb={3}>
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
              <NextLink href={"/home"}>
                <Button
                  bg='teal.600'
                  mt='24px'
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  color='white'
                  w="100%"
                  _hover={{
                    bg: 'teal.500'
                  }}
                  outline={'none'}
                  leftIcon={<FaSearchPlus />}
                >
                  Procurar produtos
                </Button>
              </NextLink>
            </Box>
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
                  'https://assets.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e2983671b93d4b_drawkit-32%20(1).png'
                }
              />
            </Center>
          </Flex>
        </Stack>
      </Container>
      <Ticker />
      <CardGrid />
      <Stats />
      <AppStores />
      <Accordion />
      <Footer />
    </>
  );
}