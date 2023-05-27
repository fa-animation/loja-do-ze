import { MARQUEE_TEXT, MARQUEE_SEPARATOR_COLORS } from "@/utils";
import { Box, Heading, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

export const Ticker = () => {
  const keys = [...MARQUEE_TEXT, ...MARQUEE_TEXT];
  const colors = [...MARQUEE_SEPARATOR_COLORS, ...MARQUEE_SEPARATOR_COLORS];
  return (
    <Box pb={8} data-testid="ticker" __css={{ "& .marquee": { minWidth: "max-content" } }}>
      <Marquee speed={25} gradientColor={[0, 0, 0]} gradientWidth={100} style={{ overflow: "hidden" }}>
        {keys.map((key: any, i: any) => (
          <Heading as="span" whiteSpace="nowrap" mr="4" flexShrink={0} fontSize={["5xl", null, "7xl"]} key={i}>
            {key}
            <Text my="auto" verticalAlign="middle" fontSize={["2xl", null, "4xl"]} as="span" mx={8} color={colors[i]}>
              •
            </Text>
          </Heading>
        ))}
      </Marquee>
    </Box>
  );
};
