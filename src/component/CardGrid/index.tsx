import React from 'react';
import {
  Container, chakra, Grid, Box, Flex, Heading, Text, Center, useColorModeValue
} from '@chakra-ui/react';
import { InfoCardType, infoCard } from '@/utils';

export default function CardGrid() {
  return (
    <Box
      as="section"
      bg="teal.400"
      mt={10}
    >
      <Container py="120px" maxW="1280px" pt="0">
        <Box maxW="760px" mx="auto" textAlign="center" >
          <chakra.h2 textStyle="heading" mb="5" fontSize={{ base: '2rem', md: '2.5rem' }}>
            O que oferecemos?
          </chakra.h2>
        </Box>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={10}
          px={{ md: 12 }}
        >
          {infoCard.map((data: InfoCardType, index: number) => (
            <InfoCards
              key={index}
              icon={data.icon}
              title={data.title}
              description={data.description}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const InfoCards: React.FC<InfoCardType> = ({ icon, title, description }) => (
  <Box
    rounded="12px"
    shadow="base"
    p="40px"
    bg={useColorModeValue('white', 'gray.600')}
  >
    <Center>
      <Flex
        rounded="full"
        w="12"
        h="12"
        bg="teal.500"
        align="center"
        justify="center"
      >
        {icon}
      </Flex>
    </Center>
    <Heading as="h3" size="md" fontWeight="semibold" mt="1em" mb="0.5em" textAlign={'center'}  color={useColorModeValue('#18216d', 'white')}>
      {title}
    </Heading>
    <Text fontSize="lg" opacity={0.7}  color={useColorModeValue('#18216d', 'white')} textAlign={"center"}>
      {description}
    </Text>
  </Box>
);
