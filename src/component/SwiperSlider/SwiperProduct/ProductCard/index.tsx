import type { NextPage } from "next"
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Img as Image, Stack, Text, } from "@chakra-ui/react"

type ProdcutProps = {
  title: string;
  description: string;
  price: number;
  photo: string;
  // category: string;
  // rating: number;
}

export const ProductCard: NextPage<ProdcutProps> = ({
  title, description, price, photo
}) => {
  return (
    <Card maxW='sm' display={"flex"}>
      <Box flex={1}>
        <CardBody>
          <Image
            src={photo}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
            <Text>
              {description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Box>
    </Card>
  )
}