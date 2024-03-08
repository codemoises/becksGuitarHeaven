import NextLink from 'next/link'
import { Flex, Box, Link } from "@chakra-ui/react";

export default function NavLinks() {
    return (
        <Flex padding={"32px 0"} alignItems={"center"} justifyContent={"center"}>
            <Box className='linkHovered'>
                <Link as={NextLink} href={"#"}>
                    Modelos
                </Link>
            </Box>
            <Box className='linkHovered'>
                <Link as={NextLink} href={"#"}>
                    Modelos
                </Link>
            </Box>
            <Box className='linkHovered'>
                <Link as={NextLink} href={"#"}>
                    Acústicas
                </Link>
            </Box>
            <Box className='linkHovered'>
                <Link as={NextLink} href={"#"}>
                    Sobre nós
                </Link>
            </Box>
            <Box className='linkHovered'>
                <Link as={NextLink} href={"#"}>
                    Contato
                </Link>
            </Box>
        </Flex>
    );
};