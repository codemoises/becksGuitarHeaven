import NextLink from 'next/link'
import { Flex, Box, Link, Heading } from "@chakra-ui/react";

export default function NavLinks() {
    return (
        <Box>
            <Flex padding={"32px 0 20px 0"} alignItems={"center"} justifyContent={"center"}>
                <Box className='linkHovered'>
                    <Link as={NextLink} href={"#"}>
                        Modelos
                    </Link>
                </Box>
                <Box className='linkHovered'>
                    <Link as={NextLink} href={"#"}>
                        Elétricas
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
            <Box className={""} boxShadow={"0 20px 30px 0 rgba(0, 0, 0, .3)"}>
                <Box maxWidth={"1420px"} margin={"0 auto"} padding={"16px 62px"}>
                    <Box marginBottom={"22px"} borderBottom={"1px solid #bfc0c1"} padding={"18px 0"}>
                        <Heading fontSize={"18px"}>Elétricas</Heading>
                    </Box>
                    <Flex flexDirection={"column"}>
                        <Box paddingBottom={"12px"}>
                            <Link as={NextLink} href={"#"}>
                                Stratocaster
                            </Link>
                        </Box>
                        <Box paddingBottom={"12px"}>
                            <Link as={NextLink} href={"#"}>
                                Stratocaster
                            </Link>
                        </Box>
                        <Box paddingBottom={"12px"}>
                            <Link as={NextLink} href={"#"}>
                                Stratocaster
                            </Link>
                        </Box>
                        <Box paddingBottom={"12px"}>
                            <Link as={NextLink} href={"#"}>
                                Stratocaster
                            </Link>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};