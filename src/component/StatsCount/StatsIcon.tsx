import { Center, Icon, IconProps } from "@chakra-ui/react"
import { IconType } from "react-icons";

interface IconCtx extends IconProps {
  icon: IconType;
  text: string;
}

export const StatsIcon = ({ icon, text }: IconCtx) => {
  return (
    <Center>
      <Icon
        mr={3}
        w={7}
        h={7}
        as={icon}
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        color="white"
        data-icon={text}
      />
    </Center>
  )
}