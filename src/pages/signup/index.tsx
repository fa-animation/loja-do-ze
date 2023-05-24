import React from 'react';
import Head from 'next/head';
import {
  Box,
  Button,
  Checkbox,
  Container,
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { parseCookies, setCookie } from 'nookies';
import { PasswordField } from '@/component/PassworldField';
import NextLink from "next/link"
import { BiErrorAlt } from 'react-icons/bi'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../schema/';

type FormValues = {
  nome: string;
  passworld: string;
  email: string;
  city: string;
  cpf: string;
  nascimento: string;
  tel: string;
};

export default function Signup() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const toast = useToast()
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema)
  });
  async function onSubmitHandler<FormValues>(data: FormValues): Promise<void> {
    try {
      setLoading(true)
      console.log(data)
      toast({
        title: 'Cadastrado com sucesso.',
        description: "Você foi registrado com sucesso!",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error: any) {
      console.log(error)
      toast({
        title: 'Não foi possível cadastrar.',
        description: error.response.data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  };
  return (
    <>
      <Head>
        <title>Signup Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        mt={6}
        maxW="120hc"
        py={{ base: '16', md: '24' }}
        px={{ base: '0', sm: '8' }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
              <Heading size={{ base: 'xs', md: 'sm' }}>
                Faça login na sua conta
              </Heading>
            </Stack>
          </Stack>
          <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            // bg={{ base: 'transparent', sm: 'bg-surface' }}
            boxShadow={{ base: 'none', sm: 'md' }}
            borderRadius={{ base: 'none', sm: 'xl' }}
            bg='black.300'
          >
            <chakra.form as={'form'} onSubmit={handleSubmit(onSubmitHandler)}>
              <Stack spacing="6">
                <Stack spacing="5">
                  <SimpleGrid columns={[1, 1, 2]} spacing={2}>
                    <FormControl isInvalid={!!errors.nome}>
                      <FormLabel htmlFor="nome">Nome</FormLabel>
                      <Input
                        id="email" type="text"
                        {...register('nome')}
                      />
                      <FormErrorMessage>
                        {errors.nome?.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.email}>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                      />
                      <FormErrorMessage>
                        {errors.email?.message}
                      </FormErrorMessage>
                    </FormControl>
                  </SimpleGrid>
                  <SimpleGrid columns={[1, 1, 2]} spacing={2}>
                    <FormControl isInvalid={!!errors.cpf}>
                      <FormLabel htmlFor="cpf">CPF</FormLabel>
                      <Input
                        id="cpf"
                        type="number"
                        {...register('cpf')}
                      />
                      <FormErrorMessage>
                        {errors.cpf?.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.tel}>
                      <FormLabel htmlFor="tel">Telefone</FormLabel>
                      <Input
                        id="tel"
                        type="number"
                        {...register('tel')}
                      />
                      <FormErrorMessage>
                        {errors.tel?.message}
                      </FormErrorMessage>
                    </FormControl>
                  </SimpleGrid>
                  <PasswordField
                    isInvalid={!!errors.passworld}
                    error={errors.passworld?.message}
                    {...register('passworld')}
                  />
                </Stack>
                <HStack justify="space-between">
                  <Checkbox defaultChecked disabled>Aceita os termos</Checkbox>
                  {/* <Button variant="link" colorScheme="blue" size="sm">
                  Forgot password?
                </Button> */}
                </HStack>
                <Stack spacing="6">
                  <Button
                    type="submit"
                    width="full"
                    mt={4}
                    outline="none"
                    _hover={{ backgroundColor: 'purple.600' }}
                    backgroundColor="purple.500"
                    isLoading={loading}
                    loadingText='Submitting'
                  >
                    Cadastrar
                  </Button>
                  <HStack spacing="1" justify="center">
                    <Text color="muted">Já tem uma conta?</Text>
                    <NextLink href={'/login'}>
                      <Button variant="link" colorScheme="blue">
                        login
                      </Button>
                    </NextLink>
                  </HStack>
                </Stack>
              </Stack>
            </chakra.form>
          </Box>
        </Stack>
      </Container>
    </>
  )
}



export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);
  if (cookies['backendtoken']) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};