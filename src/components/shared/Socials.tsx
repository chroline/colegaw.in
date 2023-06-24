import { HStack, Link, Stack } from "@chakra-ui/react";
import { RiAtFill, RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri";
import { SiBuymeacoffee } from "react-icons/si";

const _HeroSocialIcon = ({ color, href, children }: { color: string; href: string; children: JSX.Element }) => (
  <Link href={href} isExternal w={6} color={"gray.600"} sx={{ transition: "color .1s ease", _hover: { color } }}>
    {children}
  </Link>
);

export const Socials = () => {
  return (
    <Stack direction={{ base: "row", sm: "column" }}>
      <HStack spacing={8}>
        <_HeroSocialIcon color={"gray.900"} href={"https://github.com/chroline"}>
          <RiGithubFill size={"100%"} />
        </_HeroSocialIcon>
        <_HeroSocialIcon color={"lightBlue.600"} href={"https://linkedin.com/in/colegawin"}>
          <RiLinkedinBoxFill size={"100%"} />
        </_HeroSocialIcon>
        <_HeroSocialIcon color={"lightBlue.500"} href={"https://twitter.com/colegawin_"}>
          <RiTwitterFill size={"100%"} />
        </_HeroSocialIcon>
        <_HeroSocialIcon color={"yellow.500"} href={"https://buymeacoffee.com/colegawin"}>
          <SiBuymeacoffee size={"100%"} />
        </_HeroSocialIcon>
        <_HeroSocialIcon color={"teal.600"} href={"mailto:hi@colegaw.in"}>
          <RiAtFill size={"100%"} />
        </_HeroSocialIcon>
      </HStack>
    </Stack>
  );
};
