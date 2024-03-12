import React from 'react';
import NextLink from 'next/link';
import { Box, Link } from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons';

interface MenuOptionProps {
    children: React.ReactNode;
    handleMouseEnter?: () => void;
    handleMouseLeave?: () => void;
    href: string;
    dropDown?: boolean;
}

export default function MenuOption({ children, handleMouseEnter, handleMouseLeave, href, dropDown = false }: MenuOptionProps) {
    return (
        <Box className='linkHovered' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link as={NextLink} href={href}>
                {children}
                {dropDown ? <ChevronDownIcon /> : ""}
            </Link>
        </Box>
    );
};