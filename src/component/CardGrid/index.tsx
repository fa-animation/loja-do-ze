import React from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import { GrUpdate } from 'react-icons/gr';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import {
  Container, chakra, Grid, Box, Flex, Heading, Text, Center
} from '@chakra-ui/react';

interface InfoCardType {
  icon: JSX.Element;
  title: string;
  description: string;
}

const infoCard: InfoCardType[] = [
  {
    icon: <FiHelpCircle />,
    title: 'Qualidade na entrega',
    description: 'Contamos com atendimento ao usuário de sábado ao domingo das 7:00 às 21:00; também temos o suporte de terça à quinta...',
  },
  {
    icon: <AiFillSafetyCertificate />,
    title: 'Segurança',
    description: 'Tenha as melhores práticas de segurança e com visibilidade e monitoria de todas as operações..',
  },
  {
    icon: <GrUpdate />,
    title: 'Atualização dos conteúdos',
    description: 'Estaremos atualizando novos conteúdo e um catálogo completo, atualizado com as principais novidades..',
  },
];

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
            O que mais nós oferecemos?
          </chakra.h2>
        </Box>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={10}
          px={{ md: 12 }}
        >
          {infoCard.map((data, index) => (
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
    background="gray.600"
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
    <Heading as="h3" size="md" fontWeight="semibold" mt="1em" mb="0.5em" textAlign={'center'}>
      {title}
    </Heading>
    <Text fontSize="lg" opacity={0.7}>
      {description}
    </Text>
  </Box>
);
