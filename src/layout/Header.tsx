/* eslint-disable */
import React from 'react';
import {
  Box, Button, chakra, CloseButton, Flex, HStack,
  IconButton, VisuallyHidden, VStack, useColorModeValue, useDisclosure, ButtonGroup
} from '@chakra-ui/react';
import { AiOutlineMenu, AiFillApple } from 'react-icons/ai'
import NextLink from "next/link"
import ThemeToggle from './ButtonToggle';
export default function NavHero() {
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <chakra.header
        borderTop="5px solid #8257e5"
        shadow="md"
        transition="all 0.5s ease-in-out"
        pos="fixed"
        top="0"
        zIndex="modal"
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        mb={2}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto" as="nav">
          <Flex>
            <VisuallyHidden>Logo</VisuallyHidden>
            <NextLink href={'/'}>
              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                {/* Logo */}
                <AiFillApple />
              </chakra.h1>
            </NextLink>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Produtos</Button>
              <Button variant="ghost">Quem somos</Button>
            </HStack>
            <ButtonGroup>
              <ThemeToggle />
              <NextLink href={'/login'}>
                <Button bg="purple.500" color="white" size="sm">
                  Entrar
                </Button>
              </NextLink>
            </ButtonGroup>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg="black"
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost">
                  Home
                </Button>
                <Button w="full" variant="ghost">
                  Produtos
                </Button>
                <Button w="full" variant="ghost">
                  Quem somos
                </Button>
                <NextLink href={'/login'}>
                  <Button w="full" variant="ghost">
                    Entrar
                  </Button>
                </NextLink>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};