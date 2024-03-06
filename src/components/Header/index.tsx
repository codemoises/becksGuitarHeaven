import {
  Box,
  Flex,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { User } from "@styled-icons/boxicons-regular/User";
import { Cart } from "@styled-icons/ionicons-outline/Cart";
import { Search } from "@styled-icons/evaicons-solid/Search";

export default function Header() {
  return (
    <Box width={"100%"} margin={["22px 0", "45px 0", "45px 0", "45px 0", "45px 0"]}>
        <Flex
          maxWidth={"1420px"}
          margin={"0 auto"}
          padding={["0 16px", "0 62px", "0 62px", "0 62px", "0 62px"]}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box width={"160px"}>
            <Image
              width={"100%"}
              src={"/assets/images/logoBGH.svg"}
              alt={"Logo Beck's Guitar Heaven"}
              loading="lazy"
            />
          </Box>
          <Box width={["280px", "320px", "360px", "400px", "440px"]} display={["none", "none", "block", "block", "block"]} margin={"0 36px"}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Search width={"15px"} color={"gray"} />
              </InputLeftElement>
              <Input placeholder="Pesquisar" borderRadius={"20px"} _focusVisible={{ zIndex: 1, borderColor: "1px solid black", boxShadow: "0 0 0 1px black" }} />
            </InputGroup>
          </Box>
          <Flex alignItems={"center"} gap={["10px", "24px", "24px", "24px", "24px"]}>
            <Box width={"26px"}>
              <Cart />
            </Box>
            <Box width={"26px"}>
              <User />
            </Box>
          </Flex>
        </Flex>
        <Box margin={["16px auto", "26px auto", "26px auto", "26px auto", "26px auto"]} padding={["0 16px", "0 62px", "0 62px", "0 62px", "0 62px"]} display={["block", "block", "none", "none", "none"]}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Search width={"15px"} color={"gray"} />
              </InputLeftElement>
              <Input placeholder="Pesquisar" borderRadius={"20px"} _focusVisible={{ zIndex: 1, borderColor: "1px solid black", boxShadow: "0 0 0 1px black" }} />
            </InputGroup>
          </Box>
    </Box>
  );
}
