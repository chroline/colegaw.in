import { HStack, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { RiAtFill, RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri";
import { SiBuymeacoffee } from "react-icons/si";

const _HeroSocialIcon = ({ color, href, children }: { color: string; href: string; children: JSX.Element }) => (
  <Link
    href={href}
    isExternal
    w={6}
    color={"currentColor"}
    opacity={0.65}
    sx={{ transition: "color .1s ease, opacity .1s ease", _hover: { color, opacity: 1 } }}
  >
    {children}
  </Link>
);

export const Socials = () => {
  const githubColor = useColorModeValue("gray.900", "gray.50");
  const linkedinColor = useColorModeValue("lightBlue.600", "lightBlue.300");
  const twitterColor = useColorModeValue("lightBlue.500", "lightBlue.400");
  const buymeacoffeeColor = useColorModeValue("yellow.500", "yellow.400");
  const emailColor = useColorModeValue("teal.600", "teal.400");

  return (
    <Stack direction={{ base: "row", sm: "column" }}>
      <HStack spacing={8}>
        <_HeroSocialIcon color={githubColor} href={"https://github.com/chroline"}>
          <RiGithubFill size={"100%"} />
        </_HeroSocialIcon>
        <_HeroSocialIcon color={linkedinColor} href={"https://linkedin.com/in/colegawin"}>
          <RiLinkedinBoxFill size={"100%"} />
        </_HeroSocialIcon>
        <_HeroSocialIcon color={twitterColor} href={"https://twitter.com/colegawin_"}>
          <RiTwitterFill size={"100%"} />
        </_HeroSocialIcon>
        <_HeroSocialIcon color={buymeacoffeeColor} href={"https://buymeacoffee.com/colegawin"}>
          <SiBuymeacoffee size={"100%"} />
        </_HeroSocialIcon>
        <_HeroSocialIcon color={emailColor} href={"mailto:hi@colegaw.in"}>
          <RiAtFill size={"100%"} />
        </_HeroSocialIcon>
      </HStack>
    </Stack>
  );
};
