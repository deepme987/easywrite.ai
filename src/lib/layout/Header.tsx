import { Box, Flex, Text, HStack } from "@chakra-ui/react";
import { FaFeatherAlt } from "react-icons/fa";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" py={6}>
      <HStack spacing={3}>
        <Box
          p={2}
          borderRadius="xl"
          bg="purple.50"
          border="2px"
          borderColor="purple.200"
        >
          <FaFeatherAlt size={24} color="#9F7AEA" />
        </Box>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          bgGradient="linear(to-r, purple.500, pink.500)"
          bgClip="text"
        >
          EasyWrite.ai
        </Text>
      </HStack>
    </Flex>
  );
};

export default Header;
