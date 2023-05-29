/* eslint-disable */
import {
  Button,
  chakra,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { HeadingChakra } from '../../StatsCount/HeadingChakra';

export const Newsletter = () => {
  return (
    <chakra.form width={{ base: 'md', md: 'sm' }} onSubmit={(e) => e.preventDefault()}>
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