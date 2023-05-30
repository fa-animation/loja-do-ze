import React from 'react';
import { Box, Container, Grid, Text, chakra, SimpleGrid } from '@chakra-ui/react';
import { statsData } from '@/utils';
import { StatsType } from '@/types';
import { HeadingChakra } from './HeadingChakra';
import { StatsIcon } from './StatsIcon';
import { CountAnimation } from './CountAnimation';

const Stats = () => {
  return (
    <Box
      w="full"
      p={[4, 8]}
      textAlign={"center"}
      justifyContent="center"
    >
      <Box maxW="760px" mx="auto" textAlign="center" mb="5">
        <chakra.h2 textStyle="heading" fontSize={{ base: '2rem', md: '2.5rem' }}>
          Nossas métricas
        </chakra.h2>
        <Text textAlign={"center"}>
          Veja os resultados do nosso trabalho
        </Text>
      </Box>
      <Container maxWidth="107ch">
        <SimpleGrid
          columns={[1, 2,  4]} 
          spacing="10px" 
          pt="3"
          color="white"
        >
          {statsData.map((item: StatsType, index) => (
            <Box
              key={index}
              bg={"gray.600"}
              p={2}
              borderBottom="5px solid #18f98f"
              textAlign={"center"}
            >
              <StatsIcon
                icon={item.icon}
                text={item.text}
              />
              <CountAnimation value={item.value} duration={5} />
              <HeadingChakra>{item.text}</HeadingChakra>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Stats;