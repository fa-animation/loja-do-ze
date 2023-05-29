import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const CountAnimation = ({ value, duration }: any) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0
    const end = parseInt(value)
    const difference = end - start
    const increment = Math.ceil(difference / (duration * 60))
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 1000 / 60)
    return () => {
      clearInterval(timer)
    };
  }, [value, duration])

  return (
    <Text fontSize="3xl" fontWeight="bold">
      {count.toLocaleString()}
    </Text>
  );
};