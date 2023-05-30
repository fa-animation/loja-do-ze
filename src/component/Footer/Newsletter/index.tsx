/* eslint-disable */
import {
  Button,
  chakra,
  HTMLChakraProps,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { HeadingChakra } from '../../StatsCount/HeadingChakra';

export const Newsletter = (props: HTMLChakraProps<'form'>) => {
  return (
    <chakra.form {...props} onSubmit={(e) => e.preventDefault()} maxW="300px">
      <Stack spacing="4">
        <HeadingChakra>ASSINE NOSSA NEWSLETTER</HeadingChakra>
        <Text>
          Seja notificado quando adicionarmos novos produtos.
        </Text>
        <Stack spacing="4" direction={{ base: 'column', md: 'row' }}>
          <Input
            bg={useColorModeValue('white', 'inherit')}
            placeholder="Ex: @"
            type="email"
            required
            focusBorderColor={useColorModeValue('blue.500', 'blue.300')}
            _placeholder={{
              opacity: 1,
              color: useColorModeValue('gray.500', 'whiteAlpha.700'),
            }}
          />
          <Button
            type="submit"
            bg="purple.500"
            flexShrink={0}
            width={{ base: 'full', md: 'auto' }}
          >
            Inscrever
          </Button>
        </Stack>
      </Stack>
    </chakra.form>
  );
};