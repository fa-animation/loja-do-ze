import type { NextPage } from 'next'
import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box, Container, Heading, Center, AccordionProps,
  useColorModeValue,
  Text
} from '@chakra-ui/react';

const faqDate = [
  {
    id: 1,
    header: 'Typesetting industry',
    body: " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 2,
    header: 'Typesetting industry',
    body: " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 3,
    header: 'Dummy text',
    body: " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
]

const Accordion: NextPage<AccordionProps> = () => {
  const bgColor = useColorModeValue('gray.30', 'gray.700')
  const textColor = useColorModeValue('#18216d', 'white')
  return (
    <Container maxWidth="74ch" mb="22px" mt={6}>
      <Center marginBottom={5}>
        <Heading as="h2">Perguntas frequentes</Heading>
      </Center>
      <ChakraAccordion allowMultiple bg={bgColor}>
        {faqDate.map((faq) => (
          <AccordionItem key={faq.id} borderTopWidth={0} borderBottomWidth={0} marginBottom="3px">
            <h2>
              <AccordionButton
                boxShadow="none"
                padding="0.8em 1.2em 0.8em 1.2em"

              >
                <Box flex="1" textAlign="left">
                  <strong>
                    <span style={{ color: '#737380' }}>0</span>
                    <span style={{ color: '#04D361' }}>
                      {faq.id}
                      .
                    </span>
                  </strong>
                  {' '}
                  {faq.header}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                fontSize="md"
                color={textColor}
              >
                {faq.body}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </ChakraAccordion>
    </Container>
  );
};
export default Accordion;