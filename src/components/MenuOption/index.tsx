import React from "react";
import NextLink from "next/link";
import { Box, Link } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface MenuOptionProps {
  children: React.ReactNode;
  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
  href: string;
  dropDown?: boolean;
  visible?: boolean;
}

export default function MenuOption({
  children,
  handleMouseEnter,
  handleMouseLeave,
  href,
  dropDown = false,
  visible = false,
}: MenuOptionProps) {
  return (
    <Box
      className={visible ? "navHovered" : "linkHovered"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        as={NextLink}
        href={href}
        position={"relative"}
        fontSize={"14px"}
        fontWeight={"500"}
        letterSpacing={"0px"}
        padding={"32px 32px 20px 32px"}
      >
        {children}
        {dropDown ? <ChevronDownIcon /> : ""}
      </Link>
    </Box>
  );
}
