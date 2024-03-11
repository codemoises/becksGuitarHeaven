import React from 'react';
import NextLink from 'next/link';
import { Box, Link } from "@chakra-ui/react";

interface MenuOptionProps {
    children: React.ReactNode;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    href: string;
}

export default function MenuOption({ children, handleMouseEnter, handleMouseLeave, href }: MenuOptionProps) {
    return (
        <Box className='linkHovered' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link as={NextLink} href={href}>
                {children}
            </Link>
        </Box>
    );
};