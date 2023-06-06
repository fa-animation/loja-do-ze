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
    "id": 1,
    "title": "Qual é o prazo de entrega?",
    "description": "O prazo de entrega pode variar de acordo com a região e o tipo de produto. Normalmente, enviamos os pedidos dentro de 1-3 dias úteis e o prazo de entrega estimado é exibido durante o processo de checkout."
  },
  {
    "id": 2,
    "title": "Posso acompanhar o meu pedido?",
    "description": "Sim, você poderá acompanhar o seu pedido. Assim que o seu pedido for enviado, enviaremos um e-mail com o número de rastreamento para que você possa acompanhar o seu pacote."
  },
  {
    "id": 3,
    "title": "Qual é a política de devolução?",
    "description": "Aceitamos devoluções dentro de 30 dias após a entrega do produto. O produto deve estar em perfeitas condições, na embalagem original e com as etiquetas intactas. Entre em contato conosco para obter mais detalhes sobre o processo de devolução."
  },
  {
    "id": 4,
    "title": "Vocês oferecem frete grátis?",
    "description": "Sim, oferecemos frete grátis para pedidos acima de R$ 100,00. O frete grátis é válido apenas para entregas dentro do território nacional."
  },
  {
    "id": 5,
    "title": "Quais métodos de pagamento vocês aceitam?",
    "description": "Aceitamos cartões de crédito das principais bandeiras, boleto bancário e transferência bancária. Durante o processo de checkout, você poderá escolher o método de pagamento de sua preferência."
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
                  {faq.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                fontSize="md"
                color={textColor}
              >
                {faq.description}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </ChakraAccordion>
    </Container>
  );
};
export default Accordion;