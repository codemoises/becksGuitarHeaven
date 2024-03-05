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
    <Box width={"100%"} margin={"45px 0"}>
      <Flex
        maxWidth={"1420px"}
        margin={"0 auto"}
        padding={"0 62px"}
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
        <Box width={"440px"} margin={"0 36px"}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Search width={"15px"} color={"gray"} />
            </InputLeftElement>
            <Input borderRadius={"20px"} placeholder="Pesquisar" />
          </InputGroup>
        </Box>
        <Flex alignItems={"center"} gap={"24px"}>
          <Box width={"26px"}>
            <Cart />
          </Box>
          <Box width={"26px"}>
            <User />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
