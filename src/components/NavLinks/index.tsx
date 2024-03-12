import NextLink from "next/link";
import { Flex, Box, Link, Heading } from "@chakra-ui/react";
import { useState } from "react";
import MenuOption from "../MenuOption";

export default function NavLinks() {
  const [isModelVisible, setModelVisible] = useState(false);
  const [isElectricsVisible, setElectricsVisible] = useState(false);
  const [isAcousticsVisible, setAcousticsVisible] = useState(false);

  const handleModelEnter = () => {
    setModelVisible(true);
  };

  const handleModelLeave = () => {
    setModelVisible(false);
  };

  //ELECTRICs
  const handleElectricsEnter = () => {
    setElectricsVisible(true);
  };

  const handleElectricsLeave = () => {
    setElectricsVisible(false);
  };

  //ACOUSTICS
  const handleAcousticsEnter = () => {
    setAcousticsVisible(true);
  };

  const handleAcousticsLeave = () => {
    setAcousticsVisible(false);
  };

  return (
    <Box>
      <Flex
        padding={"32px 0 20px 0"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <MenuOption
          children={"Modelos"}
          handleMouseEnter={() => handleModelEnter()}
          handleMouseLeave={() => handleModelLeave()}
          href={"#"}
          dropDown
        />
        <MenuOption
          children={"Elétricas"}
          handleMouseEnter={() => handleElectricsEnter()}
          handleMouseLeave={() => handleElectricsLeave()}
          href={"#"}
          dropDown
        />
        <MenuOption
          children={"Acústicas"}
          handleMouseEnter={() => handleAcousticsEnter()}
          handleMouseLeave={() => handleAcousticsLeave()}
          href={"#"}
          dropDown
        />
        <MenuOption
          children={"Sobre nós"}
          href={"#"}
        />
        <MenuOption
          children={"Contato"}
          href={"#"}
        />
      </Flex>
      {isModelVisible && (
        <Box
          onMouseEnter={handleModelEnter}
          onMouseLeave={handleModelLeave}
          boxShadow={"0 20px 30px 0 rgba(0, 0, 0, .3)"}
        >
          <Box maxWidth={"1420px"} margin={"0 auto"} padding={"16px 62px"}>
            <Box
              marginBottom={"22px"}
              borderBottom={"1px solid #bfc0c1"}
              padding={"18px 0"}
            >
              <Heading fontSize={"18px"}>Elétricas</Heading>
            </Box>
            <Flex flexDirection={"column"}>
              <Box paddingBottom={"12px"}>
                <Link as={NextLink} href={"#"}>
                  Stratocaster
                </Link>
              </Box>
            </Flex>
          </Box>
        </Box>
      )}
      {isElectricsVisible && (
        <Box
          onMouseEnter={handleElectricsEnter}
          onMouseLeave={handleElectricsLeave}
          boxShadow={"0 20px 30px 0 rgba(0, 0, 0, .3)"}
        >
          <Box maxWidth={"1420px"} margin={"0 auto"} padding={"16px 62px"}>
            <Box
              marginBottom={"22px"}
              borderBottom={"1px solid #bfc0c1"}
              padding={"18px 0"}
            >
              <Heading fontSize={"18px"}>Modelos</Heading>
            </Box>
            <Flex flexDirection={"column"}>
              <Box paddingBottom={"12px"}>
                <Link as={NextLink} href={"#"}>
                  Stratocaster
                </Link>
              </Box>
            </Flex>
          </Box>
        </Box>
      )}
      {isAcousticsVisible && (
        <Box
          onMouseEnter={handleAcousticsEnter}
          onMouseLeave={handleAcousticsLeave}
          boxShadow={"0 20px 30px 0 rgba(0, 0, 0, .3)"}
        >
          <Box maxWidth={"1420px"} margin={"0 auto"} padding={"16px 62px"}>
            <Box
              marginBottom={"22px"}
              borderBottom={"1px solid #bfc0c1"}
              padding={"18px 0"}
            >
              <Heading fontSize={"18px"}>Marcas</Heading>
            </Box>
            <Flex flexDirection={"column"}>
              <Box paddingBottom={"12px"}>
                <Link as={NextLink} href={"#"}>
                  Tagima
                </Link>
              </Box>
            </Flex>
          </Box>
        </Box>
      )}
    </Box>
  );
};
