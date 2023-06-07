import { Badge, Box, Text } from "@chakra-ui/react";
type ServiceProps = {
  name: string;
  color:string;
  status: string
}

export const StatusService = ({ name, color, status }: ServiceProps) => {
  return (
    <Box
      key={name}
      color={"white"}
      mt={3}
      bg="gray.600"
      p={3}
      rounded="lg"
    >
      <Text>{name}</Text>
      <Badge bg={color}>{status}</Badge>
    </Box>
  )
};