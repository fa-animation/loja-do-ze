import { Badge, Box, Flex, Progress, Text, VStack } from "@chakra-ui/react";

type StatusPorps = {
  status: string;
  message: string;
  uptime: number;
}
export const StatusHeading = ({ message, status, uptime }: StatusPorps) => {
  return (
    <Box p={2}>
      <VStack spacing={4} align="start">
        <Flex align="center">
          <Badge
            colorScheme={status === 'Online' ? 'green' : 'red'}
            fontSize="lg"
            fontWeight="bold"
            mr={2}
          >
            {status}
          </Badge>
          <Text fontSize="lg" color={"white"}>{message}</Text>
        </Flex>
        <Box w="100%">
          <Text fontSize="lg" color={"white"}>Tempo de atividade do site:</Text>
          <Progress value={uptime} size="sm" colorScheme="green" />
          <Text fontSize="sm" textAlign="right" color={"white"}>{uptime}%</Text>
        </Box>
      </VStack>
    </Box>
  )
}