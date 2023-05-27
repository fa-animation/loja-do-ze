import { layoutDimensions } from "@/utils/dimensions";
import { Box, Flex, FlexProps, Link, Text } from "@chakra-ui/react";
const currentYear = new Date().getFullYear();

export const Footer = (props: FlexProps) => {
  return (
    <>
      <Box mt="8" py="8" px={layoutDimensions.px} bgColor="transparent" as="footer" data-testid="footer" {...props}>
        <Flex w={layoutDimensions.width} mx="auto" justifyContent="space-between">
          <Text fontSize="sm">
            &copy; Copyright Zé {currentYear}.{" "}
          </Text>
          <Text fontSize="sm" textAlign="right">
            KayoRonald{" "}
            <Link variant="colored" href="https://github.com/KayoRonald/" isExternal>
              view source
            </Link>
          </Text>
        </Flex>
      </Box>
    </>
  );
};