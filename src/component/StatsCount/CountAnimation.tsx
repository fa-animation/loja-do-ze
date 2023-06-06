import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

export const CountAnimation = ({ value, duration }: any) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });
  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value);
      const difference = end - start;
      const increment = Math.ceil(difference / (duration * 60));
      let currentCount = start;
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= end) {
          setCount(end);
          console.log(end)
          clearInterval(timer);
        } else {
          setCount(currentCount);
        }
      }, 1000 / 60);
      return () => {
        clearInterval(timer);
      };
    }
  }, [value, duration, inView]);
  return (
    <Text fontSize="3xl" fontWeight="bold" ref={ref}>
      {count.toLocaleString()}
    </Text>
  );
}