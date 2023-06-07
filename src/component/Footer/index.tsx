import { Box, Stack, StackDivider, Flex, Text, Link, SimpleGrid, Img as Image, Center } from '@chakra-ui/react'
import { Newsletter } from './Newsletter';
const currentYear = new Date().getFullYear();

const Footer = () => (
  <Box as="footer" mx="auto" maxW="8xl" py="6" px={{ base: '4', md: '8' }}>
    <Stack spacing="10" divider={<StackDivider bg={"teal.700"} h={2} />}>
      <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '10', lg: '28' }}>
        <Box minW="100px">
          <Text fontSize="sm">
            &copy; Copyright Zé {currentYear}.{" "}
          </Text>
        </Box>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={2}>
          <SimpleGrid columns={[2, 2, 4]} spacing={{ base: '10', lg: '20' }}>
            <Box minW="100px">
            </Box>
          </SimpleGrid>
          <Newsletter width={{ base: 'md', md: 'sm' }} />
        </Stack>
      </Stack>
      <Flex
        justifyContent={{ base: 'center', lg: 'space-between' }}
        flexDirection={{ base: 'column', lg: 'row' }}
        alignItems={{base: 'center'}}
      >
        <Text fontSize="sm" textAlign="right">
          KayoRonald{" "}
          <Link variant="colored" href="https://github.com/KayoRonald/site-venda-marcos" isExternal>
            view source
          </Link>
        </Text>
        <Image src={"https://raw.githubusercontent.com/Dhanush-Saji/happy-cart/main/client/src/assets/payments.png"} />
      </Flex>
    </Stack>
  </Box>
);
export default Footer;