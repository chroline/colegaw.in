import React from "react";

import { HStack, Link, Stack, Tooltip } from "@chakra-ui/react";
import {
  RiAtFill,
  RiFacebookFill,
  RiGithubFill,
  RiGitlabFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";

const _HeroSocialIcon: React.FC<{ label: string; color: string; href: string }> = ({
  label,
  color,
  href,
  children,
}) => (
  <Tooltip label={label}>
    <Link href={href} isExternal w={6} color={color}>
      {children}
    </Link>
  </Tooltip>
);

export const Socials = () => {
  return (
    <Stack direction={{ base: "row", sm: "column" }}>
      <HStack spacing={{ base: 5, sm: 8 }}>
        <_HeroSocialIcon label={"GitLab: portfolio work 💼"} color={"orange.600"} href={"https://gitlab.com/chroline"}>
          <RiGitlabFill size={"100%"} />
        </_HeroSocialIcon>
        <_HeroSocialIcon
          label={"GitHub: open source projects 👥"}
          color={"gray.900"}
          href={"https://github.com/chroline"}
        >
          <RiGithubFill size={"100%"} />
        </_HeroSocialIcon>
        <_HeroSocialIcon
          label={"Facebook: my personal life 👀"}
          color={"indigo.600"}
          href={"https://facebook.com/colegawin"}
        >
          <RiFacebookFill size={"100%"} />
        </_HeroSocialIcon>
        <_HeroSocialIcon
          label={"Instagram: my picturesque life 📸"}
          color={"rose.600"}
          href={"https://instagram.com/colegawin"}
        >
          <RiInstagramFill size={"100%"} />
        </_HeroSocialIcon>
        <_HeroSocialIcon
          label={"Linkedin: my business life 🧑‍💼"}
          color={"lightBlue.600"}
          href={"https://linkedin.com/in/colegawin"}
        >
          <RiLinkedinBoxFill size={"100%"} />
        </_HeroSocialIcon>
        <_HeroSocialIcon
          label={"Twitter: my marketable life 🤩"}
          color={"lightBlue.500"}
          href={"https://twitter.com/colegawin_"}
        >
          <RiTwitterFill size={"100%"} />
        </_HeroSocialIcon>
        <_HeroSocialIcon label={"Send me an email!"} color={"teal.600"} href={"mailto:hi@colegaw.in"}>
          <RiAtFill size={"100%"} />
        </_HeroSocialIcon>
      </HStack>
    </Stack>
  );
};
