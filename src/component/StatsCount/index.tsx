import React, { useEffect, useState } from 'react';
import { Box, Center, Grid, Icon, Text, chakra } from '@chakra-ui/react';
import { statsData } from '@/utils';

const CountAnimation = ({ value, duration }: any) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const difference = end - start;
    const increment = Math.ceil(difference / (duration * 60));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);

    return () => {
      clearInterval(timer);
    };
  }, [value, duration]);

  return (
    <Text fontSize="3xl" fontWeight="bold">
      {count.toLocaleString()}
    </Text>
  );
};

const Stats = () => {
  return (
    <Box
      bg={"purple.700"}
      mb={7}
      w="full"
      p={[4, 8]}
      textAlign={"center"}
      justifyContent="center"
      color="white"
    >
      <Box maxW="760px" mx="auto" textAlign="center"  mb="5">
        <chakra.h2 textStyle="heading" fontSize={{ base: '2rem', md: '2.5rem' }}>
          Nossas métricas
        </chakra.h2>
        <Text textAlign={"center"}>
          Veja os resultados do nosso trabalho
        </Text>
      </Box>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 28vmin)' }}
        gap={2}
        justifyContent="center"
      >
        {statsData.map((item, index) => (
          <Box
            key={index}
            bg={"purple.600"}
            p={2}
            borderBottom="5px solid #18f98f"
          >
            <Center>
              <Icon
                mr={3}
                w={7}
                h={7}
                as={item.icon}
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                textAlign={"center"}
              />
            </Center>
            <CountAnimation value={item.value} duration={2} />
            <Text>{item.text}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Stats;