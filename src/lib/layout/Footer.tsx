import { Text, VStack, HStack, Link, Icon, Divider } from "@chakra-ui/react";
import { FaEnvelope, FaFeatherAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <VStack as="footer" width="full" spacing={4} pt={10}>
      <Divider borderColor="gray.200" />
      <VStack spacing={3} pb={6}>
        <HStack spacing={6}>
          <Link
            href="https://yidm7xbz9cz.typeform.com/to/gWQBgAXg"
            isExternal
            color="gray.600"
            _hover={{ color: "purple.500" }}
            fontWeight="medium"
          >
            <HStack spacing={2}>
              <Icon as={FaEnvelope} />
              <Text>Contact Us</Text>
            </HStack>
          </Link>
        </HStack>
        <HStack spacing={2} color="gray.500" fontSize="sm">
          <Icon as={FaFeatherAlt} color="purple.400" />
          <Text>
            © {new Date().getFullYear()} EasyWrite.ai - Premium Domain for Sale
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Footer;
